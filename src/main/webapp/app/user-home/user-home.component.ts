import { Component, OnInit } from '@angular/core';
import SharedModule from '../shared/shared.module';
import { OfferService } from '../entities/offer/service/offer.service';
import { IOffer } from '../entities/offer/offer.model';
import { RouterLink } from '@angular/router';
import { AccountService } from '../core/auth/account.service';
import { ILoyaltyLevel } from '../entities/loyalty-level/loyalty-level.model';
import { UserService } from '../entities/user/service/user.service';
import { RewardConfigService } from '../entities/reward-config/service/reward-config.service'; // Import the RewardConfigService
import { IRewardConfig } from '../entities/reward-config/reward-config.model';
import { MatProgressSpinner } from '@angular/material/progress-spinner';
import { MatProgressBar } from '@angular/material/progress-bar';

@Component({
  selector: 'jhi-user-home',
  standalone: true,
  imports: [SharedModule, RouterLink, MatProgressSpinner, MatProgressBar],
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
})
export class UserHomeComponent implements OnInit {
  offers: IOffer[] = [];
  userLoyaltyLevel: ILoyaltyLevel | null | undefined = null;
  rewardConfigs: IRewardConfig[] = []; // Array to store the latest 3 reward configs

  constructor(
    private offerService: OfferService,
    private accountService: AccountService,
    private userService: UserService,
    private rewardConfigService: RewardConfigService, // Inject the RewardConfigService
  ) {}

  ngOnInit(): void {
    this.loadUserLoyaltyLevel();
  }

  private loadUserLoyaltyLevel(): void {
    this.accountService.identity().subscribe(account => {
      if (account) {
        this.userService.find(account.login).subscribe(user => {
          if (user.body) {
            this.userLoyaltyLevel = user.body.loyaltyLevel;
            this.loadLatestOffers();
            this.loadLatestRewardConfigs(); // Load reward configs after setting the user's loyalty level
          }
        });
      }
    });
  }

  private loadLatestOffers(): void {
    this.offerService.query({ sort: ['fromDate,desc'], size: 5 }).subscribe(response => {
      if (response.body) {
        // Filter offers based on the user's loyalty level
        this.offers = response.body.filter(offer => offer.loyaltyLevels?.some(level => level.id === this.userLoyaltyLevel?.id));
      }
    });
  }

  private loadLatestRewardConfigs(): void {
    if (!this.userLoyaltyLevel) {
      return;
    }

    // Query the latest 3 reward configs for the user's loyalty level
    this.rewardConfigService.query({ sort: ['id,desc'], size: 3 }).subscribe(response => {
      if (response.body) {
        // Filter reward configs based on the user's loyalty level
        this.rewardConfigs = response.body.filter(rewardConfig =>
          rewardConfig.loyaltyLevels?.some(level => level.id === this.userLoyaltyLevel?.id),
        );
      }
    });
  }
}
