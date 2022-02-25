import { Dispatch } from 'redux';
import { RootState } from 'services/types';
import { getCookie } from 'utils/cookie';
import { WS_GET_ORDERS } from 'utils/url-api';
import { soketOrdersAll } from './socet-orders';

export const socketMiddleware =
  (wsActions: any) =>
  (store: { dispatch: Dispatch; getState: () => RootState }) =>
  (next: (arg0: { type: any }) => void) =>
  (action: { type: any }) => {
    let socket: WebSocket | null = null;
    const { dispatch } = store;
    const { type } = action;
    const { initOrdersAll, initOrdersUser, setSocet } = wsActions;

    if (type === initOrdersAll) {
      socket = new WebSocket(WS_GET_ORDERS);
      dispatch({ type: setSocet, payload: socket });
    }
    if (type === initOrdersUser) {
      const TOKEN = getCookie('accessToken');
      socket = new WebSocket(`${WS_GET_ORDERS}?token=${TOKEN}`);
      dispatch({ type: setSocet, payload: socket });
    }

    if (socket) {
      soketOrdersAll(socket, dispatch);
    }

    next(action);
  };
