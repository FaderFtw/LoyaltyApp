import dayjs from 'dayjs/esm';

export interface IPurchase {
  id: number;
  title?: string | null;
  date?: dayjs.Dayjs | null;
  productSku?: string | null;
  productQty?: string | null;
  totalCost?: number | null;
  userCardNumber?: string | null;
}

export type NewPurchase = Omit<IPurchase, 'id'> & { id: null };
