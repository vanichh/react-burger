import { request, checkResponse } from 'utils/api-methods';
import { API_INGREDIENTS } from 'utils/url-api';
import { TThunks } from '../types/';

import {
  STATE_MODAL_WINDOWS,
  ERROR_REQUEST_INGRIDIENT_BURGER,
  REQUEST_INGRIDIENT_BURGER,
  SET_INGRIDIENT,
  NO_INGRIDIENT,
} from 'services/constants';

export const getIngredients: TThunks = () => async (dispatch) => {
  try {
    const response = await request({ url: API_INGREDIENTS });
    const res = await checkResponse(response);
    if (res.success) {
      dispatch({
        type: REQUEST_INGRIDIENT_BURGER,
        items: res.data,
      });
    } else {
      dispatch({ type: ERROR_REQUEST_INGRIDIENT_BURGER, text: response });
    }
  } catch (error) {
    console.log(error);
    dispatch({ type: ERROR_REQUEST_INGRIDIENT_BURGER, text: error });
  }
};

export const isModalWindowsIngridient = (state: boolean) => {
  return {
    type: STATE_MODAL_WINDOWS,
    state: state,
  };
};

export const getIngridient: TThunks<string> = (id) => (dispatch, getState) => {
  const { listIgridients } = getState().igridients;
  
  const igridient = listIgridients.find(
    ({ _id }: { _id: string }) => _id === id
  );
  
  if (igridient) {
    dispatch({
      type: SET_INGRIDIENT,
      item: igridient,
    });
  } else {
    dispatch({
      type: NO_INGRIDIENT,
    });
  }
};
