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
import { TConstructorActions } from 'services/types/actions';

interface InitialState {
  ingridientsConstructor: IDataProps[];
  order: { number: string } | null;
  isModalOpen: boolean;
  orderSum: number;
  bunConstructor: IDataProps | null;
  countIngridientsConstructor: { [key: string]: number };
}

export const initialState: InitialState = {
  ingridientsConstructor: [],
  order: null,
  isModalOpen: false,
  orderSum: 0,
  bunConstructor: null,
  countIngridientsConstructor: {},
};

export const constructorReducer = (
  state = initialState,
  action: TConstructorActions
) => {
  switch (action.type) {
    case SET_INGRIDIENT_CONSTRUCTOR: {
      return {
        ...state,
        ingridientsConstructor: action.items,
      };
    }
    case REQUEST_NUMBER_ORDER: {
      return {
        ...state,
        order: action.item,
        isModalOpen: true,
      };
    }
    case STATE_MODAL_WINDOWS_ORDER: {
      return {
        ...state,
        isModalOpen: action.state,
      };
    }
    case ADD_INGRIDIENT: {
      return {
        ...state,
        ingridientsConstructor: [...state.ingridientsConstructor, action.item],
        orderSum: state.orderSum + action.item.price,
        countIngridientsConstructor: {
          ...state.countIngridientsConstructor,
          [action.item._id]: !state.countIngridientsConstructor[action.item._id]
            ? 1
            : ++state.countIngridientsConstructor[action.item._id],
        },
      };
    }
    case DELETE_INGRIDIENT: {
      return {
        ...state,
        ingridientsConstructor: [
          ...state.ingridientsConstructor.filter(
            ({ uuid }) => uuid !== action.item.uuid
          ),
        ],
        orderSum: state.orderSum - action.item.price,
        countIngridientsConstructor: {
          ...state.countIngridientsConstructor,
          [action.item._id]: --state.countIngridientsConstructor[
            action.item._id
          ],
        },
      };
    }
    case ADD_BUN_CONSTRUCTOR: {
      return {
        ...state,
        bunConstructor: action.item,
        orderSum:
          state.orderSum +
          action.item.price * 2 -
          (state.bunConstructor? state.bunConstructor.price * 2 : 0),
        countIngridientsConstructor: {
          ...state.countIngridientsConstructor,
          [action.item._id]: 2,
          [state.bunConstructor?._id]: 0,
        },
      };
    }

    case MOVING_INGRIDIENT_CONSTRUCTOR: {
      return {
        ...state,
        ingridientsConstructor: [
          ...state.ingridientsConstructor.slice(0, action.item.index),
          action.item.newItem,
          ...state.ingridientsConstructor.slice(action.item.index),
        ].filter(({ uuid }) => uuid !== action.item.uuid),
      };
    }
    case RESET_STATE_INGRIDIENT: {
      return {
        ...state,
        orderSum: 0,
        ingridientsConstructor: [],
        bunConstructor: null,
        order: null,
        countIngridientsConstructor: {},
        isModalOpen: false,
      };
    }

    default: {
      return state;
    }
  }
};
