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
import { TIngridientActions } from 'services/types/actions';

interface IinitialState {
  listIgridients: IDataProps[];
  ingredientDetails: IDataProps;
  isLoadingIngredientDetails: boolean;
  NoSerchIngredientDetails: boolean;
  isLoding: boolean;
  isModalOpenIngridients: boolean;
  errorRequest: boolean;
  errorRequestText: string;
}

export const initialState: IinitialState = {
  listIgridients: [],
  ingredientDetails: {} as IDataProps,
  isLoadingIngredientDetails: false,
  NoSerchIngredientDetails: false,
  isLoding: false,
  isModalOpenIngridients: false,
  errorRequest: false,
  errorRequestText: '',
};

export const igridientsReducer = (state = initialState, action: TIngridientActions) => {
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
        ingredientDetails: state.listIgridients.find(
          ({ _id }) => _id === action.item
        ),
        isModalOpenIngridients: true,
      };
    }
    case SET_INGRIDIENT: {
      return {
        ...state,
        isLoadingIngredientDetails: true,
        ingredientDetails: action.item,
        isHaveIngridientDetails: true,
        NoSerchIngredientDetails: false,
      };
    }
    case NO_INGRIDIENT: {
      return {
        ...state,
        NoSerchIngredientDetails: true,
      };
    }

    case DELETE_DATA_MODAL: {
      return {
        ...state,
      };
    }
    case STATE_MODAL_WINDOWS: {
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
