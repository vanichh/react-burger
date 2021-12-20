import { SET_INGRIDIENT_BURGER, STATE_MODAL_WINDOWS_INGRIDIENTS, STATE_MODAL_WINDOWS_ORDER } from './index';

export const getDataIngridietn = (url: string) => (dispatch: any) => {
    fetch(url)
        .then(res => res.json())
        .then(response => {
            if (response.success) {
                dispatch({
                    type: SET_INGRIDIENT_BURGER,
                    items: response.data,
                });
            }
        })
        .catch(e => console.log(e));
};

export const isModalWindowsIngridient = (state: boolean) => (dispatch: any) => {
    dispatch({
        type: STATE_MODAL_WINDOWS_INGRIDIENTS,
        action: state,
    });
};

export const isModalWindowsOrder = (state: boolean) => (dispatch: any) => {
    dispatch({
        type: STATE_MODAL_WINDOWS_ORDER,
        action: state,
    });
};
