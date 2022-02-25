import { IOrders } from 'utils/types';

import {
  WS_CONNECTION_SUCCESS,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_CLOSED,
  WS_GET_ORDERS,
  WS_SET_SOKET,
} from 'services/constants';

interface IWSSetSoket {
  readonly type: typeof WS_SET_SOKET;
  payload: WebSocket;
}

interface IWSSConntectionSuccess {
  readonly type: typeof WS_CONNECTION_SUCCESS;
}

interface IWSConntectionError {
  readonly type: typeof WS_CONNECTION_ERROR;
}

interface IWSConntectionClosed {
  readonly type: typeof WS_CONNECTION_CLOSED;
}

interface IWSGetOrders {
  readonly type: typeof WS_GET_ORDERS;
  payload: {
    orders: IOrders[];
    success: boolean;
    total: number;
    totalToday: number;
  };
}

export type TWSActions =
  | IWSSetSoket
  | IWSSConntectionSuccess
  | IWSConntectionError
  | IWSGetOrders
  | IWSConntectionClosed;
