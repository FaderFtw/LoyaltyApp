import { Component } from '@angular/core';
import SharedModule from '../../../shared/shared.module';

@Component({
  selector: 'jhi-user-rewards',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './user-rewards.component.html',
  styleUrl: './user-rewards.component.scss',
})
export class UserRewardsComponent {}
