import dayjs from 'dayjs/esm';

import { IOffer, NewOffer } from './offer.model';

export const sampleWithRequiredData: IOffer = {
  id: 10662,
  fromDate: dayjs('2024-08-18T14:08'),
  toDate: dayjs('2024-08-19T02:56'),
  title: 'bah',
};

export const sampleWithPartialData: IOffer = {
  id: 15694,
  fromDate: dayjs('2024-08-19T01:03'),
  toDate: dayjs('2024-08-18T20:39'),
  title: 'while',
};

export const sampleWithFullData: IOffer = {
  id: 24810,
  fromDate: dayjs('2024-08-19T00:29'),
  toDate: dayjs('2024-08-19T03:32'),
  title: 'gleaming',
  description: 'diversity sans ha',
  rewardPoints: 8345,
  itemQty: 21068.3,
  itemSku: 'orchestra tan',
  grandTotal: 4958.36,
};

export const sampleWithNewData: NewOffer = {
  fromDate: dayjs('2024-08-18T15:59'),
  toDate: dayjs('2024-08-19T05:56'),
  title: 'review',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
