import { combineReducers } from 'redux';
import { constructorReducer } from './reducers/constructor';
import { igridientsReducer } from './reducers/ingredients';

export const rootReducer = combineReducers({
  igridients: igridientsReducer,
  burgerConstructor: constructorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
