import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDERS,
} from 'services/constants';

import { Dispatch } from 'redux';

export const soketOrdersAll = (
  socket: WebSocket,
  dispatch: Dispatch,
) => {

  socket.addEventListener('open', (e: Event) => {
    dispatch({ type: WS_CONNECTION_SUCCESS, payload: e });
  });

  socket.addEventListener('message', ({ data }: MessageEvent) => {
    const response = JSON.parse(data);
    console.log(response)
    if (response.success) {
      dispatch({ type: WS_GET_ORDERS, payload: response });
    } else {
      socket.close(1011);
    }
  });

  socket.addEventListener('error', (event) => {
    console.log('onerror');
    dispatch({ type: WS_CONNECTION_ERROR, payload: event });
  });

  socket.addEventListener('close', (event) => {
    dispatch({ type: WS_CONNECTION_CLOSED, payload: event });
  });
};
