import {
    GET_INGRIDIENT_BURGER,
    GET_INGRIDIENT_CONSTRUCTOR,
    GET_INGRIDIENT_MODAL,
    DELETE_DATA_MODAL,
    GET_NUMBER_OREDER_MODAL,
} from '../actions';

import IdataIgridients from 'utils/types';

interface IinitialState {
    listIgridients: IdataIgridients[];
    listIgridientsConstructor: IdataIgridients[] | [];
    ingredientDetails: IdataIgridients | [];
    order: any;
    isLoding: boolean;
    isModalOpen: boolean;
}

const initialState: IinitialState = {
    listIgridients: [],
    listIgridientsConstructor: [],
    ingredientDetails: [],
    order: {},
    isLoding: false,
    isModalOpen: false,
};

export const cartReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case GET_INGRIDIENT_BURGER: {
            return {
                ...state,
                listIgridients: action.items,
                isLoding: true,
            };
        }
        case GET_INGRIDIENT_CONSTRUCTOR: {
            return {
                ...state,
            };
        }
        case GET_INGRIDIENT_MODAL: {
            return {
                ...state,
                ingredientDetails: action.item,
                isModalOpen: !state.isModalOpen,
            };
        }
        case DELETE_DATA_MODAL: {
            return {
                ...state,
            };
        }
        case GET_NUMBER_OREDER_MODAL: {
            return {
                ...state,
            };
        }

        default: {
            return state;
        }
    }
};
