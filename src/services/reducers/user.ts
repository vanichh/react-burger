import {
  SET_USER,
  EXIT_USER,
  RESET_PASSWORD,
  NEW_PASSWORD,
} from 'services/actions/user';

interface IinitialState {
  isAuth: boolean;
  name: string;
  email: string;
  passwordReset: boolean;
  successNewPassword: boolean;
}

const initialState: IinitialState = {
  isAuth: false,
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
    case EXIT_USER: {
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
    default: {
      return state;
    }
  }
};
