import { getCookie, delCookie } from 'utils/cookie';
import { TThunks } from '../types/';
import {
  checkResponse,
  request,
  setAccessToken,
  setTokenCookie,
} from 'utils/api-methods';
import {
  API_AUTCH,
  API_REGISTRATION,
  API_LOGOUT,
  API_RESSET_PASSWORD,
  API_NEW_PASSWORD,
  API_GET_AND_UPD_USER,
  API_UPD_TOKEN,
} from 'utils/url-api';

import {
  SET_USER,
  LOGOUT_USER,
  RESET_PASSWORD,
  NEW_PASSWORD,
  ERROR_LODING_USER,
} from 'services/constants';
interface IdataAuth {
  email: string;
  password: string;
}
interface IdataRegist extends IdataAuth {
  name: string;
}
interface InewPassword {
  password: string;
  codeEmail: string;
}

const updateToken = async (token: string) => {
  const response = await request({
    url: API_UPD_TOKEN,
    method: 'POST',
    body: { token: token },
  });
  if (response.ok) {
    const res = await response.json();
    if (res.success) {
      setAccessToken(res);
      setTokenCookie(res);
    }
  }
};

export const getUser:TThunks = () => async (dispatch) => {
  const refreshToken = localStorage.getItem('refreshToken');

  if (!refreshToken) {
    return dispatch({ type: ERROR_LODING_USER });
  }

  // проверяем что ранее не был авторизован пользователь
  if (!getCookie('accessToken')) {
    updateToken(refreshToken);
  }

  const token = 'Bearer ' + getCookie('accessToken');

  const response = await request({
    url: API_GET_AND_UPD_USER,
    method: 'GET',
    token,
  });

  const res = await checkResponse(response);

  if (res.success) {
    dispatch({ type: SET_USER, item: res.user });
  } else {
    updateToken(refreshToken);
    getUser();
  }
};

interface IUpdateUser {
  password?: string;
  name?: string;
  email?: string;
}

export const updateUser: TThunks<IUpdateUser> = (data) => async (dispatch) => {
  const token = 'Bearer ' + getCookie('accessToken');

  const response = await request({
    url: API_GET_AND_UPD_USER,
    method: 'PATCH',
    body: data,
    token,
  });

  const userInfo = await checkResponse(response);

  if (userInfo.success) {
    dispatch({ type: SET_USER, item: userInfo.user });
  }
};

export const authorizationUser: TThunks<IdataAuth> =
  (data) => async (dispatch) => {
    const response = await request({
      url: API_AUTCH,
      method: 'POST',
      body: data,
    });

    const userInfo = await checkResponse(response);

    if (userInfo.success) {
      dispatch({ type: SET_USER, item: userInfo.user });
      setAccessToken(userInfo);
      setTokenCookie(userInfo);
    }
  };

export const registrationUser: TThunks<IdataRegist> =
  (data) => async (dispatch) => {
    const response = await request({
      url: API_REGISTRATION,
      method: 'POST',
      body: data,
    });

    const userInfo = await checkResponse(response);

    if (userInfo.success) {
      dispatch({ type: SET_USER, item: userInfo.user });
      setAccessToken(userInfo);
      setTokenCookie(userInfo);
    }
  };

export const logoutUser: TThunks = () => async (dispatch) => {
  const refreshToken = localStorage.getItem('refreshToken');

  const response = await request({
    url: API_LOGOUT,
    method: 'POST',
    body: { token: refreshToken },
  });

  const userInfo = await checkResponse(response);

  if (userInfo.success) {
    dispatch({ type: LOGOUT_USER });
    localStorage.removeItem('refreshToken');
    delCookie('accessToken');
  }
};

export const resetPassword: TThunks<string> = (emali) => async (dispatch) => {
  const response = await request({
    url: API_RESSET_PASSWORD,
    method: 'POST',
    body: { emali: emali },
  });

  const res = await checkResponse(response);

  if (res.success) {
    dispatch({ type: RESET_PASSWORD });
  }
};

export const newPassword: TThunks<InewPassword> =
  (data: InewPassword) => async (dispatch) => {
    const requestBody = {
      password: data.password,
      token: data.codeEmail,
    };

    const response = await request({
      url: API_NEW_PASSWORD,
      method: 'POST',
      body: requestBody,
    });

    const res = await checkResponse(response);

    if (res.success) {
      dispatch({ type: NEW_PASSWORD });
    }
  };
