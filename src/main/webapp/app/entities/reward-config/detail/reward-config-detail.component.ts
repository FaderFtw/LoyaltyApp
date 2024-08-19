import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe } from 'app/shared/date';
import { IRewardConfig } from '../reward-config.model';

@Component({
  standalone: true,
  selector: 'jhi-reward-config-detail',
  templateUrl: './reward-config-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
})
export class RewardConfigDetailComponent {
  rewardConfig = input<IRewardConfig | null>(null);

  previousState(): void {
    window.history.back();
  }
}
