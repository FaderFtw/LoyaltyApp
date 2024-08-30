import { Component, OnInit, Renderer2, ElementRef, signal, inject } from '@angular/core';
import { ROUTES } from '../../layouts/user-layout/user-layout.component';
import { ActivatedRoute, Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { KeycloakConstants } from '../../../keycloak/KeycloakConstants';
import { EntityNavbarItems } from '../../../entities/entity-navbar-items';
import { AccountService } from '../../../core/auth/account.service';
import NavbarItem from '../../../layouts/navbar/navbar-item.model';
import { LoginService } from '../../../login/login.service';
import { ProfileService } from '../../../layouts/profiles/profile.service';
import { UserService } from '../../../entities/user/service/user.service';
import { UserExtraService } from '../../../entities/user-extra/service/user-extra.service';
import { ILoyaltyLevel } from '../../../entities/loyalty-level/loyalty-level.model';
import { LoyaltyLevelService } from '../../../entities/loyalty-level/service/loyalty-level.service';
import SharedModule from '../../../shared/shared.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { NgbProgressbarModule } from '@ng-bootstrap/ng-bootstrap';
import { combineLatest, map, Observable, of, Subscription, switchMap, tap } from 'rxjs';

@Component({
  standalone: true,
  selector: 'navbar-cmp',
  templateUrl: 'navbar.component.html',
  imports: [RouterModule, SharedModule, NgbModule, MatProgressSpinnerModule, MatProgressBarModule, NgbProgressbarModule],
  styleUrls: ['../../layouts/user-layout/user-layout-styles.scss'],
})
export class NavbarComponent implements OnInit {
  subscription: Subscription | null = null;
  private listTitles: any[] = [];
  location = inject(Location); // Inject Location service
  private nativeElement: Node;
  private toggleButton: any;
  private sidebarVisible: boolean;

  public isCollapsed = true;

  inProduction?: boolean;
  openAPIEnabled?: boolean;
  version = '';
  account = this.accountService.trackCurrentAccount();
  entitiesNavbarItems: NavbarItem[] = [];

  private referrer = 'web_app';
  private referrerUri: string = '';

  private loginService = inject(LoginService);
  private profileService = inject(ProfileService);
  private router = inject(Router);
  protected activatedRoute = inject(ActivatedRoute);

  userLoyaltyLevel: any;
  userStats: any;

  constructor(
    location: Location,
    private renderer: Renderer2,
    private element: ElementRef,
    private accountService: AccountService,
    private userService: UserService,
    private userExtraService: UserExtraService,
    private loyaltyService: LoyaltyLevelService,
  ) {
    this.location = location;
    this.nativeElement = element.nativeElement;
    this.sidebarVisible = false;
  }

  ngOnInit() {
    this.listTitles = ROUTES.filter(listTitle => listTitle);
    var navbar: HTMLElement = this.element.nativeElement;
    this.toggleButton = navbar.getElementsByClassName('navbar-toggle')[0];
    this.router.events.subscribe(event => {
      this.sidebarClose();
    });

    this.referrerUri = this.getCurrentUrl();
    this.entitiesNavbarItems = EntityNavbarItems;
    this.profileService.getProfileInfo().subscribe(profileInfo => {
      this.inProduction = profileInfo.inProduction;
      this.openAPIEnabled = profileInfo.openAPIEnabled;
    });

    this.subscription = combineLatest([this.activatedRoute.queryParamMap, this.activatedRoute.data])
      .pipe(switchMap(() => this.loadUserStats()))
      .subscribe();
  }

  private loadUserStats(): Observable<void> {
    return this.accountService.identity().pipe(
      switchMap(account => {
        if (account) {
          return this.userExtraService.find(account.id).pipe(
            tap(user => {
              if (user.body) {
                this.userStats = user.body;
                this.userLoyaltyLevel = user.body.user?.loyaltyLevel;
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

  private loadUserExtra(userId: string): void {
    this.userExtraService.find(userId).subscribe(userStats => {
      this.userStats = userStats.body;
    });
  }

  calculateProgressValue(totalBalance: number | null | undefined): number {
    if (!totalBalance || !this.userLoyaltyLevel) {
      return 0;
    }
    return (totalBalance / this.userLoyaltyLevel.maxBalance) * 100;
  }

  getLoyaltyLevelImage(loyaltyLevel: ILoyaltyLevel): string {
    return this.loyaltyService.getLoyaltyLevelImage(loyaltyLevel);
  }

  getTitle() {
    var titlee = this.location.prepareExternalUrl(this.location.path());
    if (titlee.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }
    titlee = titlee.slice(1);
    for (var item = 0; item < this.listTitles.length; item++) {
      if (this.listTitles[item].path === titlee) {
        return this.listTitles[item].title;
      }
    }
    return 'Home';
  }
  sidebarToggle() {
    if (this.sidebarVisible === false) {
      this.sidebarOpen();
    } else {
      this.sidebarClose();
    }
  }
  sidebarOpen() {
    const toggleButton = this.toggleButton;
    const html = document.getElementsByTagName('html')[0];
    const mainPanel = <HTMLElement>document.getElementsByClassName('main-panel')[0];
    setTimeout(function () {
      toggleButton.classList.add('toggled');
    }, 500);

    html.classList.add('nav-open');
    if (window.innerWidth < 991) {
      mainPanel.style.position = 'fixed';
    }
    this.sidebarVisible = true;
  }
  sidebarClose() {
    const html = document.getElementsByTagName('html')[0];
    const mainPanel = <HTMLElement>document.getElementsByClassName('main-panel')[0];
    if (window.innerWidth < 991) {
      setTimeout(function () {
        mainPanel.style.position = '';
      }, 500);
    }
    this.toggleButton.classList.remove('toggled');
    this.sidebarVisible = false;
    html.classList.remove('nav-open');
  }
  collapse() {
    this.isCollapsed = !this.isCollapsed;
    const navbar = document.getElementsByTagName('nav')[0];
    console.log(navbar);
    if (!this.isCollapsed) {
      navbar.classList.remove('navbar-transparent');
      navbar.classList.add('bg-white');
    } else {
      navbar.classList.add('navbar-transparent');
      navbar.classList.remove('bg-white');
    }
  }

  logout(): void {
    this.loginService.logout();
    this.router.navigate(['']);
  }

  viewProfile(): void {
    const profileUrl = `${KeycloakConstants.KEYCLOAK_ACCOUNT_CONSOLE_URL}?referrer=${encodeURIComponent(this.referrer)}&referrer_uri=${encodeURIComponent(this.referrerUri)}`;
    window.location.href = profileUrl;
  }

  private getCurrentUrl(): string {
    const baseUrl = window.location.origin;
    return `${baseUrl}${this.location.path()}`;
  }
}
