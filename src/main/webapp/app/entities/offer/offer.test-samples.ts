import dayjs from 'dayjs/esm';

import { IOffer, NewOffer } from './offer.model';

export const sampleWithRequiredData: IOffer = {
  id: 16142,
  title: 'friend memorable',
  fromDate: dayjs('2024-08-18T11:59'),
  toDate: dayjs('2024-08-19T03:55'),
  rewardPoints: 27009,
  itemQty: 25021,
  itemSku: 'experienced after last',
  grandTotal: 20294.24,
};

export const sampleWithPartialData: IOffer = {
  id: 26460,
  title: 'unblock',
  fromDate: dayjs('2024-08-18T17:24'),
  toDate: dayjs('2024-08-19T01:14'),
  rewardPoints: 31911,
  itemQty: 2622,
  itemSku: 'ugh',
  grandTotal: 31374.3,
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
};

export const sampleWithFullData: IOffer = {
  id: 2523,
  title: 'belittle unusual',
  description: 'razor',
  fromDate: dayjs('2024-08-18T20:09'),
  toDate: dayjs('2024-08-18T16:21'),
  rewardPoints: 3635,
  itemQty: 26426,
  itemSku: 'aggravating buzz meanwhile',
  grandTotal: 22416.03,
  image: '../fake-data/blob/hipster.png',
  imageContentType: 'unknown',
};

export const sampleWithNewData: NewOffer = {
  title: 'since terrorise',
  fromDate: dayjs('2024-08-18T23:28'),
  toDate: dayjs('2024-08-19T01:24'),
  rewardPoints: 32634,
  itemQty: 20318,
  itemSku: 'through dramatic wherever',
  grandTotal: 15437.41,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
