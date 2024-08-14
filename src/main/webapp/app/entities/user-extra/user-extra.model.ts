import { IUser } from 'app/entities/user/user.model';

export interface IUserExtra {
  id: string;
  totalBalance?: number | null;
  actualBalance?: number | null;
  user?: Pick<IUser, 'id'> | null;
}

export type NewUserExtra = Omit<IUserExtra, 'id'> & { id: null };
