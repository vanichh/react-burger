import { checkResponse } from 'utils/check-response';
import { URL_API } from 'utils/url-api';

export const REQUEST_INGRIDIENT_BURGER = 'REQUEST_INGRIDIENT_BURGER';
export const ERROR_REQUEST_INGRIDIENT_BURGER =
  'ERROR_REQUEST_INGRIDIENT_BURGER';
export const STATE_MODAL_WINDOWS_INGRIDIENTS = 'STATE_MODAL_WINDOWS';
export const DELETE_DATA_MODAL = 'DELETE_DATA_MODAL';
export const SET_INGRIDIENT_MODAL = 'SET_INGRIDIENT_MODAL';
export const SET_INGRIDIENT = 'SET_INGRIDIENT';
export const NO_INGRIDIENT = 'NO_INGRIDIENT';

const URL_REQUEST_INGREDIENTS = URL_API + 'ingredients';

export const getIngredients = () => (dispatch: any) => {
  (async () => {
    try {
      const response = await fetch(URL_REQUEST_INGREDIENTS);
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
  })();
};

export const isModalWindowsIngridient = (state: boolean) => {
  return {
    type: STATE_MODAL_WINDOWS_INGRIDIENTS,
    state: state,
  };
};

export const getIngridient = (id: string) => (dispatch: any, getState: any) => {
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
