import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDERS,
} from 'services/constants';

interface IinitialState {
  wsConnected: boolean;
  messages: any[];
}

const initialState: IinitialState = {
  wsConnected: false,
  messages: [],
};

export const userReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case WS_CONNECTION_SUCCESS: {
      return {
        ...state,
        wsConnected: true,
      };
    }
    case WS_CONNECTION_ERROR: {
      return {
        ...state,
        wsConnected: false,
      };
    }
    case WS_CONNECTION_CLOSED: {
      return {
        ...state,
        wsConnected: false,
      };
    }
    case WS_GET_ORDERS: {
      return {
        ...state,
        messages: [...action.messages, ...action.payload],
      };
    }
    default: {
      return state;
    }
  }
};
