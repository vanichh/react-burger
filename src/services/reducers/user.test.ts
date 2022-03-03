import { userReducer } from './user';
import * as types from 'services/constants';
import { initialState } from 'services/reducers/user';

describe('test reducer user', () => {
  it('should initial state', () => {
    expect(
      userReducer(undefined, {
        type: undefined,
      })
    ).toEqual(initialState);
  });

  it('should handle SET_USER', () => {
    expect(
      userReducer(initialState, {
        type: types.SET_USER,
        item: {
          name: 'ivan',
          email: 'test@mail.ru',
        },
      })
    ).toEqual({
      ...initialState,
      name: 'ivan',
      email: 'test@mail.ru',
      isAuth: true,
    });
  });

  it('should handle ERROR_LODING_USER', () => {
    expect(
      userReducer(initialState, {
        type: types.ERROR_LODING_USER,
      })
    ).toEqual({
      ...initialState,
      errorLodingUser: true,
      isAuth: false,
    });
  });

  it('should handle RESET_PASSWORD', () => {
    expect(
      userReducer(initialState, {
        type: types.RESET_PASSWORD,
      })
    ).toEqual({
      ...initialState,
      passwordReset: true,
    });
  });

  it('should handle NEW_PASSWORD', () => {
    expect(
      userReducer(initialState, {
        type: types.NEW_PASSWORD,
      })
    ).toEqual({
      ...initialState,
      passwordReset: false,
      successNewPassword: true,
    });
  });
  it('should handle UPDATE_USER', () => {
    expect(
      userReducer(initialState, {
        type: types.UPDATE_USER,
        item: {
          name: 'ivan',
          email: 'test@mail.ru',
        },
      })
    ).toEqual({
      ...initialState,
      name: 'ivan',
      email: 'test@mail.ru',
    });
  });
});
