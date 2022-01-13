import { SET_ACCOUNT, DELETE_ACCOUNT } from 'services/actions/user';

interface IinitialState {
  isAuth: boolean;
  name: string;
  email: string;
}

const initialState: IinitialState = {
  isAuth: false,
  name: '',
  email: '',
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_ACCOUNT: {
      return {
        ...state,
        name: action.item.name,
        email: action.item.email,
        isAuth: true,
      };
    }
    case DELETE_ACCOUNT: {
      return {
        ...state,
        name: '',
        email: '',
        isAuth: false,
      };
    }
    default: {
      return state;
    }
  }
};
