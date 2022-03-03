import { constructorReducer } from './constructor';
import * as types from 'services/constants';
import { IDataProps } from 'utils/types';
import { initialState } from 'services/reducers/constructor';
const ingridient: IDataProps = {
  _id: '2323',
  name: 'ivan',
  type: 'main',
  proteins: 23,
  fat: 54,
  carbohydrates: 8,
  calories: 8,
  price: 2,
  image: 'url',
  image_mobile: 'url',
  image_large: 'url',
  __v: 1214454,
  uuid: '1232132134',
};
const ingridientBun: IDataProps = {
  _id: '2323',
  name: 'ivan',
  type: 'bun',
  proteins: 23,
  fat: 54,
  carbohydrates: 8,
  calories: 8,
  price: 10,
  image: 'url',
  image_mobile: 'url',
  image_large: 'url',
  __v: 1214454,
};

describe('test reducer constructor', () => {
  it('should initial state', () => {
    expect(
      constructorReducer(undefined, {
        type: undefined,
      })
    ).toEqual(initialState);
  });

  it('should handle SET_INGRIDIENT_CONSTRUCTOR', () => {
    expect(
      constructorReducer(initialState, {
        type: types.SET_INGRIDIENT_CONSTRUCTOR,
        items: [ingridient],
      })
    ).toEqual({
      ...initialState,
      ingridientsConstructor: [ingridient],
    });
  });
  it('should handle REQUEST_NUMBER_ORDER', () => {
    expect(
      constructorReducer(initialState, {
        type: types.REQUEST_NUMBER_ORDER,
        item: { number: '123456' },
      })
    ).toEqual({
      ...initialState,
      order: { number: '123456' },
      isModalOpen: true,
    });
  });

  it('should handle STATE_MODAL_WINDOWS_ORDER', () => {
    expect(
      constructorReducer(initialState, {
        type: types.STATE_MODAL_WINDOWS_ORDER,
        state: false,
      })
    ).toEqual({
      ...initialState,
      isModalOpen: false,
    });
  });

  it('should handle ADD_INGRIDIENT', () => {
    expect(
      constructorReducer(initialState, {
        type: types.ADD_INGRIDIENT,
        item: ingridient,
      })
    ).toEqual({
      ...initialState,
      ingridientsConstructor: [ingridient],
      orderSum: 2,
      countIngridientsConstructor: {
        [ingridient._id]: 1,
      },
    });
  });

  it('should handle DELETE_INGRIDIENT', () => {
    expect(
      constructorReducer(
        {
          ...initialState,
          ingridientsConstructor: [ingridient],
          orderSum: 2,
          countIngridientsConstructor: {
            [ingridient._id]: 1,
          },
        },
        {
          type: types.DELETE_INGRIDIENT,
          item: ingridient,
        }
      )
    ).toEqual({
      ...initialState,
      ingridientsConstructor: [],
      orderSum: 0,
      countIngridientsConstructor: {
        [ingridient._id]: 0,
      },
    });
  });

  it('should handle ADD_BUN_CONSTRUCTOR', () => {
    expect(
      constructorReducer(initialState, {
        type: types.ADD_BUN_CONSTRUCTOR,
        item: ingridientBun,
      })
    ).toEqual({
      ...initialState,
      orderSum: ingridientBun.price * 2,
      bunConstructor: ingridientBun,
      countIngridientsConstructor: {
        [ingridientBun._id]: 1,
        undefined: 0,
      },
    });
  });

  it('should handle MOVING_INGRIDIENT_CONSTRUCTOR', () => {
    expect(
      constructorReducer(
        { ...initialState, ingridientsConstructor: [ingridient] },
        {
          type: types.MOVING_INGRIDIENT_CONSTRUCTOR,
          item: {
            newItem: ingridient,
            index: 3,
            uuid: '1232132139',
          },
        }
      )
    ).toEqual({
      ...initialState,
      ingridientsConstructor: [{ ...ingridient, uuid: '1232132134' }, ingridient],
    });
  });

  it('should handle RESET_STATE_INGRIDIENT', () => {
    expect(
      constructorReducer(initialState, {
        type: undefined,
      })
    ).toEqual(initialState);
  });
});
