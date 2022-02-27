import {
  STATE_MODAL_WINDOWS,
  ERROR_REQUEST_INGRIDIENT_BURGER,
  REQUEST_INGRIDIENT_BURGER,
  DELETE_DATA_MODAL,
  SET_INGRIDIENT_MODAL,
  SET_INGRIDIENT,
  NO_INGRIDIENT,
} from 'services/constants';

import { IDataProps } from 'utils/types';

interface IRequestIngridientBurger {
  readonly type: typeof REQUEST_INGRIDIENT_BURGER;
  items: IDataProps[];
}

interface IErrorRequestIngridientBurger {
  readonly type: typeof ERROR_REQUEST_INGRIDIENT_BURGER;
  text: string;
}

interface ISetIngridientModal {
  readonly type: typeof SET_INGRIDIENT_MODAL;
  item: string;
}

interface ISetIngridient {
  readonly type: typeof SET_INGRIDIENT;
  item: IDataProps;
}
interface INoIngridient {
  readonly type: typeof NO_INGRIDIENT;
}
interface IDeleteDataModal {
  readonly type: typeof DELETE_DATA_MODAL;
}
interface IStateModalWindows {
  readonly type: typeof STATE_MODAL_WINDOWS;
  state: boolean;
}

export type TIngridientActions =
  | IRequestIngridientBurger
  | IErrorRequestIngridientBurger
  | ISetIngridientModal
  | ISetIngridient
  | INoIngridient
  | IDeleteDataModal
  | IStateModalWindows;


