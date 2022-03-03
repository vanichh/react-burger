import { igridientsReducer } from './ingredients';
import * as types from 'services/constants';
import { IDataProps } from 'utils/types';
import { initialState } from 'services/reducers/ingredients';

const data: IDataProps = {
  _id: '2',
  name: 'test',
  type: 'bun',
  proteins: 2,
  fat: 2,
  carbohydrates: 2,
  calories: 2,
  price: 2,
  image: 'url',
  image_large: 'url',
  image_mobile: 'url',
  __v: 2,
};

describe('test reducer igridients', () => {
  it('should initial state', () => {
    expect(
      igridientsReducer(undefined, {
        type: undefined,
      })
    ).toEqual(initialState);
  });

  it('should handle WS_SET_SOKET', () => {
    expect(
      igridientsReducer(initialState, {
        type: types.REQUEST_INGRIDIENT_BURGER,
        items: [data],
      })
    ).toEqual({
      ...initialState,
      isLoding: true,
      listIgridients: [data],
    });
  });

  it('should handle ERROR_REQUEST_INGRIDIENT_BURGER', () => {
    expect(
      igridientsReducer(initialState, {
        type: types.ERROR_REQUEST_INGRIDIENT_BURGER,
        text: 'text',
      })
    ).toEqual({
      ...initialState,
      errorRequest: true,
      errorRequestText: 'text',
    });
  });

  it('should handle SET_INGRIDIENT_MODAL', () => {
    expect(
      igridientsReducer(
        {
          ...initialState,
          listIgridients: [data],
        },
        {
          type: types.SET_INGRIDIENT_MODAL,
          item: '2',
        }
      )
    ).toEqual({
      ...initialState,
      listIgridients: [data],
      ingredientDetails: data,
      isModalOpenIngridients: true,
    });
  });

  it('should handle SET_INGRIDIENT', () => {
    expect(
      igridientsReducer(initialState, {
        type: types.SET_INGRIDIENT,
        item: data,
      })
    ).toEqual({
      ...initialState,
      ingredientDetails: data,
      NoSerchIngredientDetails: false,
      isLoadingIngredientDetails: true,
      isHaveIngridientDetails: true,
    });
  });

  it('should handle NO_INGRIDIENT', () => {
    expect(
      igridientsReducer(initialState, {
        type: types.NO_INGRIDIENT,
      })
    ).toEqual({
      ...initialState,
      NoSerchIngredientDetails: true,
    });
  });

  it('should handle STATE_MODAL_WINDOWS', () => {
    expect(
      igridientsReducer(initialState, {
        type: types.STATE_MODAL_WINDOWS,
        state: true,
      })
    ).toEqual({
      ...initialState,
      isModalOpenIngridients: true,
    });
  });
});
