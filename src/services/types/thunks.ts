import { Dispatch } from 'redux';
import { RootState } from '.';

export type TThunks<T = unknown> = (
  _?: T
) => (dispatch: Dispatch, getState?: () => RootState) => void;
