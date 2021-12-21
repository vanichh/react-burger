export const STATE_MODAL_WINDOWS_ORDER = 'STATE_MODAL_WINDOWS_ORDER';
export const REQUEST_NUMBER_ORDER = 'REQUEST_NUMBER_OREDER';
export const SET_INGRIDIENT_CONSTRUCTOR = 'SET_INGRIDIENT_CONSTRUCTOR';
export const PLUS_ORDER_SUM = 'PLUS_ORDER_SUM';
export const MINUS_ORDER_SUM = 'MINUS_ORDER_SUM';

export const isModalWindowsOrder = (state: boolean) => (dispatch: any) => {
    dispatch({
        type: STATE_MODAL_WINDOWS_ORDER,
        state: state,
    });
};

export const countOrderSum =
    (type: 'minus' | 'plus', prise: number) => (dispatch: any) => {
        if (type === 'minus') {
            dispatch({
                type: MINUS_ORDER_SUM,
                prise: prise,
            });
        } else {
            dispatch({
                type: PLUS_ORDER_SUM,
                prise: prise,
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
                ingredients: constructor.listIgridientsConstructor.map(
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
