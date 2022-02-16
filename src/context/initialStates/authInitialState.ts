import {IAuthState} from '../types/authTypes';

export const authInitialState: IAuthState = {
  isLoggedIn: false,
  data: {},
  error: null,
  loading: false,
};
