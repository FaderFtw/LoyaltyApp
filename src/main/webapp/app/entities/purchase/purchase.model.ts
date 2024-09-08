import dayjs from 'dayjs/esm';

export interface IProduct {
  sku: string;
  name: string;
  quantity: number;
  unitPrice: number;
}

export interface IPurchase {
  id: number;
  date?: dayjs.Dayjs | null; // Use dayjs for date
  totalCost?: number | null;
  userCardNumber?: string | null;
  products: IProduct[]; // List of products with their details
}

export type NewPurchase = Omit<IPurchase, 'id'> & { id: null };
