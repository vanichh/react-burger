import {
  SET_USER,
  LOGOUT_USER,
  RESET_PASSWORD,
  NEW_PASSWORD,
  UPDATE_USER,
  ERROR_LODING_USER,
} from 'services/constants';

interface ISetUser {
  readonly type: typeof SET_USER;
  item: {
    name: string;
    email: string;
  };
}

interface IErrorLoddingUser {
  readonly type: typeof ERROR_LODING_USER;
}

interface ILogoutUser {
  readonly type: typeof LOGOUT_USER;
}

interface IResetPassword {
  readonly type: typeof RESET_PASSWORD;
}

interface INewPassword {
  readonly type: typeof NEW_PASSWORD;
}

interface IUpdateUser {
  readonly type: typeof UPDATE_USER;
  item: {
    name: string;
    email: string;
  };
}

export type TUserActions =
  | ISetUser
  | IErrorLoddingUser
  | ILogoutUser
  | IResetPassword
  | INewPassword
  | IUpdateUser;


  
