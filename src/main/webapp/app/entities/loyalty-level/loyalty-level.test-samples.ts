import { ILoyaltyLevel, NewLoyaltyLevel } from './loyalty-level.model';

export const sampleWithRequiredData: ILoyaltyLevel = {
  id: 11735,
  minBalance: 17818,
  maxBalance: 13039,
};

export const sampleWithPartialData: ILoyaltyLevel = {
  id: 30116,
  title: 'DIAMOND',
  minBalance: 26030,
  maxBalance: 20257,
};

export const sampleWithFullData: ILoyaltyLevel = {
  id: 12853,
  title: 'SILVER',
  description: 'fatally harm whenever',
  minBalance: 14887,
  maxBalance: 22195,
};

export const sampleWithNewData: NewLoyaltyLevel = {
  minBalance: 19771,
  maxBalance: 15973,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
