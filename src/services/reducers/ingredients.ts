import {
  STATE_MODAL_WINDOWS_INGRIDIENTS,
  SET_INGRIDIENT_BURGER,
  DELETE_DATA_MODAL,
  SET_INGRIDIENT_MODAL,
} from 'services/actions/ingredients';
import IdataIgridients from 'utils/types';

interface IinitialState {
  listIgridients: IdataIgridients[];
  ingredientDetails: IdataIgridients | [];
  isLoding: boolean;
  isModalOpenIngridients: boolean;
}

const initialState: IinitialState = {
  listIgridients: [],
  ingredientDetails: [],
  isLoding: false,
  isModalOpenIngridients: false,
};

export const igridientsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case SET_INGRIDIENT_BURGER: {
      return {
        ...state,
        listIgridients: action.items,
        isLoding: true,
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
    default: {
      return state;
    }
  }
};
