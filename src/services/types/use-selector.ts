import { TypedUseSelectorHook, useSelector as selectorHook } from 'react-redux';
import { RootState } from './thunks';

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;