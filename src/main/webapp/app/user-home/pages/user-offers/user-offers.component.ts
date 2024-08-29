import { Component, inject, NgZone, OnInit, signal } from '@angular/core';
import { IOffer } from '../../../entities/offer/offer.model';
import SharedModule from '../../../shared/shared.module';
import { ItemCountComponent } from '../../../shared/pagination';
import { ActivatedRoute, Data, ParamMap, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SortByDirective, SortDirective, SortService, SortState, sortStateSignal, SortOrder } from '../../../shared/sort';
import { DurationPipe, FormatMediumDatePipe, FormatMediumDatetimePipe } from '../../../shared/date';
import { ITEMS_PER_PAGE, PAGE_HEADER, TOTAL_COUNT_RESPONSE_HEADER } from '../../../config/pagination.constants';
import { combineLatest, filter, Observable, Subscription, tap } from 'rxjs';
import { EntityArrayResponseType, OfferService } from '../../../entities/offer/service/offer.service';
import { DataUtils } from '../../../core/util/data-util.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DEFAULT_SORT_DATA, ITEM_DELETED_EVENT, SORT } from '../../../config/navigation.constants';
import { OfferDeleteDialogComponent } from '../../../entities/offer/delete/offer-delete-dialog.component';
import { HttpHeaders } from '@angular/common/http';
import dayjs from 'dayjs/esm';

@Component({
  selector: 'jhi-user-offers',
  standalone: true,
  templateUrl: './user-offers.component.html',
  styleUrls: ['./user-offers.component.scss'],
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
export class UserOffersComponent implements OnInit {
  subscription: Subscription | null = null;
  offers: IOffer[] = [];
  isLoading = false;

  // Initialize sortState as a WritableSignal<SortState> using sortStateSignal
  sortState = sortStateSignal({ predicate: '', order: 'desc' }); // You can set a default order here if needed
  currentFilterType: 'grandTotal' | 'product' | null = null;

  itemsPerPage = 4;
  totalItems = 0;
  page = 1;

  public router = inject(Router);
  protected offerService = inject(OfferService);
  protected activatedRoute = inject(ActivatedRoute);
  protected sortService = inject(SortService);
  protected dataUtils = inject(DataUtils);
  protected modalService = inject(NgbModal);
  protected ngZone = inject(NgZone);

  trackId = (_index: number, item: IOffer): number => this.offerService.getOfferIdentifier(item);

  ngOnInit(): void {
    this.subscription = combineLatest([this.activatedRoute.queryParamMap, this.activatedRoute.data])
      .pipe(
        tap(([params, data]) => this.fillComponentAttributeFromRoute(params, data)),
        tap(() => this.load()),
      )
      .subscribe();
  }

  byteSize(base64String: string): string {
    return this.dataUtils.byteSize(base64String);
  }

  openFile(base64String: string, contentType: string | null | undefined): void {
    return this.dataUtils.openFile(base64String, contentType);
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

    // Update the sortState signal with new predicate and order
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
    this.offers = dataFromBody;
  }

  protected fillComponentAttributesFromResponseBody(data: IOffer[] | null): IOffer[] {
    return data ?? [];
  }

  protected fillComponentAttributesFromResponseHeader(headers: HttpHeaders): void {
    this.totalItems = Number(headers.get(TOTAL_COUNT_RESPONSE_HEADER));
  }

  protected queryBackend(): Observable<EntityArrayResponseType> {
    const { page } = this;
    this.isLoading = true;
    const pageToLoad: number = page;
    const queryObject: any = {
      page: pageToLoad - 1,
      size: this.itemsPerPage,
      eagerload: true,
      sort: this.sortService.buildSortParam(this.sortState()),
    };

    // Apply filtering based on the selected offer type
    if (this.currentFilterType === 'grandTotal') {
      queryObject['grandTotalNotNull'] = true; // Include only offers with a grand total condition
    } else if (this.currentFilterType === 'product') {
      queryObject['itemQteNotNull'] = true; // Include only offers with a product quantity condition
      queryObject['itemSkuNotNull'] = true; // Include only offers with a product SKU condition
    }

    return this.offerService.query(queryObject).pipe(tap(() => (this.isLoading = false)));
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

  protected isOfferExpired(offerDate: dayjs.Dayjs | null | undefined): boolean {
    return dayjs().isAfter(offerDate);
  }

  getProductImage(itemSku: string): string {
    return `content/images/product.png`; // Replace with your actual logic if different
  }

  getSortIcon(predicate: string): string {
    const { predicate: currentPredicate, order } = this.sortState();
    if (currentPredicate !== predicate) {
      return 'sort'; // default sort icon
    }
    return order === 'asc' ? 'sort-asc' : 'sort-desc';
  }

  filterOffers(filterType: 'grandTotal' | 'product' | null): void {
    this.currentFilterType = filterType;
    this.load();
  }
}