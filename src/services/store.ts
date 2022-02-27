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

const wsActions = {
  initOrdersAll: WS_CONNECTION_START_ORDERS_ALL,
  initOrdersUser: WS_CONNECTION_START_ORDERS_USER,
  setSocet: WS_SET_SOKET,
  close: WS_CONNECTION_CLOSED,
  connectError: WS_CONNECTION_ERROR,
  connectSuccess: WS_CONNECTION_SUCCESS,
  getOrders: WS_GET_ORDERS,
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const initStore = (initialState = {}) =>
  createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(thunkMiddleware, socketMiddleware(wsActions))
    )
  );
