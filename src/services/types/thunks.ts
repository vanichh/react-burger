import { Action, ActionCreator } from 'redux';
import { ThunkAction } from 'redux-thunk';
import { rootReducer } from 'services/reducers';
import {
  TWSActions,
  TUserActions,
  TIngridientActions,
  TConstructorActions,
} from './actions';

export type RootState = ReturnType<typeof rootReducer>;

export type TAllActions =
  | TWSActions
  | TUserActions
  | TIngridientActions
  | TConstructorActions;

export type TThunks<TReturn = void> = ActionCreator<
  ThunkAction<TReturn, RootState, TAllActions, Action>
>;
