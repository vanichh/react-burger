import {
  SET_INGRIDIENT_CONSTRUCTOR,
  REQUEST_NUMBER_ORDER,
  STATE_MODAL_WINDOWS_ORDER,
  ADD_INGRIDIENT,
  DELETE_INGRIDIENT,
  ADD_BUN_CONSTRUCTOR,
  UPDATE_BUN_CONSTRUCTOR,
  MOVING_INGRIDIENT_CONSTRUCTOR,
} from '../actions/constructor';

import IdataIgridients from 'utils/types';

interface IinitialState {
  ingridientsConstructor: IdataIgridients[] | [];
  order: any;
  isModalOpen: boolean;
  orderSum: number;
  bunConstructor: IdataIgridients | any;
  countIngridientsConstructor: any;
}

const initialState: IinitialState = {
  ingridientsConstructor: [],
  order: {},
  isModalOpen: false,
  orderSum: 0,
  bunConstructor: [],
  countIngridientsConstructor: {},
};

export const constructorReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_INGRIDIENT_CONSTRUCTOR: {
      return {
        ...state,
        igridientsConstructor: action.items,
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
          [action.item._id]:
            state.countIngridientsConstructor[action.item._id] === undefined
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
            (elem) => elem.idList !== action.item.idList
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
        orderSum: state.orderSum + action.item.price * 2,
        countIngridientsConstructor: {
          ...state.countIngridientsConstructor,
          [action.item._id]: 1,
        },
      };
    }
    case UPDATE_BUN_CONSTRUCTOR: {
      return {
        ...state,
        bunConstructor: action.item,
        orderSum:
          state.orderSum +
          action.item.price * 2 -
          state.bunConstructor.price * 2,
        countIngridientsConstructor: {
          ...state.countIngridientsConstructor,
          [action.item._id]: 1,
          [state.bunConstructor._id]: 0,
        },
      };
    }

    case MOVING_INGRIDIENT_CONSTRUCTOR: {
      const item = { ...action.item.variable };
      item.idList = Math.random();
      const ingridientsConstructor = state.ingridientsConstructor;
      ingridientsConstructor.splice(action.item.variableIndex, 0, item);
      return {
        ...state,
        ingridientsConstructor: [
          ...ingridientsConstructor.filter(
            (elem) => elem.idList !== action.item.variable.idList
          ),
        ],
      };
    }

    default: {
      return state;
    }
  }
};
