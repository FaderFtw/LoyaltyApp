import { ILoyaltyLevel } from 'app/entities/loyalty-level/loyalty-level.model';
import { RewardType } from 'app/entities/enumerations/reward-type.model';

export interface IRewardConfig {
  id: number;
  title?: keyof typeof RewardType | null;
  description?: string | null;
  balanceValue?: number | null;
  convertedValue?: number | null;
  daysToExpire?: number | null;
  loyaltyLevels?: Pick<ILoyaltyLevel, 'id'>[] | null;
}

export type NewRewardConfig = Omit<IRewardConfig, 'id'> & { id: null };
