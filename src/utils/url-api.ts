const { REACT_APP_KEY_API, REACT_APP_KEY_WSS } = process.env;

const API = 'https://' + REACT_APP_KEY_API;
export const WS = 'wss://' + REACT_APP_KEY_WSS;

export const API_ORDER = API + 'orders';
export const API_INGREDIENTS = API + 'ingredients';
export const API_AUTCH = API + 'auth/login';
export const API_REGISTRATION = API + 'auth/register';
export const API_LOGOUT = API + 'auth/logout';
export const API_RESSET_PASSWORD = API + 'password-reset';
export const API_NEW_PASSWORD = API + 'password-reset/reset';
export const API_GET_AND_UPD_USER = API + 'auth/user';
export const API_UPD_TOKEN = API + 'auth/token';

export const WS_GET_ORDERS = WS + 'orders/all';
export const WS_GET_USER_ORDERS = WS + 'orders';
