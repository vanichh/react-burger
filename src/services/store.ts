import { applyMiddleware, createStore, compose } from 'redux';
import { rootReducer } from './reducers';
import thunkMiddleware from 'redux-thunk';
import { socketMiddleware } from './middleware/socket-middleware';
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDERS,
  WS_SET_SOKET
} from './constants';

const wsActions = {
  init: WS_CONNECTION_START,
  open: WS_CONNECTION_SUCCESS,
  close: WS_CONNECTION_CLOSED,
  error: WS_CONNECTION_ERROR,
  getOrders: WS_GET_ORDERS,
  setSocet: WS_SET_SOKET
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
