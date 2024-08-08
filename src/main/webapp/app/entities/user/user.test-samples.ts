import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 'c5700288-528c-4b69-bf57-8d74772d095d',
  login: 'h8H6i@8u\\4t1QOQd\\Cw9UL5\\Hm1bVt\\Ub',
};

export const sampleWithPartialData: IUser = {
  id: '37464ac9-448a-408a-b62f-4043610e0835',
  login: 'XF',
};

export const sampleWithFullData: IUser = {
  id: 'f877e530-4feb-4873-917c-cc65cece2a80',
  login: '0Tm',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
