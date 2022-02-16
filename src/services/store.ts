import { applyMiddleware, combineReducers, createStore, compose } from 'redux';
import { constructorReducer } from './reducers/constructor';
import { igridientsReducer } from './reducers/ingredients';
import { userReducer } from './reducers/user';
import thunkMiddleware from 'redux-thunk';
import { socketMiddleware } from './middleware/socket-middleware';
import { WS } from 'utils/url-api';
import {
  WS_CONNECTION_CLOSED,
  WS_CONNECTION_ERROR,
  WS_CONNECTION_START,
  WS_CONNECTION_SUCCESS,
  WS_GET_ORDERS,
} from './constants';

export const composeEnhancers =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({
  igridients: igridientsReducer,
  burgerConstructor: constructorReducer,
  user: userReducer,
});

const wsActions = {
  wsInit: WS_CONNECTION_START,
  onOpen: WS_CONNECTION_SUCCESS,
  onClose: WS_CONNECTION_CLOSED,
  onError: WS_CONNECTION_ERROR,
  onMessage: WS_GET_ORDERS,
};

export const initStore = (initialState = {}) =>
  createStore(
    rootReducer,
    initialState,
    compose(applyMiddleware(thunkMiddleware, socketMiddleware(WS, wsActions)))
  );
