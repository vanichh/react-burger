import {
    SET_INGRIDIENT_BURGER,
    SET_INGRIDIENT_CONSTRUCTOR,
    SET_INGRIDIENT_MODAL,
    DELETE_DATA_MODAL,
    REQUEST_NUMBER_OREDER,
    STATE_MODAL_WINDOWS_INGRIDIENTS,
    STATE_MODAL_WINDOWS_ORDER,
} from '../actions';

import IdataIgridients from 'utils/types';

interface IinitialState {
    listIgridients: IdataIgridients[];
    listIgridientsConstructor: IdataIgridients[] | [];
    ingredientDetails: IdataIgridients | [];
    order: any;
    isLoding: boolean;
    isModalOpenIngridients: boolean;
    isModalOpenOrder: boolean;
}

const initialState: IinitialState = {
    listIgridients: [],
    listIgridientsConstructor: [],
    ingredientDetails: [],
    order: {},
    isLoding: false,
    isModalOpenIngridients: false,
    isModalOpenOrder: false,
};

export const cartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_INGRIDIENT_BURGER: {
            return {
                ...state,
                listIgridients: action.items,
                listIgridientsConstructor: action.items,
                isLoding: true,
            };
        }
        case SET_INGRIDIENT_CONSTRUCTOR: {
            return {
                ...state,
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
        case REQUEST_NUMBER_OREDER: {
            return {
                ...state, 
                order: action.item, isModalOpenOrder: true,
            };
        }
        case STATE_MODAL_WINDOWS_INGRIDIENTS: {
            return {
                ...state,
                isModalOpenIngridients: action.state, 
            };
        }
        case STATE_MODAL_WINDOWS_ORDER: {
            return {
                ...state,
                isModalOpenOrder: action.state,
            };
        }
        default: {
            return state;
        }
    }
};
