import { getCookie } from 'utils/cookie';

export const socketMiddleware = (wsUrl: any, wsActions: any) => {
  return (store: any) => {
    let socket: WebSocket | null = null;

    return (next: any) => (action: any) => {
      const { dispatch, getState } = store;
      const { type } = action;
      const { wsInit, onOpen, onClose, onError, onOrders } = wsActions;
      const { isAuth } = getState().user;

      if (type === wsInit && isAuth) {
        const WS_URL = `${wsUrl}?token=${getCookie('accessToken')}`;
        socket = new WebSocket(WS_URL);
      }

      if (socket) {
        socket.onopen = (event) => {
          dispatch({ type: onOpen, payload: event });
        };

        socket.onerror = (event) => {
          dispatch({ type: onError, payload: event });
        };

        socket.onmessage = (event) => {
          const { data } = event;
          const parsedData = JSON.parse(data);
          const { success, ...restParsedData } = parsedData;

          dispatch({ type: onOrders, payload: restParsedData });
        };

        socket.onclose = (event) => {
          dispatch({ type: onClose, payload: event });
        };
      }
      next(action);
    };
  };
};
