import { setCookie } from './cookie';

interface IRequest {
  readonly url: string;
  readonly method?: 'GET' | 'POST' | 'PATCH';
  readonly body?: { [key: string]: any };
  readonly token?: string;
}

type Trequest<T> = (params: T) => Promise<Response>;

export const request: Trequest<IRequest> = (params) => {
  const requestHeaders = new Headers();

  requestHeaders.set('Content-Type', 'application/json');

  if (params.token) {
    requestHeaders.set('Authorization', params.token);
  }

  const sitingFetch: RequestInit = {
    method: params.method || 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    headers: requestHeaders,
  };

  if (params.body) {
    sitingFetch.body = JSON.stringify(params.body);
  }

  return fetch(params.url, sitingFetch);
};

type TcheckResponse = (response: Response) => any | Promise<never>;

export const checkResponse: TcheckResponse = (response) => {
  if (response.ok) {
    return response.json();
  }
  return Promise.reject(`Ошибка: ${response.status}`);
};

type TgetToken = (
  obj: { [key: string]: any } & { accessToken: string }
) => string;

export const getToken: TgetToken = (obj) => {
  return obj.accessToken.split('Bearer ')[1];
};

type TrefreshToken = { [key: string]: any } & Record<
  'refreshToken' | 'accessToken',
  any
>;

type TsetAccessToken = (obj: TrefreshToken) => void;

export const setAccessToken: TsetAccessToken = (obj) => {
  localStorage.setItem('refreshToken', obj.refreshToken);
};

export const setTokenCookie = (data: TrefreshToken): void => {
  setCookie('accessToken', getToken(data), { 'max-age': 1200 });
};
