import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';

import { AccountService } from 'app/core/auth/account.service';
import { AppPageTitleStrategy } from 'app/app-page-title-strategy';
import FooterComponent from '../footer/footer.component';
import PageRibbonComponent from '../profiles/page-ribbon.component';
import NavbarComponent from '../navbar/navbar.component';
import { UserNavbarComponent } from '../user-navbar/user-navbar.component';
import { NgIf } from '@angular/common';

@Component({
  standalone: true,
  selector: 'jhi-main',
  templateUrl: './main.component.html',
  providers: [AppPageTitleStrategy],
  imports: [RouterOutlet, FooterComponent, PageRibbonComponent, NavbarComponent, UserNavbarComponent, NgIf],
})
export default class MainComponent implements OnInit {
  private router = inject(Router);
  private appPageTitleStrategy = inject(AppPageTitleStrategy);
  private accountService = inject(AccountService);
  protected isUserHome = true;

  constructor() {}

  ngOnInit(): void {
    this.accountService.identity().subscribe(account => {
      if (!this.router.url.includes('home')) {
        this.isUserHome = false;
      }
      console.log('isUser', this.isUserHome);
    });
  }
}
