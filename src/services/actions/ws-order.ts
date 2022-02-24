import { WS_CONNECTION_START } from 'services/constants';
import { TThunks } from 'services/types';

export const startWSOrders = () => {
  return { type: WS_CONNECTION_START };
};

export const closeWSOrders: TThunks = () => async (dispatch, getState) => {
  const { socket } = getState().wsOrders;
  socket.close(1000, 'работа закончена');
};
