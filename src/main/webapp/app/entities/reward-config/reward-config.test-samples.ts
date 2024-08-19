import { IRewardConfig, NewRewardConfig } from './reward-config.model';

export const sampleWithRequiredData: IRewardConfig = {
  id: 14356,
  title: 'DONATION',
};

export const sampleWithPartialData: IRewardConfig = {
  id: 8792,
  title: 'PHONETOPUP',
  balanceValue: 7685,
};

export const sampleWithFullData: IRewardConfig = {
  id: 22635,
  title: 'PHONETOPUP',
  description: 'eek',
  balanceValue: 28701,
  convertedValue: 16228.43,
  daysToExpire: 14947,
};

export const sampleWithNewData: NewRewardConfig = {
  title: 'DISCOUNT',
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
