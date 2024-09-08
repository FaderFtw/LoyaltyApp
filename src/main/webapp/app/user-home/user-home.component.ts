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
import { PurchaseService } from '../entities/purchase/service/purchase.service';
import { IPurchase } from '../entities/purchase/purchase.model';
import { FormatMediumDatePipe, FormatMediumDatetimePipe } from '../shared/date';

@Component({
  selector: 'jhi-user-home',
  standalone: true,
  imports: [SharedModule, RouterLink, MatProgressSpinner, MatProgressBar, FormatMediumDatetimePipe, FormatMediumDatePipe],
  templateUrl: './user-home.component.html',
  styleUrls: ['./user-home.component.scss'],
})
export class UserHomeComponent implements OnInit {
  offers: IOffer[] = [];
  userLoyaltyLevel: ILoyaltyLevel | null | undefined = null;
  rewardConfigs: IRewardConfig[] = [];
  purchases: IPurchase[] = [];
  isProductsVisible: boolean[] = []; // Track visibility for each purchase

  constructor(
    private offerService: OfferService,
    private accountService: AccountService,
    private userService: UserService,
    private rewardConfigService: RewardConfigService,
    private purchaseService: PurchaseService,
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
            this.loadLatestRewardConfigs();
            this.loadLatestPurchases(account.cardNumber);
          }
        });
      }
    });
  }

  private loadLatestOffers(): void {
    const queryParams: any = {
      sort: ['fromDate,desc'],
      size: 5,
    };

    if (this.userLoyaltyLevel) {
      queryParams['loyaltyLevelId'] = this.userLoyaltyLevel.id;
    }

    this.offerService.query(queryParams).subscribe(response => {
      if (response.body) {
        this.offers = response.body;
      }
    });
  }

  private loadLatestRewardConfigs(): void {
    const queryParams: any = {
      sort: ['daysToExpire,desc'],
      size: 3,
    };

    if (this.userLoyaltyLevel) {
      queryParams['loyaltyLevelId'] = this.userLoyaltyLevel.id;
    }

    // Query the latest 3 reward configs for the user's loyalty level
    this.rewardConfigService.query(queryParams).subscribe(response => {
      if (response.body) {
        this.rewardConfigs = response.body;
      }
    });
  }

  private loadLatestPurchases(currentUserCardNumber: string | null): void {
    this.purchaseService.query({}).subscribe(response => {
      if (response.body) {
        this.purchases = response.body
          .filter(purchase => purchase.userCardNumber === currentUserCardNumber) // Ensure implicit return in filter
          .slice(0, 3);
        this.isProductsVisible = new Array(3).fill(false);
      }
    });
  }

  toggleProducts(index: number): void {
    this.isProductsVisible[index] = !this.isProductsVisible[index];
  }
}
