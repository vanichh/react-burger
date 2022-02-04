import { Dispatch } from 'redux';
import { request, checkResponse } from 'utils/api-methods';
import { URL_ORDER } from 'utils/url-api';
import { v4 as uuidv4 } from 'uuid';

export const STATE_MODAL_WINDOWS_ORDER = 'STATE_MODAL_WINDOWS_ORDER';
export const REQUEST_NUMBER_ORDER = 'REQUEST_NUMBER_OREDER';
export const SET_INGRIDIENT_CONSTRUCTOR = 'SET_INGRIDIENT_CONSTRUCTOR';
export const PLUS_ORDER_SUM = 'PLUS_ORDER_SUM';
export const MINUS_ORDER_SUM = 'MINUS_ORDER_SUM';
export const ADD_INGRIDIENT = 'ADD_INGRIDIENT';
export const DELETE_INGRIDIENT = 'DELETE_INGRIDIENT';
export const RESET_STATE_INGRIDIENT = 'RESET_STATE_INGRIDIENT';
export const ADD_BUN_CONSTRUCTOR = 'ADD_BUN_CONSTRUCTOR';
export const MOVING_INGRIDIENT_CONSTRUCTOR = 'MOVING_INGRIDIENT_CONSTRUCTOR';

export const isModalWindowsOrder = (state: boolean = false) => {
  if (state) {
    return {
      type: STATE_MODAL_WINDOWS_ORDER,
      state: state,
    };
  }
  if (!state) {
    return {
      type: RESET_STATE_INGRIDIENT,
    };
  }
};

export const movingIngridient = (item: any, index: number) => {
  const newItem = { ...item };
  newItem.uuid = uuidv4();
  return {
    type: MOVING_INGRIDIENT_CONSTRUCTOR,
    item: {
      uuid: item.uuid,
      newItem,
      index,
    },
  };
};

export const changeStateElem = (type: 'add' | 'del', item: any) => {
  if (type === 'add') {
    const newItem = { ...item };
    newItem.uuid = uuidv4();
    return {
      type: ADD_INGRIDIENT,
      item: newItem,
    };
  } else if (type === 'del') {
    return {
      type: DELETE_INGRIDIENT,
      item: item,
    };
  }
};

export const getNumberOrder =
  () => async (dispatch: Dispatch, getState: any) => {
    const { burgerConstructor } = getState();

    const ingredients = [
      burgerConstructor.bunConstructor._id,
      ...burgerConstructor.ingridientsConstructor.map(
        (elem: { _id: string }) => elem._id
      ),
      burgerConstructor.bunConstructor._id,
    ];
    try {
      const response = await request({
        url: URL_ORDER,
        method: 'POST',
        body: { ingredients },
      });
      const res = await checkResponse(response);
      if (res.success) {
        dispatch({
          type: REQUEST_NUMBER_ORDER,
          item: res.order,
        });
      }
    } catch (err) {
      console.log(err);
      dispatch({
        type: REQUEST_NUMBER_ORDER,
        item: burgerConstructor.order,
      });
    }
  };
