import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../../pages/user/user.component';
import SharedModule from '../../../shared/shared.module';
import { ToastrModule } from 'ngx-toastr';
import { FooterModule } from '../../shared/footer/footer.module';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { NavbarComponent } from '../../shared/navbar/navbar.component';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: 'home', title: 'Home', icon: 'home', class: '' }, // Changed '/' to 'home'
  { path: 'home/offers', title: 'Offers', icon: 'dollar', class: '' },
  { path: 'home/rewards', title: 'Rewards', icon: 'gifts', class: '' },
  { path: 'home/history', title: 'My History', icon: 'history', class: '' },
  { path: 'home/purchases', title: 'My Purchases', icon: 'shopping-cart', class: '' },
];

@Component({
  selector: 'app-user-layout',
  standalone: true,
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout-styles.scss'],
  imports: [SharedModule, UserComponent, NavbarComponent, ToastrModule, FooterModule, RouterOutlet, RouterLinkActive, RouterLink],
})
export class UserLayoutComponent implements OnInit {
  public menuItems: any[] = [];

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
