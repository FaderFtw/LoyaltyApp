import dayjs from 'dayjs/esm';

import { IReward, NewReward } from './reward.model';

export const sampleWithRequiredData: IReward = {
  id: 25496,
  createdAt: dayjs('2024-08-19T10:03'),
  fromDate: dayjs('2024-08-18T12:17'),
  toDate: dayjs('2024-08-19T00:16'),
  code: 'derail nice subordinate',
  status: 'USED',
};

export const sampleWithPartialData: IReward = {
  id: 21075,
  createdAt: dayjs('2024-08-19T06:53'),
  fromDate: dayjs('2024-08-18T14:47'),
  toDate: dayjs('2024-08-18T20:07'),
  code: 'trusty gazunder',
  status: 'USED',
};

export const sampleWithFullData: IReward = {
  id: 3723,
  createdAt: dayjs('2024-08-18T22:15'),
  fromDate: dayjs('2024-08-19T00:58'),
  toDate: dayjs('2024-08-18T17:22'),
  code: 'pace within',
  status: 'ACTIVE',
};

export const sampleWithNewData: NewReward = {
  createdAt: dayjs('2024-08-19T07:54'),
  fromDate: dayjs('2024-08-19T09:26'),
  toDate: dayjs('2024-08-19T04:07'),
  code: 'a faithful',
  status: 'USED',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
