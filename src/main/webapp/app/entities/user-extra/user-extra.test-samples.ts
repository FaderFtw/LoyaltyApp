import { IUserExtra, NewUserExtra } from './user-extra.model';

export const sampleWithRequiredData: IUserExtra = {
  id: 'cabd81c4-3dac-4f28-a995-36b562b01b2d',
  totalBalance: 25870,
  actualBalance: 5664,
};

export const sampleWithPartialData: IUserExtra = {
  id: '4ecf855b-bcc3-42a5-b339-e487a7005b92',
  totalBalance: 9602,
  actualBalance: 29581,
};

export const sampleWithFullData: IUserExtra = {
  id: 'a1b5f61f-67e5-44c7-972d-2bc6e500e1f6',
  totalBalance: 10239,
  actualBalance: 15303,
};

export const sampleWithNewData: NewUserExtra = {
  totalBalance: 16752,
  actualBalance: 28235,
  id: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
