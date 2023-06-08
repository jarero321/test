import { UserInfo } from './user';

export interface AppStore {
  persistReducers: {
    user: UserInfo;
  };
}
