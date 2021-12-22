import {
    SET_INGRIDIENT_CONSTRUCTOR,
    REQUEST_NUMBER_ORDER,
    STATE_MODAL_WINDOWS_ORDER,
    ADD_INGRIDIENT,
    DELETE_INGRIDIENT,
    SET_BUN_CONSTRUCTOR,
} from '../actions/constructor';

import IdataIgridients from 'utils/types';

interface IinitialState {
    ingridientsConstructor: IdataIgridients[] | [];
    order: any;
    isModalOpen: boolean;
    orderSum: number;
    bunConstConstructor: IdataIgridients | [];
}

const initialState: IinitialState = {
    ingridientsConstructor: [],
    order: {},
    isModalOpen: false,
    orderSum: 0,
    bunConstConstructor: [],
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
                ingridientsConstructor: [
                    ...state.ingridientsConstructor,
                    action.item,
                ],
                orderSum: state.orderSum + action.item.price,
            };
        }
        case DELETE_INGRIDIENT: {
            return {
                ...state,
                ingridientsConstructor: [
                    ...state.ingridientsConstructor,
                    action.item,
                ],
                orderSum: state.orderSum - action.item.price,
            };
        }
        case SET_BUN_CONSTRUCTOR: {
            return {
                ...state,
                bunConstConstructor: action.item,
            };
        }
        default: {
            return state;
        }
    }
};
