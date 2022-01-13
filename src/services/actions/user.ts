import { URL_API } from 'utils/url-api';
import { setCookie } from 'utils/cookie';

export const SET_ACCOUNT = 'SET_ACCOUNT';
export const DELETE_ACCOUNT = 'DELETE_ACCOUNT';

interface IdataAuth {
  email: string;
  password: string;
}

const URL_API_AUTCH = URL_API + 'auth/login';
const URL_API_REGISTRATION = URL_API + 'auth/register';

export const authorizationAccount = (data: IdataAuth) => (dispatch: any) => {
  (async () => {
    const response = await fetch(URL_API_AUTCH, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      let userInfo = await response.json();
      dispatch({ type: SET_ACCOUNT, item: userInfo.user });
      localStorage.setItem('refreshToken', userInfo.refreshToken);
      setCookie('accessToken', userInfo.accessToken.split('Bearer ')[1]);
    }
  })();
};

interface IdataRegist extends IdataAuth {
  name: string;
}

export const registrationAccount = (data: IdataRegist) => (dispatch: any) => {
  (async () => {
    const response = await fetch(URL_API_REGISTRATION, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json;charset=utf-8',
      },
      body: JSON.stringify(data),
    });
    if (response.ok) {
      let userInfo = await response.json();
      dispatch({ type: SET_ACCOUNT, item: userInfo.user });
      localStorage.setItem('refreshToken', userInfo.refreshToken);
      setCookie('accessToken', userInfo.accessToken.split('Bearer ')[1]);
    }
  })();
};

export const delAccount = () => {
  return {
    type: DELETE_ACCOUNT,
  };
};
