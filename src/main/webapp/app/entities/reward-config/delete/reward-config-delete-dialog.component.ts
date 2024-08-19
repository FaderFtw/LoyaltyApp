import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import { IRewardConfig } from '../reward-config.model';
import { RewardConfigService } from '../service/reward-config.service';

@Component({
  standalone: true,
  templateUrl: './reward-config-delete-dialog.component.html',
  imports: [SharedModule, FormsModule],
})
export class RewardConfigDeleteDialogComponent {
  rewardConfig?: IRewardConfig;

  protected rewardConfigService = inject(RewardConfigService);
  protected activeModal = inject(NgbActiveModal);

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.rewardConfigService.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}
