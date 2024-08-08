import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: 'b9b6f7c2-58d1-474e-8b71-af56fd3f7cec',
};

export const sampleWithPartialData: IAuthority = {
  name: '0d175c57-2c6d-40ae-9749-f8228d4ebad5',
};

export const sampleWithFullData: IAuthority = {
  name: 'f3eb8b40-c420-4c45-80e6-a4dbe319ee07',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
