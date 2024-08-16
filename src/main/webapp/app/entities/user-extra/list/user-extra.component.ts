import { Component, NgZone, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Data, ParamMap, Router, RouterModule } from '@angular/router';
import { combineLatest, filter, Observable, Subscription, tap } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { sortStateSignal, SortDirective, SortByDirective, type SortState, SortService } from 'app/shared/sort';
import { DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe } from 'app/shared/date';
import { FormsModule } from '@angular/forms';
import { SORT, ITEM_DELETED_EVENT, DEFAULT_SORT_DATA } from 'app/config/navigation.constants';
import { IUserExtra } from '../user-extra.model';
import { EntityArrayResponseType, UserExtraService } from '../service/user-extra.service';
import { UserExtraDeleteDialogComponent } from '../delete/user-extra-delete-dialog.component';
import { UserService } from '../../user/service/user.service';
import { KeycloakConstants } from '../../../keycloak/KeycloakConstants';
import ItemCountComponent from '../../../shared/pagination/item-count.component';
import { ITEMS_PER_PAGE, TOTAL_COUNT_RESPONSE_HEADER } from '../../../config/pagination.constants';
import PageRibbonComponent from '../../../layouts/profiles/page-ribbon.component';

@Component({
  standalone: true,
  selector: 'jhi-user-extra',
  templateUrl: './user-extra.component.html',
  imports: [
    RouterModule,
    FormsModule,
    SharedModule,
    SortDirective,
    SortByDirective,
    DurationPipe,
    FormatMediumDatetimePipe,
    FormatMediumDatePipe,
    ItemCountComponent,
    PageRibbonComponent,
  ],
})
export class UserExtraComponent implements OnInit {
  subscription: Subscription | null = null;
  userExtras?: IUserExtra[];
  isLoading = false;

  sortState = sortStateSignal({});

  public router = inject(Router);
  protected userExtraService = inject(UserExtraService);
  protected userService = inject(UserService);
  protected activatedRoute = inject(ActivatedRoute);
  protected sortService = inject(SortService);
  protected modalService = inject(NgbModal);
  protected ngZone = inject(NgZone);

  currentPage = 1;
  totalItems = 0;
  itemsPerPage = ITEMS_PER_PAGE;

  trackId = (_index: number, item: IUserExtra): string => this.userExtraService.getUserExtraIdentifier(item);

  ngOnInit(): void {
    this.subscription = combineLatest([this.activatedRoute.queryParamMap, this.activatedRoute.data])
      .pipe(
        tap(([params, data]) => this.fillComponentAttributeFromRoute(params, data)),
        tap(() => {
          this.currentPage = parseInt(this.activatedRoute.snapshot.queryParams['page']) || 1;
          this.load();
        }),
      )
      .subscribe();
  }

  delete(userExtra: IUserExtra): void {
    const modalRef = this.modalService.open(UserExtraDeleteDialogComponent, { size: 'lg', backdrop: 'static' });
    modalRef.componentInstance.userExtra = userExtra;
    // unsubscribe not needed because closed completes on modal close
    modalRef.closed
      .pipe(
        filter(reason => reason === ITEM_DELETED_EVENT),
        tap(() => this.load()),
      )
      .subscribe();
  }

  load(): void {
    this.queryBackend().subscribe({
      next: (res: EntityArrayResponseType) => {
        this.onResponseSuccess(res);
      },
    });
  }

  navigateToWithComponentValues(event: SortState): void {
    this.handleNavigation(event);
  }

  protected fillComponentAttributeFromRoute(params: ParamMap, data: Data): void {
    this.sortState.set(this.sortService.parseSortParam(params.get(SORT) ?? data[DEFAULT_SORT_DATA]));
  }

  protected onResponseSuccess(response: EntityArrayResponseType): void {
    const dataFromBody = this.fillComponentAttributesFromResponseBody(response.body);
    this.userExtras = this.refineData(dataFromBody);
    this.totalItems = Number(response.headers.get(TOTAL_COUNT_RESPONSE_HEADER));
    console.log(this.totalItems, this.currentPage, this.itemsPerPage);
  }

  protected refineData(data: IUserExtra[]): IUserExtra[] {
    const { predicate, order } = this.sortState();
    return predicate && order ? data.sort(this.sortService.startSort({ predicate, order })) : data;
  }

  protected fillComponentAttributesFromResponseBody(data: IUserExtra[] | null): IUserExtra[] {
    return data ?? [];
  }

  protected queryBackend(): Observable<EntityArrayResponseType> {
    this.isLoading = true;
    const queryObject: any = {
      page: this.currentPage - 1,
      sort: this.sortService.buildSortParam(this.sortState()),
    };

    return this.userExtraService.query(queryObject).pipe(tap(() => (this.isLoading = false)));
  }

  protected handleNavigation(sortState: SortState): void {
    const queryParamsObj = {
      sort: this.sortService.buildSortParam(sortState),
    };

    this.ngZone.run(() => {
      this.router.navigate(['./'], {
        relativeTo: this.activatedRoute,
        queryParams: queryParamsObj,
      });
    });
  }

  protected getUserInfos(id: string): void {
    const userInfoUrl = `${KeycloakConstants.KEYCLOAK_USER_INFO_URL}/${id}/settings`;
    window.location.href = userInfoUrl;
  }
}
