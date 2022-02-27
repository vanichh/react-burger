import { Dispatch } from 'redux';
import { RootState } from 'services/types/thunks';
import { getCookie } from 'utils/cookie';
import { WSS_GET_ORDERS } from 'utils/url-api';

export const socketMiddleware =
  (wsActions: any) =>
  (store: { dispatch: Dispatch; getState: () => RootState }) =>
  (next: (arg0: { type: any }) => void) =>
  (action: { type: any }) => {
    let socket: WebSocket | null = null;
    const { dispatch, getState } = store;
    const { type } = action;
    const {
      initOrdersAll,
      initOrdersUser,
      setSocet,
      close,
      connectError,
      connectSuccess,
      getOrders,
    } = wsActions;

    if (type === initOrdersAll) {
      socket = new WebSocket(WSS_GET_ORDERS);
      dispatch({ type: setSocet, payload: socket });
    }
    if (type === initOrdersUser) {
      const TOKEN = getCookie('accessToken');
      socket = new WebSocket(`${WSS_GET_ORDERS}?token=${TOKEN}`);
      dispatch({ type: setSocet, payload: socket });
    }

    if (socket) {
      socket.addEventListener('open', (e: Event) => {
        dispatch({ type: connectSuccess, payload: e });
      });

      socket.addEventListener('message', ({ data }: MessageEvent) => {
        const response = JSON.parse(data);
        console.log(response);
        if (response.success) {
          dispatch({ type: getOrders, payload: response });
        } else {
          socket.close(1011);
        }
      });

      socket.addEventListener('error', event => {
        console.log('onerror');
        dispatch({ type: connectError, payload: event });
      });

      socket.addEventListener('close', event => {
        dispatch({ type: close, payload: event });
      });
    }
    if (type === close) {
      const state = getState();
      const { socket } = state.wsOrders;
      if (socket) {
        socket.close(1000, 'работа закончена');
      }
    }
    next(action);
  };
