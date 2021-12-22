export const STATE_MODAL_WINDOWS_ORDER = 'STATE_MODAL_WINDOWS_ORDER';
export const REQUEST_NUMBER_ORDER = 'REQUEST_NUMBER_OREDER';
export const SET_INGRIDIENT_CONSTRUCTOR = 'SET_INGRIDIENT_CONSTRUCTOR';
export const PLUS_ORDER_SUM = 'PLUS_ORDER_SUM';
export const MINUS_ORDER_SUM = 'MINUS_ORDER_SUM';
export const ADD_INGRIDIENT = 'ADD_INGRIDIENT';
export const DELETE_INGRIDIENT = 'DELETE_INGRIDIENT';
export const SET_BUN_CONSTRUCTOR = 'SET_BUN_CONSTRUCTOR';

export const isModalWindowsOrder = (state: boolean) => (dispatch: any) => {
    dispatch({
        type: STATE_MODAL_WINDOWS_ORDER,
        state: state,
    });
};

export const countOrderSum =
    (type: 'minus' | 'plus', item: any) => (dispatch: any) => {
        if (type === 'minus') {
            dispatch({
                type: DELETE_INGRIDIENT,
                item: item,
                ADD_INGRIDIENT,
            });
        } else {
            dispatch({
                type: ADD_INGRIDIENT,
                item: item,
            });
        }
    };

export const getNumberOrder =
    (url: string) => (dispatch: any, getState: any) => {
        const { constructor } = getState();
        fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8',
            },
            body: JSON.stringify({
                ingredients: constructor.igridientsConstructor.map(
                    (elem: { _id: string }) => elem._id
                ),
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
                    item: constructor.order,
                });
            });
    };
