import {
  STATE_MODAL_WINDOWS_INGRIDIENTS,
  ERROR_REQUEST_INGRIDIENT_BURGER,
  REQUEST_INGRIDIENT_BURGER,
  DELETE_DATA_MODAL,
  SET_INGRIDIENT_MODAL,
} from 'services/actions/ingredients';
import IdataIgridients from 'utils/types';

interface IinitialState {
  listIgridients: IdataIgridients[];
  ingredientDetails: IdataIgridients | [];
  isLoding: boolean;
  isModalOpenIngridients: boolean;
  errorRequest: boolean;
  errorRequestText: string;
}

const initialState: IinitialState = {
  listIgridients: [],
  ingredientDetails: [],
  isLoding: false,
  isModalOpenIngridients: false,
  errorRequest: false,
  errorRequestText: '',
};

export const igridientsReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case REQUEST_INGRIDIENT_BURGER: {
      return {
        ...state,
        listIgridients: action.items,
        isLoding: true,
      };
    }
    case ERROR_REQUEST_INGRIDIENT_BURGER: {
      return {
        ...state,
        errorRequest: true,
        errorRequestText: action.text,
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
