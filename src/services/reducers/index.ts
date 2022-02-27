import { combineReducers } from 'redux';
import { constructorReducer } from './constructor';
import { igridientsReducer } from './ingredients';
import { wsOredersReducer } from './ws-order';
import { userReducer } from './user'

export const rootReducer = combineReducers({
  igridients: igridientsReducer,
  burgerConstructor: constructorReducer,
  user: userReducer,
  wsOrders: wsOredersReducer,
});

