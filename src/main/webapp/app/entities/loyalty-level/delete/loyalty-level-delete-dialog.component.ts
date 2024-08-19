import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

import SharedModule from 'app/shared/shared.module';
import { ITEM_DELETED_EVENT } from 'app/config/navigation.constants';
import { ILoyaltyLevel } from '../loyalty-level.model';
import { LoyaltyLevelService } from '../service/loyalty-level.service';

@Component({
  standalone: true,
  templateUrl: './loyalty-level-delete-dialog.component.html',
  imports: [SharedModule, FormsModule],
})
export class LoyaltyLevelDeleteDialogComponent {
  loyaltyLevel?: ILoyaltyLevel;

  protected loyaltyLevelService = inject(LoyaltyLevelService);
  protected activeModal = inject(NgbActiveModal);

  cancel(): void {
    this.activeModal.dismiss();
  }

  confirmDelete(id: number): void {
    this.loyaltyLevelService.delete(id).subscribe(() => {
      this.activeModal.close(ITEM_DELETED_EVENT);
    });
  }
}
