import dayjs from 'dayjs/esm';
import { IUser } from 'app/entities/user/user.model';
import { IRewardConfig } from 'app/entities/reward-config/reward-config.model';
import { RewardStatus } from 'app/entities/enumerations/reward-status.model';

export interface IReward {
  id: number;
  createdAt?: dayjs.Dayjs | null;
  fromDate?: dayjs.Dayjs | null;
  toDate?: dayjs.Dayjs | null;
  code?: string | null;
  status?: keyof typeof RewardStatus | null;
  user?: IUser | null;
  rewardConfig?: IRewardConfig | null;
}

export type NewReward = Omit<IReward, 'id'> & { id: null };
