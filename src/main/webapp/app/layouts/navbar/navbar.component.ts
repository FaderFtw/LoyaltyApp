import { Component, inject, signal, OnInit } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { Location } from '@angular/common'; // Import Location service

import SharedModule from 'app/shared/shared.module';
import HasAnyAuthorityDirective from 'app/shared/auth/has-any-authority.directive';
import HasNotAuthorityDirective from 'app/shared/auth/has-not-authority.directive';
import { VERSION } from 'app/app.constants';
import { AccountService } from 'app/core/auth/account.service';
import { LoginService } from 'app/login/login.service';
import { ProfileService } from 'app/layouts/profiles/profile.service';
import { EntityNavbarItems } from 'app/entities/entity-navbar-items';
import NavbarItem from './navbar-item.model';
import { KeycloakConstants } from '../../keycloak/KeycloakConstants';
import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { fas } from '@fortawesome/free-solid-svg-icons';

@Component({
  standalone: true,
  selector: 'jhi-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  imports: [RouterModule, SharedModule, HasAnyAuthorityDirective, HasNotAuthorityDirective],
})
export default class NavbarComponent implements OnInit {
  inProduction?: boolean;
  isNavbarCollapsed = signal(true);
  openAPIEnabled?: boolean;
  version = '';
  account = inject(AccountService).trackCurrentAccount();
  entitiesNavbarItems: NavbarItem[] = [];

  private referrer = 'web_app';
  private referrerUri: string = '';

  private loginService = inject(LoginService);
  private profileService = inject(ProfileService);
  private router = inject(Router);
  private location = inject(Location); // Inject Location service

  constructor(library: FaIconLibrary) {
    library.addIconPacks(fas); // Load all solid icons
    if (VERSION) {
      this.version = VERSION.toLowerCase().startsWith('v') ? VERSION : `v${VERSION}`;
    }
  }

  ngOnInit(): void {
    this.referrerUri = this.getCurrentUrl();
    this.entitiesNavbarItems = EntityNavbarItems;
    this.profileService.getProfileInfo().subscribe(profileInfo => {
      this.inProduction = profileInfo.inProduction;
      this.openAPIEnabled = profileInfo.openAPIEnabled;
    });
  }

  collapseNavbar(): void {
    this.isNavbarCollapsed.set(true);
  }

  login(): void {
    this.loginService.login();
  }

  logout(): void {
    this.collapseNavbar();
    this.loginService.logout();
    this.router.navigate(['']);
  }

  toggleNavbar(): void {
    this.isNavbarCollapsed.update(isNavbarCollapsed => !isNavbarCollapsed);
  }

  viewProfile(): void {
    this.collapseNavbar();
    const profileUrl = `${KeycloakConstants.KEYCLOAK_ACCOUNT_CONSOLE_URL}?referrer=${encodeURIComponent(this.referrer)}&referrer_uri=${encodeURIComponent(this.referrerUri)}`;
    window.location.href = profileUrl;
  }

  private getCurrentUrl(): string {
    const baseUrl = window.location.origin;
    return `${baseUrl}${this.location.path()}`;
  }
}
