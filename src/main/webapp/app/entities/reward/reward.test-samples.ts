import dayjs from 'dayjs/esm';

import { IReward, NewReward } from './reward.model';

export const sampleWithRequiredData: IReward = {
  id: 22675,
  createdAt: dayjs('2024-08-18T19:57'),
  fromDate: dayjs('2024-08-18T18:44'),
  toDate: dayjs('2024-08-19T03:29'),
  code: 'overextend above',
};

export const sampleWithPartialData: IReward = {
  id: 18898,
  createdAt: dayjs('2024-08-19T11:12'),
  fromDate: dayjs('2024-08-19T06:32'),
  toDate: dayjs('2024-08-19T00:27'),
  code: 'wherever what',
};

export const sampleWithFullData: IReward = {
  id: 19498,
  createdAt: dayjs('2024-08-18T23:34'),
  fromDate: dayjs('2024-08-18T22:19'),
  toDate: dayjs('2024-08-18T20:51'),
  code: 'stereotype',
};

export const sampleWithNewData: NewReward = {
  createdAt: dayjs('2024-08-18T21:48'),
  fromDate: dayjs('2024-08-19T03:49'),
  toDate: dayjs('2024-08-18T21:46'),
  code: 'bunker besides',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
