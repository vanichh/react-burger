import { URL_API } from 'utils/url-api';
import { setCookie, getCookie, delCookie } from 'utils/cookie';
import { RequestPOST, RequestGET, RequestPATCH } from 'utils/fetchSettings';

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

const URL_API_AUTCH = URL_API + 'auth/login';
const URL_API_REGISTRATION = URL_API + 'auth/register';
const URL_API_LOGOUT = URL_API + 'auth/logout';
const URL_API_RESSET_PASSWORD = URL_API + 'password-reset';
const URL_API_NEW_PASSWORD = URL_API + 'password-reset/reset';
const URL_API_GET_AND_UPD_USER = URL_API + 'auth/user';
const URL_API_UPD_TOKEN = URL_API + 'auth/token';

const updateToken = async () => {
  const refreshToken = localStorage.getItem('refreshToken');
  const requestBody = {
    token: refreshToken,
  };
  const response = await fetch(URL_API_UPD_TOKEN, RequestPOST(requestBody));
  if (response.ok) {
    const res = await response.json();
    if (res.success) {
      localStorage.setItem('refreshToken', res.refreshToken);
      setCookie('accessToken', res.accessToken.split('Bearer ')[1], {
        'max-age': 1200,
      });
    }
  }
};

export const getUser = () => async (dispatch: any) => {
  // проверяем что ранее не был авторизован пользователь
  if (!getCookie('accessToken')) {
    updateToken();
  }
  if (!localStorage.getItem('refreshToken')) {
    return dispatch({ type: ERROR_LODING_USER });
  }
  const token = 'Bearer ' + getCookie('accessToken');
  const response = await fetch(URL_API_GET_AND_UPD_USER, RequestGET(token));
  if (response.ok) {
    const res = await response.json();
    dispatch({ type: SET_USER, item: res.user });
  } else {
    updateToken();
    getUser();
  }
};

export const updateUser = (data: any) => async (dispatch: any) => {
  const response = await fetch(URL_API_GET_AND_UPD_USER, RequestPATCH(data));
  if (response.ok) {
    let userInfo = await response.json();
    dispatch({ type: SET_USER, item: userInfo.user });
  }
};

export const authorizationUser = (data: IdataAuth) => async (dispatch: any) => {
  const response = await fetch(URL_API_AUTCH, RequestPOST(data));
  if (response.ok) {
    let userInfo = await response.json();
    dispatch({ type: SET_USER, item: userInfo.user });
    localStorage.setItem('refreshToken', userInfo.refreshToken);
    setCookie('accessToken', userInfo.accessToken.split('Bearer ')[1], {
      'max-age': 1200,
    });
  }
};

export const registrationUser =
  (data: IdataRegist) => async (dispatch: any) => {
    const response = await fetch(URL_API_REGISTRATION, RequestPOST(data));
    if (response.ok) {
      let userInfo = await response.json();
      dispatch({ type: SET_USER, item: userInfo.user });
      localStorage.setItem('refreshToken', userInfo.refreshToken);
      setCookie('accessToken', userInfo.accessToken.split('Bearer ')[1], {
        'max-age': 1200,
      });
    }
  };

export const logoutUser = () => async (dispatch: any) => {
  const refreshToken = localStorage.getItem('refreshToken');
  const token = { token: refreshToken };

  const response = await fetch(URL_API_LOGOUT, RequestPOST(token));
  if (response.ok) {
    dispatch({ type: LOGOUT_USER });
    localStorage.removeItem('refreshToken');
    delCookie('accessToken');
  }
};

export const resetPassword = (emali: string) => async (dispatch: any) => {
  const response = await fetch(URL_API_RESSET_PASSWORD, RequestPOST({ emali }));
  if (response.ok) {
    dispatch({ type: RESET_PASSWORD });
  }
};

export const newPassword = (data: InewPassword) => async (dispatch: any) => {
  const requestBody = {
    password: data.password,
    token: data.codeEmail,
  };

  const response = await fetch(
    URL_API_NEW_PASSWORD,
    RequestPOST({ ...requestBody })
  );
  if (response.ok) {
    dispatch({ type: NEW_PASSWORD });
  }
};
