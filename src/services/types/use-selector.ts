import { TypedUseSelectorHook, useSelector as selectorHook } from 'react-redux';
import { RootState } from './';

export const useSelector: TypedUseSelectorHook<RootState> = selectorHook;