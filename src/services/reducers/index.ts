import { combineReducers } from 'redux';
import { cartReducer } from './ingredients';

export const rootReducer = combineReducers({
    cart: cartReducer,
});

export type RootState = ReturnType<typeof rootReducer>;