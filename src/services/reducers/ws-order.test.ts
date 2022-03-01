import { wsOredersReducer } from './ws-order';
import * as types from 'services/constants';
import { initialState } from 'services/reducers/ws-order';
import { WSS_GET_ORDERS } from 'utils/url-api';
import { IOrders } from 'utils/types';

describe('test reducer ws-order', () => {
  it('should initial state', () => {
    expect(
      wsOredersReducer(undefined, {
        type: undefined,
      })
    ).toEqual(initialState);
  });

  it('should handle WS_SET_SOKET', () => {
    const socket = new WebSocket(WSS_GET_ORDERS);
    expect(
      wsOredersReducer(initialState, {
        type: types.WS_SET_SOKET,
        payload: socket,
      })
    ).toEqual({
      ...initialState,
      socket,
    });
  });
  it('should handle WS_CONNECTION_SUCCESS', () => {
    expect(
      wsOredersReducer(initialState, {
        type: types.WS_CONNECTION_SUCCESS,
      })
    ).toEqual({
      ...initialState,
      wsConnected: true,
    });
  });

  it('should handle WS_CONNECTION_ERROR', () => {
    expect(
      wsOredersReducer(initialState, {
        type: types.WS_CONNECTION_ERROR,
      })
    ).toEqual({
      ...initialState,
      wsConnected: false,
    });
  });

  it('should handle WS_CONNECTION_CLOSED', () => {
    expect(
      wsOredersReducer(initialState, {
        type: types.WS_CONNECTION_CLOSED,
      })
    ).toEqual({
      ...initialState,
      wsConnected: false,
      socket: null,
    });
  });

  it('should handle WS_GET_ORDERS', () => {
    const orders: IOrders[] = [
      {
        createdAt: '2',
        ingredients: ['2', '3'],
        name: 'test',
        number: 23,
        status: 'done',
        updatedAt: '3',
        _id: '123',
      },
    ];

    expect(
      wsOredersReducer(initialState, {
        type: types.WS_GET_ORDERS,
        payload: {
          orders,
          total: 50,
          totalToday: 120,
          success: true,
        },
      })
    ).toEqual({
      ...initialState,
      ordersList: [...orders],
      total: 50,
      totalToday: 120,
      readyOrders: [23],
    });
  });
});
