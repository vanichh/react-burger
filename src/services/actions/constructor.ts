import {
  ADD_INGRIDIENT,
  DELETE_INGRIDIENT,
  MOVING_INGRIDIENT_CONSTRUCTOR,
  REQUEST_NUMBER_ORDER,
  RESET_STATE_INGRIDIENT,
  STATE_MODAL_WINDOWS_ORDER,
  ADD_BUN_CONSTRUCTOR,
} from 'services/constants';
import { request, checkResponse } from 'utils/api-methods';
import { API_ORDER } from 'utils/url-api';
import { v4 as uuidv4 } from 'uuid';
import { IDataProps } from 'utils/types';
import { TThunks } from '../types/';
import { getCookie } from 'utils/cookie';

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

export const addBunConstructor: TThunks =
  (item: IDataProps) => (dispatch, getState) => {
    const { bunConstructor } = getState().burgerConstructor;
    if (bunConstructor && bunConstructor === item) {
      return;
    }
    dispatch({ type: ADD_BUN_CONSTRUCTOR, item });
  };

export const movingIngridient = (item: IDataProps, index: number) => {
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

export const changeStateElem = (type: 'add' | 'del', item: IDataProps) => {
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

export const getNumberOrder: TThunks = () => async (dispatch, getState) => {
  const { bunConstructor, ingridientsConstructor, order } =
    getState().burgerConstructor;

  const ingredients = [
    bunConstructor._id,
    ...ingridientsConstructor.map(elem => elem._id),
    bunConstructor._id,
  ];
  try {
    const token = getCookie('accessToken') as string;
    const response = await request({
      url: API_ORDER,
      method: 'POST',
      body: {
        ingredients,
      },
      token: `Bearer ${token}`,
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
      item: order,
    });
  }
};
