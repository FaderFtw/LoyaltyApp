import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe } from 'app/shared/date';
import { ILoyaltyLevel } from '../loyalty-level.model';

@Component({
  standalone: true,
  selector: 'jhi-loyalty-level-detail',
  templateUrl: './loyalty-level-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
})
export class LoyaltyLevelDetailComponent {
  loyaltyLevel = input<ILoyaltyLevel | null>(null);

  previousState(): void {
    window.history.back();
  }
}
