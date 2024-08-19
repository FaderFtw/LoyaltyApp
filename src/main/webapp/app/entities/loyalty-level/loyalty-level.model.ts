import { IOffer } from 'app/entities/offer/offer.model';
import { IRewardConfig } from 'app/entities/reward-config/reward-config.model';
import { LoyaltyType } from 'app/entities/enumerations/loyalty-type.model';

export interface ILoyaltyLevel {
  id: number;
  title?: keyof typeof LoyaltyType | null;
  description?: string | null;
  minBalance?: number | null;
  maxBalance?: number | null;
  offers?: Pick<IOffer, 'id'>[] | null;
  rewards?: Pick<IRewardConfig, 'id'>[] | null;
}

export type NewLoyaltyLevel = Omit<ILoyaltyLevel, 'id'> & { id: null };
