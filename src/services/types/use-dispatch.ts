import { useDispatch as dispatchHook } from 'react-redux';
import { Dispatch } from 'redux';
import { TThunks } from './thunks';
import { TAllActions } from './thunks';

export type AppDispatch = Dispatch<TAllActions>;

export const useDispatch = () => dispatchHook<AppDispatch | TThunks>();
