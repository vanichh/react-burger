import {
  WS_CONNECTION_START_ORDERS_ALL,
  WS_CONNECTION_START_ORDERS_USER,
  WS_CONNECTION_CLOSED,
} from 'services/constants';

export const startWSOrdersAll = () => {
  return { type: WS_CONNECTION_START_ORDERS_ALL };
};
export const startWSOrdersUser = () => {
  return { type: WS_CONNECTION_START_ORDERS_USER };
};

export const closeWS = () => {
  return { type: WS_CONNECTION_CLOSED };
};
