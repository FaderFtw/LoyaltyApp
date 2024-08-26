import { Component, inject, signal, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import SharedModule from 'app/shared/shared.module';

@Component({
  standalone: true,
  selector: 'jhi-error',
  templateUrl: './error.component.html',
  styles: [
    '.hipster {\n' +
      '  display: inline-block;\n' +
      '  width: 347px;\n' +
      '  height: 497px;\n' +
      "  background: url('../../../content/images/jhipster_family_member_1.svg') no-repeat center top;\n" +
      '  background-size: contain;\n' +
      '}',
  ],
  imports: [SharedModule],
})
export default class ErrorComponent implements OnInit {
  errorMessage = signal<string | undefined>(undefined);

  private readonly route = inject(ActivatedRoute);

  ngOnInit(): void {
    this.route.data.subscribe(routeData => {
      if (routeData.errorMessage) {
        this.errorMessage.set(routeData.errorMessage);
      }
    });
  }
}
