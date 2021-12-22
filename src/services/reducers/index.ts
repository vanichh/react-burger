import { combineReducers } from 'redux';
import { constructorReducer } from './constructor';
import { igridientsReducer } from './ingredients';

export const rootReducer = combineReducers({
    igridients: igridientsReducer,
    burgerConstructor: constructorReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
