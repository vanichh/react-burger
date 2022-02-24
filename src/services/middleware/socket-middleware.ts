import { Dispatch } from 'redux';
import { RootState } from 'services/types';
import { IOrders } from 'utils/types';
import { WS_GET_ORDERS } from 'utils/url-api';

export const socketMiddleware =
  (wsActions: any) =>
  (store: { dispatch: Dispatch; getState: () => RootState }) =>
  (next: (arg0: { type: any }) => void) =>
  (action: { type: any }) => {
    let socket: WebSocket | null = null;
    const { dispatch } = store;
    const { type } = action;
    const { init, open, close, error, getOrders, setSocet } = wsActions;

    if (type === init) {
      socket = new WebSocket(WS_GET_ORDERS);
      dispatch({ type: setSocet, payload: socket });
    }
    if (socket) {
      socket.addEventListener('open', (e: Event) => {
        // console.log(e);
        dispatch({ type: open, payload: e });
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

      // socket.onerror = (event) => {
      //   console.log('onerror');
      //   dispatch({ type: error, payload: event });
      // };

      socket.addEventListener('close', (event) => {
        dispatch({ type: close, payload: event });
      });
    }

    next(action);
  };
