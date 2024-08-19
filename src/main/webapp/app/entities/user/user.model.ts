import { ILoyaltyLevel } from '../loyalty-level/loyalty-level.model';

export interface IUser {
  id: string;
  login?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  loyaltyLevel?: ILoyaltyLevel | null;
}
