import { Component, inject, signal, OnInit } from '@angular/core';
import { RouterModule, Router } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { LoginService } from 'app/login/login.service';
import { AccountService } from 'app/core/auth/account.service';
import { Account } from 'app/core/auth/account.model';
import { IUser } from '../entities/user/user.model';
import { UserService } from '../entities/user/service/user.service';
import { OfferService } from '../entities/offer/service/offer.service';
import { RewardService } from '../entities/reward/service/reward.service';
import { LoyaltyLevelService } from '../entities/loyalty-level/service/loyalty-level.service';
import { Chart, registerables } from 'chart.js';
import { IReward } from '../entities/reward/reward.model';
import dayjs from 'dayjs/esm';

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
    Chart.register(...registerables);
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
        let users: IUser[] = [];
        if (response.body) {
          users = response.body.filter((user: IUser) => !user.authorities?.some(authority => authority.name === 'ROLE_ADMIN'));
        }
        this.userCount = users.length;

        const currentYear = new Date().getFullYear();
        const monthlyUserCount = Array(12).fill(0); // Initialize an array with 12 zeros for each month.

        users.forEach((user: IUser) => {
          const createdDate = new Date(user.createdDate!);
          if (createdDate.getFullYear() === currentYear) {
            const month = createdDate.getMonth();
            monthlyUserCount[month]++; // Increment the count for that month.
          }
        });

        // Update the chart with the monthly user count
        this.updateUsersChart(monthlyUserCount);

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

  updateUsersChart(monthlyUserCount: number[]): void {
    const ctx = (document.getElementById('chartUsers') as HTMLCanvasElement).getContext('2d');
    if (ctx) {
      const chart = new Chart(ctx, {
        type: 'line', // or 'bar' if you prefer a bar chart
        data: {
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
          datasets: [
            {
              label: 'Users Registered',
              data: monthlyUserCount,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
              fill: true,
            },
          ],
        },
        options: {
          scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
              ticks: {
                stepSize: 1, // Set step size to 1 to ensure integer values
                callback: function (value) {
                  return Number.isInteger(value) ? value : ''; // Remove decimals
                },
              },
            },
          },
        },
      });
    }
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

        // Get the current year
        const currentYear = dayjs().year();

        // Group rewards by month for the current year
        const monthlyRewardCount = Array(12).fill(0); // Initialize an array with 12 zeros for each month.

        rewards.forEach(reward => {
          if (reward.createdAt) {
            const rewardYear = dayjs(reward.createdAt).year();
            if (rewardYear === currentYear) {
              const month = dayjs(reward.createdAt).month(); // 0 = January, 11 = December
              monthlyRewardCount[month]++;
            }
          }
        });

        // Update the chart with the monthly reward count
        this.updateRewardsChart(monthlyRewardCount);

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

  updateRewardsChart(monthlyRewardCount: number[]): void {
    const ctx = (document.getElementById('chartRewards') as HTMLCanvasElement).getContext('2d');
    if (ctx) {
      const chart = new Chart(ctx, {
        type: 'bar',
        data: {
          labels: [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December',
          ],
          datasets: [
            {
              label: 'Claimed Rewards',
              data: monthlyRewardCount,
              backgroundColor: 'rgba(75, 192, 192, 0.2)',
              borderColor: 'rgba(75, 192, 192, 1)',
              borderWidth: 1,
            },
          ],
        },
        options: {
          scales: {
            x: {
              beginAtZero: true,
            },
            y: {
              beginAtZero: true,
            },
          },
        },
      });
    }
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

  protected readonly dayjs = dayjs;
}
