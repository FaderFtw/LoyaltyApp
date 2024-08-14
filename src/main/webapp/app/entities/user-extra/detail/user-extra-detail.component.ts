import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe } from 'app/shared/date';
import { IUserExtra } from '../user-extra.model';

@Component({
  standalone: true,
  selector: 'jhi-user-extra-detail',
  templateUrl: './user-extra-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
})
export class UserExtraDetailComponent {
  userExtra = input<IUserExtra | null>(null);

  previousState(): void {
    window.history.back();
  }
}
