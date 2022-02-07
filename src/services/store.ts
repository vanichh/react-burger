import { combineReducers, compose } from 'redux';
import { constructorReducer } from './reducers/constructor';
import { igridientsReducer } from './reducers/ingredients';
import { userReducer } from './reducers/user';


 export const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const rootReducer = combineReducers({
  igridients: igridientsReducer,
  burgerConstructor: constructorReducer,
  user: userReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

