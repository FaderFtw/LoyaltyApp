import { Component, inject, NgZone, OnInit, signal } from '@angular/core';
import { IPurchase } from '../../../entities/purchase/purchase.model'; // Adjust path if necessary
import SharedModule from '../../../shared/shared.module';
import { ItemCountComponent } from '../../../shared/pagination';
import { ActivatedRoute, Data, ParamMap, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SortByDirective, SortDirective, SortService, SortState, sortStateSignal, SortOrder } from '../../../shared/sort';
import { DurationPipe, FormatMediumDatePipe, FormatMediumDatetimePipe } from '../../../shared/date';
import { ITEMS_PER_PAGE, PAGE_HEADER, TOTAL_COUNT_RESPONSE_HEADER } from '../../../config/pagination.constants';
import { combineLatest, filter, map, Observable, of, Subscription, switchMap, tap } from 'rxjs';
import { EntityArrayResponseType, PurchaseService } from '../../../entities/purchase/service/purchase.service'; // Adjust path if necessary
import { DataUtils } from '../../../core/util/data-util.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DEFAULT_SORT_DATA, ITEM_DELETED_EVENT, SORT } from '../../../config/navigation.constants';
import { HttpHeaders } from '@angular/common/http';
import dayjs from 'dayjs/esm';
import { UserService } from '../../../entities/user/service/user.service';
import { AccountService } from '../../../core/auth/account.service';
import { ILoyaltyLevel } from '../../../entities/loyalty-level/loyalty-level.model';

@Component({
  selector: 'jhi-user-purchases',
  standalone: true,
  templateUrl: './user-purchases.component.html',
  styleUrls: ['./user-purchases.component.scss'],
  imports: [
    RouterModule,
    FormsModule,
    SortDirective,
    SortByDirective,
    DurationPipe,
    FormatMediumDatetimePipe,
    FormatMediumDatePipe,
    SharedModule,
    ItemCountComponent,
  ],
})
export class UserPurchasesComponent implements OnInit {
  subscription: Subscription | null = null;
  purchases: IPurchase[] = [];
  isLoading = false;

  sortState = sortStateSignal({ predicate: '', order: 'desc' }); // Set default sort state
  currentUserCardNumber: string | null | undefined = null;

  itemsPerPage = 10;
  totalItems = 10;
  page = 1;

  public router = inject(Router);
  protected purchaseService = inject(PurchaseService);
  protected accountService = inject(AccountService);
  protected userService = inject(UserService);
  protected activatedRoute = inject(ActivatedRoute);
  protected sortService = inject(SortService);
  protected dataUtils = inject(DataUtils);
  protected modalService = inject(NgbModal);
  protected ngZone = inject(NgZone);

  trackId = (_index: number, item: IPurchase): number => item.id;

  ngOnInit(): void {
    this.subscription = combineLatest([this.activatedRoute.queryParamMap, this.activatedRoute.data])
      .pipe(
        tap(([params, data]) => this.fillComponentAttributeFromRoute(params, data)),
        switchMap(() => this.loadUserLoyaltyLevel()),
        tap(() => this.load()),
      )
      .subscribe();
  }

  private loadUserLoyaltyLevel(): Observable<void> {
    return this.accountService.identity().pipe(
      tap(account => {
        if (account) {
          this.currentUserCardNumber = account.cardNumber;
        }
      }),
      map(() => undefined),
    );
  }

  load(): void {
    this.queryBackend().subscribe({
      next: (res: EntityArrayResponseType) => {
        this.onResponseSuccess(res);
      },
    });
  }

  navigateToWithComponentValues(predicate: string): void {
    const currentSortState = this.sortState();
    const newSortOrder: SortOrder = currentSortState.predicate === predicate && currentSortState.order === 'asc' ? 'desc' : 'asc';

    this.sortState.set({ predicate, order: newSortOrder });
    this.handleNavigation(this.page, this.sortState());
  }

  navigateToPage(page: number): void {
    this.handleNavigation(page, this.sortState());
  }

  protected fillComponentAttributeFromRoute(params: ParamMap, data: Data): void {
    const page = params.get(PAGE_HEADER);
    this.page = +(page ?? 1);
    this.sortState.set(this.sortService.parseSortParam(params.get(SORT) ?? data[DEFAULT_SORT_DATA]));
  }

  protected onResponseSuccess(response: EntityArrayResponseType): void {
    this.fillComponentAttributesFromResponseHeader(response.headers);
    const dataFromBody = this.fillComponentAttributesFromResponseBody(response.body);
    this.purchases = dataFromBody.filter(purchase => purchase.userCardNumber === this.currentUserCardNumber);
  }

  protected fillComponentAttributesFromResponseBody(data: IPurchase[] | null): IPurchase[] {
    return data ?? [];
  }

  protected fillComponentAttributesFromResponseHeader(headers: HttpHeaders): void {
    this.totalItems = Number(headers.get(TOTAL_COUNT_RESPONSE_HEADER)) || this.totalItems;
  }

  protected queryBackend(): Observable<EntityArrayResponseType> {
    const { page } = this;
    this.isLoading = true;
    const pageToLoad: number = page;
    const queryObject: any = {
      page: pageToLoad - 1,
      size: this.itemsPerPage,
      sort: this.sortService.buildSortParam(this.sortState()),
    };

    return this.purchaseService.query(queryObject).pipe(tap(() => (this.isLoading = false)));
  }

  protected handleNavigation(page: number, sortState: SortState): void {
    const queryParamsObj = {
      page,
      size: this.itemsPerPage,
      sort: this.sortService.buildSortParam(sortState),
    };

    this.ngZone.run(() => {
      this.router.navigate(['./'], {
        relativeTo: this.activatedRoute,
        queryParams: queryParamsObj,
      });
    });
  }

  getSortIcon(predicate: string): string {
    const { predicate: currentPredicate, order } = this.sortState();
    if (currentPredicate !== predicate) {
      return 'sort'; // default sort icon
    }
    return order === 'asc' ? 'sort-asc' : 'sort-desc';
  }
}
