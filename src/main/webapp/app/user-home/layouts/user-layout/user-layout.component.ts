import { Component, OnInit } from '@angular/core';
import { UserComponent } from '../../pages/user/user.component';
import { TableComponent } from '../../pages/table/table.component';
import { TypographyComponent } from '../../pages/typography/typography.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import SharedModule from '../../../shared/shared.module';
import { NavbarModule } from '../../shared/navbar/navbar.module';
import { ToastrModule } from 'ngx-toastr';
import { FooterModule } from '../../shared/footer/footer.module';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

export interface RouteInfo {
  path: string;
  title: string;
  icon: string;
  class: string;
}

export const ROUTES: RouteInfo[] = [
  { path: 'icons', title: 'Icons', icon: 'nc-diamond', class: '' },
  { path: 'maps', title: 'Maps', icon: 'nc-pin-3', class: '' },
  { path: 'table', title: 'Table List', icon: 'nc-tile-56', class: '' },
  { path: 'typography', title: 'Typography', icon: 'nc-caps-small', class: '' },
];

@Component({
  selector: 'app-user-layout',
  standalone: true,
  templateUrl: './user-layout.component.html',
  styleUrls: ['./user-layout-styles.scss'],
  imports: [
    SharedModule,
    UserComponent,
    TableComponent,
    TypographyComponent,
    IconsComponent,
    MapsComponent,
    NavbarModule,
    ToastrModule,
    FooterModule,
    RouterOutlet,
    RouterLinkActive,
    RouterLink,
  ],
})
export class UserLayoutComponent implements OnInit {
  public menuItems: any[] = [];

  ngOnInit() {
    this.menuItems = ROUTES.filter(menuItem => menuItem);
  }
}
