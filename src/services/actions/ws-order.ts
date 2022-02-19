import { WS_CONNECTION_START, WS_CONNECTION_CLOSED } from 'services/constants';

export const startWSOrders = () => {
  return { type: WS_CONNECTION_START };
};

export const closeWSOrders = () => {
  return { type: WS_CONNECTION_CLOSED };
};

