import { IOrders } from 'utils/types';
import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDERS,
} from 'services/constants';

interface IinitialState {
  wsConnected: boolean;
  ordersList: IOrders[];
  total: number;
  totalToday: number;
}

const initialState: IinitialState = {
  wsConnected: false,
  ordersList: [],
  total: 0,
  totalToday: 0,
};

export const wsOredersReducer = (state = initialState, action: any) => {
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
        ordersList: [...action.payload.orders],
        total: action.payload.total,
        totalToday: action.payload.totalToday,
      };
    }
    default: {
      return state;
    }
  }
};
