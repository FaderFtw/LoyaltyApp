import { Component, HostBinding } from '@angular/core';

@Component({
  selector: 'footer-cmp',
  templateUrl: 'footer.component.html',
  styleUrls: ['../../layouts/user-layout/user-layout-styles.scss'],
})
export class FooterComponent {
  test: Date = new Date();
}
