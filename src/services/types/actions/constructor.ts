import {
  SET_INGRIDIENT_CONSTRUCTOR,
  REQUEST_NUMBER_ORDER,
  STATE_MODAL_WINDOWS_ORDER,
  ADD_INGRIDIENT,
  DELETE_INGRIDIENT,
  ADD_BUN_CONSTRUCTOR,
  MOVING_INGRIDIENT_CONSTRUCTOR,
  RESET_STATE_INGRIDIENT,
} from 'services/constants';
import { IDataProps } from 'utils/types';

interface ISetIngridientConstructor {
  readonly type: typeof SET_INGRIDIENT_CONSTRUCTOR;
  items: IDataProps[];
}

interface IRequestNumberOrder {
  readonly type: typeof REQUEST_NUMBER_ORDER;
  item: { number: string };
}

interface IStateModalWindowsOrder {
  readonly type: typeof STATE_MODAL_WINDOWS_ORDER;
  state: boolean;
}

interface IAddIngridient {
  readonly type: typeof ADD_INGRIDIENT;
  item: IDataProps;
}

interface IDeleteIngridient {
  readonly type: typeof DELETE_INGRIDIENT;
  item: IDataProps;
}

interface IAddBunConstructor {
  readonly type: typeof ADD_BUN_CONSTRUCTOR;
  item: IDataProps;
}

interface IMovingIngridientConstructor {
  readonly type: typeof MOVING_INGRIDIENT_CONSTRUCTOR;
  item: {
    uuid: string;
    newItem: IDataProps;
    index: number;
  };
}
interface IResetStateIngridient {
  readonly type: typeof RESET_STATE_INGRIDIENT;
}

export type TConstructorActions =
  | ISetIngridientConstructor
  | IRequestNumberOrder
  | IStateModalWindowsOrder
  | IAddIngridient
  | IDeleteIngridient
  | IAddBunConstructor
  | IMovingIngridientConstructor
  | IResetStateIngridient;
