import { Component, inject, NgZone, OnInit } from '@angular/core';
import { ActivatedRoute, Data, ParamMap, Router, RouterLink } from '@angular/router';
import { AccountService } from '../../../core/auth/account.service';
import { IReward, NewReward } from '../../../entities/reward/reward.model';
import { RewardService } from '../../../entities/reward/service/reward.service';
import { IUserExtra } from '../../../entities/user-extra/user-extra.model';
import { UserExtraService } from '../../../entities/user-extra/service/user-extra.service';
import { combineLatest, map, Observable, of, Subscription, switchMap, tap } from 'rxjs';
import FormatMediumDatetimePipe from '../../../shared/date/format-medium-datetime.pipe';
import FormatMediumDatePipe from '../../../shared/date/format-medium-date.pipe';
import { FaIconComponent } from '@fortawesome/angular-fontawesome';
import ItemCountComponent from '../../../shared/pagination/item-count.component';
import { NgClass, NgForOf, NgIf } from '@angular/common';
import { NgbModal, NgbModalRef, NgbPagination } from '@ng-bootstrap/ng-bootstrap';
import { IRewardConfig } from '../../../entities/reward-config/reward-config.model';
import { SortOrder, SortService, SortState, sortStateSignal } from '../../../shared/sort';
import { RewardType } from '../../../entities/enumerations/reward-type.model';
import { EntityArrayResponseType } from '../../../entities/reward-config/service/reward-config.service';
import { PAGE_HEADER, TOTAL_COUNT_RESPONSE_HEADER } from '../../../config/pagination.constants';
import { DEFAULT_SORT_DATA, SORT } from '../../../config/navigation.constants';
import { HttpHeaders } from '@angular/common/http';
import { IconDefinition, faMoneyBillWave, faPercent, faDollarSign, faPhone } from '@fortawesome/free-solid-svg-icons';

import { RewardStatus } from '../../../entities/enumerations/reward-status.model';

@Component({
  selector: 'jhi-user-history',
  standalone: true,
  imports: [
    FormatMediumDatetimePipe,
    FormatMediumDatePipe,
    FaIconComponent,
    ItemCountComponent,
    NgIf,
    NgbPagination,
    NgClass,
    NgForOf,
    RouterLink,
  ],
  templateUrl: './user-history.component.html',
  styleUrl: './user-history.component.scss',
})
export class UserHistoryComponent {
  subscription: Subscription | null = null;
  rewardHistory: IReward[] = [];
  isLoading = false;

  sortState = sortStateSignal({ predicate: '', order: 'desc' }); // You can set a default order here if needed
  currentFilterType: keyof typeof RewardType | null = null;
  currentFilterStatus: keyof typeof RewardStatus | null = null;

  itemsPerPage = 6;
  totalItems = 0;
  page = 1;

  // Define the icons
  faMoneyBillWave = faMoneyBillWave;
  faPercent = faPercent;
  faDollarSign = faDollarSign;
  faPhone = faPhone;

  public router = inject(Router);
  protected rewardService = inject(RewardService);
  protected activatedRoute = inject(ActivatedRoute);
  protected sortService = inject(SortService);
  protected ngZone = inject(NgZone);
  protected modalService = inject(NgbModal);

  trackId = (_index: number, item: IRewardConfig): number => item.id;

  ngOnInit(): void {
    this.subscription = combineLatest([this.activatedRoute.queryParamMap, this.activatedRoute.data])
      .pipe(
        tap(([params, data]) => this.fillComponentAttributeFromRoute(params, data)),
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
    this.rewardHistory = dataFromBody;
  }

  protected fillComponentAttributesFromResponseBody(data: IRewardConfig[] | null): IRewardConfig[] {
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

    if (this.currentFilterType) {
      queryObject['title.equals'] = this.currentFilterType;
    }

    if (this.currentFilterStatus) {
      queryObject['status.equals'] = this.currentFilterStatus;
    }

    return this.rewardService.findByCurrentUser(queryObject).pipe(tap(() => (this.isLoading = false)));
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

  filterRewardsByType(type: string | null): void {
    this.currentFilterType = type as keyof typeof RewardType;
    this.load();
  }

  filterRewardsByStatus(type: string | null): void {
    this.currentFilterStatus = type as keyof typeof RewardStatus;
    this.load();
  }

  getCurrency(title: string | undefined): string {
    return title === 'DISCOUNT' ? '%' : 'TND';
  }

  getSortIcon(predicate: string): any {
    const sortState = this.sortState();
    if (sortState.predicate === predicate) {
      return sortState.order === 'asc' ? 'sort-asc' : 'sort-desc';
    }
    return 'sort'; // Default icon
  }

  getRewardIcon(type: 'CASHBACK' | 'DISCOUNT' | 'DONATION' | 'PHONETOPUP' | null | undefined): IconDefinition {
    switch (type) {
      case 'CASHBACK':
        return this.faMoneyBillWave;
      case 'DISCOUNT':
        return this.faPercent;
      case 'DONATION':
        return this.faDollarSign;
      case 'PHONETOPUP':
        return this.faPhone;
      default:
        return this.faDollarSign; // Default icon if type is unrecognized
    }
  }
}
