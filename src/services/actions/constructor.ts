export const STATE_MODAL_WINDOWS_ORDER = 'STATE_MODAL_WINDOWS_ORDER';
export const REQUEST_NUMBER_ORDER = 'REQUEST_NUMBER_OREDER';
export const SET_INGRIDIENT_CONSTRUCTOR = 'SET_INGRIDIENT_CONSTRUCTOR';
export const PLUS_ORDER_SUM = 'PLUS_ORDER_SUM';
export const MINUS_ORDER_SUM = 'MINUS_ORDER_SUM';
export const ADD_INGRIDIENT = 'ADD_INGRIDIENT';
export const DELETE_INGRIDIENT = 'DELETE_INGRIDIENT';
export const ADD_BUN_CONSTRUCTOR = 'ADD_BUN_CONSTRUCTOR';
export const UPDATE_BUN_CONSTRUCTOR = 'DELETE_BUN_CONSTRUCTOR';
export const MOVING_INGRIDIENT_CONSTRUCTOR = 'MOVING_INGRIDIENT_CONSTRUCTOR'

export const isModalWindowsOrder = (state: boolean) => (dispatch: any) => {
  dispatch({
    type: STATE_MODAL_WINDOWS_ORDER,
    state: state,
  });
};

export const changeStateElem =
  (type: 'delete' | 'add', item: any) => (dispatch: any) => {
    if (type === 'add') {
      dispatch({
        type: ADD_INGRIDIENT,
        item: item,
      });
    } else if (type === 'delete') {
      dispatch({
        type: DELETE_INGRIDIENT,
        item: item,
      });
    }
  };

export const getNumberOrder =
  (url: string) => (dispatch: any, getState: any) => {
    const { burgerConstructor } = getState();
    fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify({
        ingredients: [
          burgerConstructor.bunConstructor._id,
          ...burgerConstructor.ingridientsConstructor.map(
            (elem: { _id: string }) => elem._id
          ),
          burgerConstructor.bunConstructor._id,
        ],
      }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.success) {
          dispatch({
            type: REQUEST_NUMBER_ORDER,
            item: response.order,
          });
        }
      })
      .catch((error) => {
        console.log(error);
        dispatch({
          type: REQUEST_NUMBER_ORDER,
          item: burgerConstructor.order,
        });
      });
  };
