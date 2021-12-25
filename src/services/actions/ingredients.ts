import { ADD_BUN_CONSTRUCTOR } from './constructor';

export const REQUEST_INGRIDIENT_BURGER = 'REQUEST_INGRIDIENT_BURGER';
export const ERROR_REQUEST_INGRIDIENT_BURGER =
  'ERROR_REQUEST_INGRIDIENT_BURGER';
export const STATE_MODAL_WINDOWS_INGRIDIENTS = 'STATE_MODAL_WINDOWS';
export const DELETE_DATA_MODAL = 'DELETE_DATA_MODAL';
export const SET_INGRIDIENT_MODAL = 'SET_INGRIDIENT_MODAL';

export const getDataIngridietn = (url: string) => (dispatch: any) => {
  fetch(url)
    .then(res => res.json())
    .then(response => {
      if (response.success) {
        dispatch({
          type: REQUEST_INGRIDIENT_BURGER,
          items: response.data,
        });
        dispatch({
          type: ADD_BUN_CONSTRUCTOR,
          item: response.data.find((elem: any) => elem.type === 'bun'),
        });
      } else {
        dispatch({ type: ERROR_REQUEST_INGRIDIENT_BURGER, text: response });
      }
    })
    .catch(error => {
      console.log(error);
      dispatch({ type: ERROR_REQUEST_INGRIDIENT_BURGER, text: error });
    }
    );
};

export const isModalWindowsIngridient = (state: boolean) => (dispatch: any) => {
  dispatch({
    type: STATE_MODAL_WINDOWS_INGRIDIENTS,
    state: state,
  });
};
