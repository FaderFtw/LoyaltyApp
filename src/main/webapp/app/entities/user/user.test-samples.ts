import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 'c51061cb-436f-435f-99c2-44002f3d052a',
  login: 'I@NXcz\\56SX\\<lCddjh\\VWBe\\`N-X78a',
};

export const sampleWithPartialData: IUser = {
  id: '7e126c56-3fa7-4b14-a34e-f1ff0d548be2',
  login: 'j',
};

export const sampleWithFullData: IUser = {
  id: '914686bf-09ea-430b-a388-5988a3b45505',
  login: 'PW',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
