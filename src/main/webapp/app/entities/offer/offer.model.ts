import dayjs from 'dayjs/esm';
import { ILoyaltyLevel } from 'app/entities/loyalty-level/loyalty-level.model';

export interface IOffer {
  id: number;
  title?: string | null;
  description?: string | null;
  fromDate?: dayjs.Dayjs | null;
  toDate?: dayjs.Dayjs | null;
  rewardPoints?: number | null;
  itemQty?: number | null;
  itemSku?: string | null;
  grandTotal?: number | null;
  image?: string | null;
  imageContentType?: string | null;
  loyaltyLevels?: ILoyaltyLevel[] | null;
}

export type NewOffer = Omit<IOffer, 'id'> & { id: null };
