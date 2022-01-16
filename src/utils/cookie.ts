/* eslint-disable no-useless-escape */
interface IsetCookie {
  time?: number;
  path?: string;
  secure?: boolean;
}

type TsetCookie<T> = (name: string, value: any, options?: T) => void;

export const setCookie = (name: string, value: string, options = {}) => {
  let updatedCookie =
    encodeURIComponent(name) + '=' + encodeURIComponent(value);

  document.cookie = updatedCookie;
};

export const getCookie = (name: string) => {
    let matches = document.cookie.match(
      new RegExp(
        '(?:^|; )' +
          name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') +
          '=([^;]*)'
      )
    );
    return matches ? decodeURIComponent(matches[1]) : undefined;
};

export const delCookie = (name: string) => {
  setCookie(name, '', {
    time: -1,
  });
};
