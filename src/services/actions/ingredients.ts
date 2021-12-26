import { checkResponse } from 'utils/check-response';

export const REQUEST_INGRIDIENT_BURGER = 'REQUEST_INGRIDIENT_BURGER';
export const ERROR_REQUEST_INGRIDIENT_BURGER =
  'ERROR_REQUEST_INGRIDIENT_BURGER';
export const STATE_MODAL_WINDOWS_INGRIDIENTS = 'STATE_MODAL_WINDOWS';
export const DELETE_DATA_MODAL = 'DELETE_DATA_MODAL';
export const SET_INGRIDIENT_MODAL = 'SET_INGRIDIENT_MODAL';

export const getIngredients = (url: string) => (dispatch: any) => {
  fetch(url)
    .then(response => checkResponse(response))
    .then(response => {
      if (response.success) {
        dispatch({
          type: REQUEST_INGRIDIENT_BURGER,
          items: response.data,
        });
      } else {
        dispatch({ type: ERROR_REQUEST_INGRIDIENT_BURGER, text: response });
      }
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: ERROR_REQUEST_INGRIDIENT_BURGER, text: error });
    });
};

export const isModalWindowsIngridient = (state: boolean) => {
  return {
    type: STATE_MODAL_WINDOWS_INGRIDIENTS,
    state: state,
  };
};
