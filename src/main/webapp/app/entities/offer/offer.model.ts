import dayjs from 'dayjs/esm';
import { ILoyaltyLevel } from 'app/entities/loyalty-level/loyalty-level.model';

export interface IOffer {
  id: number;
  fromDate?: dayjs.Dayjs | null;
  toDate?: dayjs.Dayjs | null;
  title?: string | null;
  description?: string | null;
  rewardPoints?: number | null;
  itemQty?: number | null;
  itemSku?: string | null;
  grandTotal?: number | null;
  loyaltyLevels?: ILoyaltyLevel[] | null;
}

export type NewOffer = Omit<IOffer, 'id'> & { id: null };
