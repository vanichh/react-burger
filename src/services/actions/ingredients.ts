import {
    REQUEST_NUMBER_OREDER,
    SET_INGRIDIENT_BURGER,
    STATE_MODAL_WINDOWS_INGRIDIENTS,
    STATE_MODAL_WINDOWS_ORDER,
} from './index';

export const getDataIngridietn = (url: string) => (dispatch: any) => {
    fetch(url)
        .then((res) => res.json())
        .then((response) => {
            if (response.success) {
                dispatch({
                    type: SET_INGRIDIENT_BURGER,
                    items: response.data,
                });
            }
        })
        .catch((e) => console.log(e));
};

export const isModalWindowsIngridient = (state: boolean) => (dispatch: any) => {
    dispatch({
        type: STATE_MODAL_WINDOWS_INGRIDIENTS,
        state: state,
    });
};

export const isModalWindowsOrder = (state: boolean) => (dispatch: any) => {
    dispatch({
        type: STATE_MODAL_WINDOWS_ORDER,
        state: state,
    });
};

export const getNumberOrder =
    (url: string) => (dispatch: any, getState: any) => {
        const { cart } = getState();

        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                ingredients: cart.listIgridientsConstructor.map(
                    (elem: { _id: string }) => elem._id
                ),
            }),
        })
            .then((response) => response.json())
            .then((response) => {
                if (response.success) {
                    dispatch({
                        type: REQUEST_NUMBER_OREDER,
                        item: response.order,
                    });
                }
            })
            .catch((error) => {
                console.log(error);
                dispatch({
                    type: REQUEST_NUMBER_OREDER,
                    item: cart.order,
                });
            });
    };
