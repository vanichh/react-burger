import {
  SET_USER,
  LOGOUT_USER,
  RESET_PASSWORD,
  NEW_PASSWORD,
  UPDATE_USER,
} from 'services/actions/user';

interface IinitialState {
  isAuth: boolean | null;
  name: string;
  email: string;
  passwordReset: boolean;
  successNewPassword: boolean;
}

const initialState: IinitialState = {
  isAuth: null,
  name: '',
  email: '',
  passwordReset: false,
  successNewPassword: false,
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_USER: {
      return {
        ...state,
        name: action.item.name,
        email: action.item.email,
        isAuth: true,
      };
    }
    case LOGOUT_USER: {
      return {
        ...state,
        name: '',
        email: '',
        isAuth: false,
      };
    }
    case RESET_PASSWORD: {
      return {
        ...state,
        passwordReset: true,
      };
    }
    case NEW_PASSWORD: {
      return {
        ...state,
        passwordReset: false,
        successNewPassword: true,
      };
    }
    case UPDATE_USER: {
      return {
        ...state,
        name: action.item.name,
        email: action.item.email,
      };
    }
    default: {
      return state;
    }
  }
};
