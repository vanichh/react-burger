import { getCookie, delCookie } from 'utils/cookie';
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
import { Dispatch } from 'redux';

export const SET_USER = 'SET_ACCOUNT';
export const LOGOUT_USER = 'LOGOUT_USER';
export const RESET_PASSWORD = 'RESET_PASSWORD';
export const NEW_PASSWORD = 'NEW_PASSWORD';
export const UPDATE_USER = 'UPDATE_USER';
export const ERROR_LODING_USER = 'ERROR_LODING_USER';
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

const updateToken = async () => {
  
  const refreshToken = localStorage.getItem('refreshToken');

  const response = await request({
    url: API_UPD_TOKEN,
    method: 'POST',
    body: { token: refreshToken },
  });
  if (response.ok) {
    const res = await response.json();
    if (res.success) {
      setAccessToken(res);
      setTokenCookie(res);
    }
  }
};

export const getUser = () => async (dispatch: Dispatch) => {
  // проверяем что ранее не был авторизован пользователь
  if (!getCookie('accessToken')) {
    updateToken();
  }
  if (!localStorage.getItem('refreshToken')) {
    return dispatch({ type: ERROR_LODING_USER });
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
    updateToken();
    getUser();
  }
};

export const updateUser = (data: any) => async (dispatch: Dispatch) => {
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

export const authorizationUser =
  (data: IdataAuth) => async (dispatch: Dispatch) => {
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

export const registrationUser =
  (data: IdataRegist) => async (dispatch: Dispatch) => {
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

export const logoutUser = () => async (dispatch: Dispatch) => {
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

export const resetPassword = (emali: string) => async (dispatch: Dispatch) => {
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

export const newPassword =
  (data: InewPassword) => async (dispatch: Dispatch) => {
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
