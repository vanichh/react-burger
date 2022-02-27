import { applyMiddleware, createStore, compose } from 'redux';
import { rootReducer } from './reducers';
import thunkMiddleware from 'redux-thunk';
import { socketMiddleware } from './middleware/socket-middleware';
import {
  WS_CONNECTION_START_ORDERS_ALL,
  WS_SET_SOKET,
  WS_CONNECTION_START_ORDERS_USER,
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDERS,
} from './constants';

export interface IWSActions {
  initOrdersAll: typeof WS_CONNECTION_START_ORDERS_ALL;
  initOrdersUser: typeof WS_CONNECTION_START_ORDERS_USER;
  setSocet: typeof WS_SET_SOKET;
  close: typeof WS_CONNECTION_CLOSED;
  connectError: typeof WS_CONNECTION_ERROR;
  connectSuccess: typeof WS_CONNECTION_SUCCESS;
  getOrders: typeof WS_GET_ORDERS;
}

const wsActions: IWSActions = {
  initOrdersAll: WS_CONNECTION_START_ORDERS_ALL,
  initOrdersUser: WS_CONNECTION_START_ORDERS_USER,
  setSocet: WS_SET_SOKET,
  close: WS_CONNECTION_CLOSED,
  connectError: WS_CONNECTION_ERROR,
  connectSuccess: WS_CONNECTION_SUCCESS,
  getOrders: WS_GET_ORDERS,
};

export type TWSActions = { [key in keyof IWSActions]: IWSActions[key] };

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initStore = (initialState = {}) =>
  createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunkMiddleware, socketMiddleware(wsActions))
    )
  );
