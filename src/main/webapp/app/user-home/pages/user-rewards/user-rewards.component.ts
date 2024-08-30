import { Component, inject, NgZone, OnInit, signal } from '@angular/core';
import { IRewardConfig } from '../../../entities/reward-config/reward-config.model';
import SharedModule from '../../../shared/shared.module';
import { ItemCountComponent } from '../../../shared/pagination';
import { ActivatedRoute, Data, ParamMap, Router, RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SortByDirective, SortDirective, SortService, SortState, sortStateSignal, SortOrder } from '../../../shared/sort';
import { DurationPipe, FormatMediumDatePipe, FormatMediumDatetimePipe } from '../../../shared/date';
import { ITEMS_PER_PAGE, PAGE_HEADER, TOTAL_COUNT_RESPONSE_HEADER } from '../../../config/pagination.constants';
import { combineLatest, filter, map, Observable, of, Subscription, switchMap, tap } from 'rxjs';
import { EntityArrayResponseType, RewardConfigService } from '../../../entities/reward-config/service/reward-config.service';
import { DEFAULT_SORT_DATA, ITEM_DELETED_EVENT, SORT } from '../../../config/navigation.constants';
import { HttpHeaders } from '@angular/common/http';
import { RewardType } from '../../../entities/enumerations/reward-type.model';
import { MatSlider, MatSliderThumb } from '@angular/material/slider';
import { ILoyaltyLevel } from '../../../entities/loyalty-level/loyalty-level.model';
import { AccountService } from '../../../core/auth/account.service';
import { UserService } from '../../../entities/user/service/user.service';
import { IconDefinition, faMoneyBillWave, faPercent, faDollarSign, faPhone } from '@fortawesome/free-solid-svg-icons';
import { IUserExtra } from '../../../entities/user-extra/user-extra.model';
import { UserExtraService } from '../../../entities/user-extra/service/user-extra.service';
import { IReward, NewReward } from '../../../entities/reward/reward.model';
import dayjs from 'dayjs/esm';
import { RewardService } from '../../../entities/reward/service/reward.service';

@Component({
  selector: 'jhi-user-rewards',
  standalone: true,
  templateUrl: './user-rewards.component.html',
  styleUrls: ['./user-rewards.component.scss'],
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
    MatSlider,
    MatSliderThumb,
  ],
})
export class UserRewardsComponent implements OnInit {
  subscription: Subscription | null = null;
  rewards: IRewardConfig[] = [];
  isLoading = false;

  sortState = sortStateSignal({ predicate: '', order: 'desc' }); // You can set a default order here if needed
  currentFilterType: keyof typeof RewardType | null = null;
  currentUserStats: IUserExtra | null | undefined = null;

  itemsPerPage = 6;
  totalItems = 0;
  page = 1;

  // Define the icons
  faMoneyBillWave = faMoneyBillWave;
  faPercent = faPercent;
  faDollarSign = faDollarSign;
  faPhone = faPhone;

  public router = inject(Router);
  protected rewardConfigService = inject(RewardConfigService);
  protected accountService = inject(AccountService);
  protected userExtraService = inject(UserExtraService);
  protected rewardService = inject(RewardService);
  protected activatedRoute = inject(ActivatedRoute);
  protected sortService = inject(SortService);
  protected ngZone = inject(NgZone);

  trackId = (_index: number, item: IRewardConfig): number => item.id;

  ngOnInit(): void {
    this.subscription = combineLatest([this.activatedRoute.queryParamMap, this.activatedRoute.data])
      .pipe(
        tap(([params, data]) => this.fillComponentAttributeFromRoute(params, data)),
        switchMap(() => this.loadUserStats()),
        tap(() => this.load()),
      )
      .subscribe();
  }

  private loadUserStats(): Observable<void> {
    return this.accountService.identity().pipe(
      switchMap(account => {
        if (account) {
          return this.userExtraService.find(account.id).pipe(
            tap(user => {
              if (user.body) {
                this.currentUserStats = user.body;
              }
            }),
            map(() => void 0),
          );
        } else {
          return of(void 0);
        }
      }),
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
    this.rewards = dataFromBody;
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

    if (this.currentUserStats) {
      queryObject['loyaltyLevelId'] = this.currentUserStats.user?.loyaltyLevel?.id;
    }

    if (this.currentFilterType) {
      queryObject['title.equals'] = this.currentFilterType;
    }

    return this.rewardConfigService.query(queryObject).pipe(tap(() => (this.isLoading = false)));
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

  filterRewards(type: string | null): void {
    this.currentFilterType = type as keyof typeof RewardType;
    this.load();
  }

  convertPoints(reward: IRewardConfig, value: number): void {
    console.log(`Converting ${value} points for reward: ${reward.title}`);
    const convertedValue = this.calculateConvertedValue(reward, value);
  }

  getCurrency(title: string | undefined): string {
    return title === 'DISCOUNT' ? '%' : 'TND';
  }

  calculateConvertedValue(reward: IRewardConfig, points: number): number {
    // @ts-ignore
    return (points / reward.balanceValue) * reward.convertedValue;
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

  redeemReward(rewardConfig: IRewardConfig): void {
    console.log('Redeeming reward:', rewardConfig);
    if (!this.currentUserStats) {
      console.error('No current user found');
      return;
    }

    const newReward: NewReward = {
      id: null,
      createdAt: dayjs(),
      fromDate: dayjs(),
      toDate: dayjs().add(rewardConfig?.daysToExpire ?? 0, 'day'),
      code: this.generateRewardCode(16),
      status: 'ACTIVE',
      user: this.currentUserStats.user,
      rewardConfig: rewardConfig,
    };

    this.rewardService.create(newReward).subscribe({
      next: response => {
        console.log('Reward successfully created:', response.body);

        // Calculate the new actualBalance
        const updatedBalance = (this.currentUserStats?.actualBalance ?? 0) - (rewardConfig.balanceValue ?? 0);

        const updatedUserExtra: IUserExtra = {
          id: this.currentUserStats?.id ?? '',
          totalBalance: this.currentUserStats?.totalBalance ?? null,
          actualBalance: updatedBalance, // Set the new actualBalance
          user: this.currentUserStats?.user ? { ...this.currentUserStats.user } : null,
        };

        this.userExtraService.update(updatedUserExtra).subscribe({
          next: userExtraResponse => {
            console.log('User balance updated successfully:', userExtraResponse.body);
            // Update the local currentUserStats with the new balance
            this.currentUserStats = userExtraResponse.body;
          },
          error: err => {
            console.error('Error updating user balance:', err);
          },
        });
      },
      error: err => {
        console.error('Error creating reward:', err);
      },
    });
  }

  // Method to generate a random alphanumeric code
  private generateRewardCode(length: number = 8): string {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
      result += characters.charAt(Math.floor(Math.random() * characters.length));
    }
    return result;
  }
}
