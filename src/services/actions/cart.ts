import { GET_INGRIDIENT_BURGER } from './index';

export const getDataIngridietn = (url: string) => (dispatch: any) => {
    fetch(url)
        .then((res) => res.json())
        .then((response) => {
            if (response.success) {
                dispatch({
                    type: GET_INGRIDIENT_BURGER,
                    items: response.data,
                });
            }
        })
        .catch((e) => console.log(e));
};
