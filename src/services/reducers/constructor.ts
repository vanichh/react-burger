import {
    SET_INGRIDIENT_CONSTRUCTOR,
    REQUEST_NUMBER_ORDER,
    STATE_MODAL_WINDOWS_ORDER,
    PLUS_ORDER_SUM,
    MINUS_ORDER_SUM,
} from '../actions/constructor';

import IdataIgridients from 'utils/types';

interface IinitialState {
    listIgridientsConstructor: IdataIgridients[] | [];
    order: any;
    isModalOpen: boolean;
    orderSum: number;
}

const initialState: IinitialState = {
    listIgridientsConstructor: [],
    order: {},
    isModalOpen: false,
    orderSum: 0,
};

export const constructorReducer = (state = initialState, action: any) => {
    switch (action.type) {
        case SET_INGRIDIENT_CONSTRUCTOR: {
            return {
                ...state,
                listIgridientsConstructor: action.items,
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
        case PLUS_ORDER_SUM: {
            return {
                ...state,
                orderSum: state.orderSum + action.price,
            };
        }
        case MINUS_ORDER_SUM: {
            return {
                ...state,
                orderSum: state.orderSum - action.price,
            };
        }
        default: {
            return state;
        }
    }
};