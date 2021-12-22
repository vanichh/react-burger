import {
  STATE_MODAL_WINDOWS_INGRIDIENTS,
  SET_INGRIDIENT_BURGER,
  DELETE_DATA_MODAL,
  SET_INGRIDIENT_MODAL,
  INCREMENT_ID_INGRIDIENT,
  DECREMENT_ID_INGRIDIENT,
} from 'services/actions/ingredients';
import IdataIgridients from 'utils/types';

interface IinitialState {
  listIgridients: IdataIgridients[];
  ingredientDetails: IdataIgridients | [];
  isLoding: boolean;
  isModalOpenIngridients: boolean;
  countSelectedIngredients: any;
}

const initialState: IinitialState = {
  listIgridients: [],
  ingredientDetails: [],
  isLoding: false,
  isModalOpenIngridients: false,
  countSelectedIngredients: {},
};

// action.items.forEach(
//     ({ _id }: any) => (state.countSelectedIngredients[_id] = 0)
//   ),

export const igridientsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_INGRIDIENT_BURGER: {
      return {
        ...state,
        listIgridients: action.items,
        isLoding: true,
        countSelectedIngredients: action.objKey,
      };
    }
    case SET_INGRIDIENT_MODAL: {
      return {
        ...state,
        ingredientDetails: action.item,
        isModalOpenIngridients: true,
      };
    }
    case DELETE_DATA_MODAL: {
      return {
        ...state,
      };
    }
    case STATE_MODAL_WINDOWS_INGRIDIENTS: {
      return {
        ...state,
        isModalOpenIngridients: action.state,
      };
    }
    case INCREMENT_ID_INGRIDIENT: {
      return {
        ...state,
        countSelectedIngredients: {
          ...state.countSelectedIngredients,
          [action.key]: ++state.countSelectedIngredients[action.key],
        },
      };
    }
    case DECREMENT_ID_INGRIDIENT: {
      return {
        ...state,
        countSelectedIngredients: {
          ...state.countSelectedIngredients,
          [action.key]: --state.countSelectedIngredients[action.key],
        },
      };
    }
    default: {
      return state;
    }
  }
};
