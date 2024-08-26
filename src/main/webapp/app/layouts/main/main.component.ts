import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

import { AccountService } from 'app/core/auth/account.service';
import { AppPageTitleStrategy } from 'app/app-page-title-strategy';
import FooterComponent from '../footer/footer.component';
import PageRibbonComponent from '../profiles/page-ribbon.component';
import NavbarComponent from '../navbar/navbar.component';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';
import { NgClass, NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'jhi-main',
  templateUrl: './main.component.html',
  providers: [AppPageTitleStrategy],
  imports: [RouterOutlet, FooterComponent, PageRibbonComponent, NavbarComponent, UserNavbarComponent, NgIf, NgClass],
})
export default class MainComponent implements OnInit {
  private router = inject(Router);
  private appPageTitleStrategy = inject(AppPageTitleStrategy);
  private accountService = inject(AccountService);
  protected isAdmin = false;

  constructor() {}

  ngOnInit(): void {
    this.accountService.identity().subscribe(account => {
      if (account) {
        this.isAdmin = this.accountService.hasAnyAuthority('ROLE_ADMIN');
      }
    });
  }
}
