import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';
import { Chart } from 'chart.js';

import SharedModule from 'app/shared/shared.module';
import { LoginService } from 'app/login/login.service';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/auth/account.model';
import { UserExtraService } from '../entities/user-extra/service/user-extra.service';
import { IUser } from '../entities/user/user.model';
import { UserService } from '../entities/user/service/user.service';
import { OfferService } from '../entities/offer/service/offer.service';
import { RewardService } from '../entities/reward/service/reward.service';
import { LoyaltyLevelService } from '../entities/loyalty-level/service/loyalty-level.service';

@Component({
  standalone: true,
  selector: 'jhi-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  imports: [SharedModule, RouterModule],
})
export default class HomeComponent implements OnInit {
  account = signal<Account | null>(null);

  private userService = inject(UserService);
  private offerService = inject(OfferService);
  private rewardService = inject(RewardService);
  private loyaltyLevelService = inject(LoyaltyLevelService);
  protected accountService = inject(AccountService);
  private loginService = inject(LoginService);
  private router = inject(Router);

  userCount: number = 0;
  lastUserCountUpdated: string = '';

  offerCount: number = 0;
  lastOfferCountUpdated: string = '';

  rewardCount: number = 0;
  lastRewardCountUpdated: string = '';

  loyaltyLevelCount: number = 0;
  lastLoyaltyLevelCountUpdated: string = '';

  ngOnInit(): void {
    this.accountService.identity().subscribe(account => {
      this.account.set(account);
    });
    this.loadUserStats();
    this.loadOfferStats();
    this.loadRewardStats();
    this.loadLoyaltyLevelStats();
  }

  loadUserStats(): void {
    this.userService.query({ page: 0, sort: 'createdDate,desc' }).subscribe({
      next: response => {
        const users = response.body || [];
        this.userCount = users.filter((user: IUser) => !user.authorities?.some(authority => authority.name === 'ROLE_ADMIN')).length;

        if (users.length > 0) {
          const lastCreatedDate = users[0]?.createdDate as string;
          const lastUpdate = lastCreatedDate ? new Date(lastCreatedDate) : new Date();
          this.lastUserCountUpdated = this.calculateLastUpdateTime(lastUpdate);
        }
      },
      error: () => {
        console.error('Failed to load user stats.');
      },
    });
  }

  loadOfferStats(): void {
    this.offerService.query({ page: 0, sort: 'fromDate,desc' }).subscribe({
      next: response => {
        const offers = response.body || [];

        this.offerCount = response.headers.get('X-Total-Count') ? parseInt(response.headers.get('X-Total-Count') as string) : 0;

        if (offers.length > 0) {
          const lastCreatedDate = offers[0]?.fromDate?.toString();
          const lastUpdate = lastCreatedDate ? new Date(lastCreatedDate) : new Date();
          this.lastOfferCountUpdated = this.calculateLastUpdateTime(lastUpdate);
        }
      },
      error: () => {
        console.error('Failed to load offer stats.');
      },
    });
  }

  loadRewardStats(): void {
    this.rewardService.query({ page: 0, sort: 'createdAt,desc' }).subscribe({
      next: response => {
        const rewards = response.body || [];
        this.rewardCount = response.headers.get('X-Total-Count') ? parseInt(response.headers.get('X-Total-Count') as string) : 0;

        if (rewards.length > 0) {
          const lastCreatedDate = rewards[0]?.createdAt?.toString();
          const lastUpdate = lastCreatedDate ? new Date(lastCreatedDate) : new Date();
          this.lastRewardCountUpdated = this.calculateLastUpdateTime(lastUpdate);
        }
      },
      error: () => {
        console.error('Failed to load reward stats.');
      },
    });
  }

  loadLoyaltyLevelStats(): void {
    this.loyaltyLevelService.query({ page: 0 }).subscribe({
      next: response => {
        const loyaltyLevels = response.body || [];
        this.loyaltyLevelCount = response.headers.get('X-Total-Count') ? parseInt(response.headers.get('X-Total-Count') as string) : 0;

        if (loyaltyLevels.length > 0) {
          const lastUpdate = new Date('2024-08-19T00:00:00.000+00:00');
          this.lastLoyaltyLevelCountUpdated = this.calculateLastUpdateTime(lastUpdate);
        }
      },
      error: () => {
        console.error('Failed to load loyalty level stats.');
      },
    });
  }

  calculateLastUpdateTime(lastUpdate: Date): string {
    const now = new Date();
    const timeDiff = now.getTime() - lastUpdate.getTime();
    const diffInMinutes = Math.floor(timeDiff / 60000);

    if (diffInMinutes < 1) {
      return 'Updated now';
    } else if (diffInMinutes < 60) {
      return `Updated ${diffInMinutes} minutes ago`;
    } else if (diffInMinutes < 1440) {
      return `Updated ${Math.floor(diffInMinutes / 60)} hours ago`;
    } else {
      return `Updated on ${lastUpdate.toLocaleDateString()}`;
    }
  }

  login(): void {
    this.loginService.login();
  }
}
