import { Component, OnInit, Renderer2, ElementRef, signal, inject } from '@angular/core';
import { ROUTES } from '../../layouts/user-layout/user-layout.component';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { KeycloakConstants } from '../../../keycloak/KeycloakConstants';
import { EntityNavbarItems } from '../../../entities/entity-navbar-items';
import { AccountService } from '../../../core/auth/account.service';
import NavbarItem from '../../../layouts/navbar/navbar-item.model';
import { LoginService } from '../../../login/login.service';
import { ProfileService } from '../../../layouts/profiles/profile.service';

@Component({
  selector: 'navbar-cmp',
  templateUrl: 'navbar.component.html',
  styleUrls: ['../../layouts/user-layout/user-layout-styles.scss'],
})
export class NavbarComponent implements OnInit {
  private listTitles: any[] = [];
  location = inject(Location); // Inject Location service
  private nativeElement: Node;
  private toggleButton: any;
  private sidebarVisible: boolean;

  public isCollapsed = true;

  inProduction?: boolean;
  openAPIEnabled?: boolean;
  version = '';
  account = inject(AccountService).trackCurrentAccount();
  entitiesNavbarItems: NavbarItem[] = [];

  private referrer = 'web_app';
  private referrerUri: string = '';

  private loginService = inject(LoginService);
  private profileService = inject(ProfileService);
  private router = inject(Router);

  constructor(
    location: Location,
    private renderer: Renderer2,
    private element: ElementRef,
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
  }
  getTitle() {
    const fullPath = this.location.path(); // e.g., '/home/something'
    const trimmedPath = fullPath.startsWith('/') ? fullPath.substring(1) : fullPath;
    const segments = trimmedPath.split('/');
    var titlee = segments.pop();
    if (titlee?.charAt(0) === '#') {
      titlee = titlee.slice(1);
    }
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
