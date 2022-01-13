import { combineReducers } from 'redux';
import { constructorReducer } from './reducers/constructor';
import { igridientsReducer } from './reducers/ingredients';
import { userReducer } from './reducers/user';

export const rootReducer = combineReducers({
  igridients: igridientsReducer,
  burgerConstructor: constructorReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
