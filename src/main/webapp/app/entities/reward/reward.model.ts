import dayjs from 'dayjs/esm';
import { IRewardConfig } from 'app/entities/reward-config/reward-config.model';
import { IUser } from 'app/entities/user/user.model';

export interface IReward {
  id: number;
  createdAt?: dayjs.Dayjs | null;
  fromDate?: dayjs.Dayjs | null;
  toDate?: dayjs.Dayjs | null;
  code?: string | null;
  rewardConfig?: IRewardConfig | null;
  user?: IUser | null;
}

export type NewReward = Omit<IReward, 'id'> & { id: null };
