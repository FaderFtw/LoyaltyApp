import dayjs from 'dayjs/esm';
import { IRewardConfig } from 'app/entities/reward-config/reward-config.model';
import { IUser } from 'app/entities/user/user.model';

export interface IReward {
  id: number;
  createdAt?: dayjs.Dayjs | null;
  fromDate?: dayjs.Dayjs | null;
  toDate?: dayjs.Dayjs | null;
  code?: string | null;
  rewardConfig?: Pick<IRewardConfig, 'id'> | null;
  user?: Pick<IUser, 'id'> | null;
}

export type NewReward = Omit<IReward, 'id'> & { id: null };
