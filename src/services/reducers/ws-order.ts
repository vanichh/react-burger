import { IOrders } from 'utils/types';
import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDERS,
  WS_SET_SOKET,
} from 'services/constants';

interface IinitialState {
  wsConnected: boolean;
  ordersList: IOrders[];
  total: number;
  totalToday: number;
  readyOrders: number[];
  inWorkOrders: number[];
  socket: WebSocket | null;
}

const initialState: IinitialState = {
  wsConnected: false,
  ordersList: [],
  total: 0,
  totalToday: 0,
  readyOrders: [],
  inWorkOrders: [],
  socket: null,
};

export const wsOredersReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case WS_SET_SOKET: {
      return {
        ...state,
        socket: action.payload,
      };
    }

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
        socket: null,
      };
    }
    case WS_GET_ORDERS: {
      return {
        ...state,
        ordersList: [...action.payload.orders],
        total: action.payload.total,
        totalToday: action.payload.totalToday,
        readyOrders: [
          ...action.payload.orders
            .filter(({ status }: { status: string }) => status === 'done')
            .map(({ number }: { number: number }) => number),
        ],
      };
    }
    default: {
      return state;
    }
  }
};
