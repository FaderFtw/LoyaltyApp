import { ILoyaltyLevel } from '../loyalty-level/loyalty-level.model';
import { IAuthority } from '../admin/authority/authority.model';

export interface IUser {
  id: string;
  login?: string | null;
  firstName?: string | null;
  lastName?: string | null;
  authorities?: IAuthority[] | null;
  loyaltyLevel?: ILoyaltyLevel | null;
}
