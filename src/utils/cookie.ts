/* eslint-disable no-useless-escape */


type TsetCookie<T = {[key: string]: any;}> = (
  name: string,
  value: string,
  options?: T
) => void;

export const setCookie: TsetCookie = (name, value, options?) => {
  let updatedCookie =
    encodeURIComponent(name) + '=' + encodeURIComponent(value);

  if (options !== undefined) {
    for (let optionKey in options) {
      updatedCookie += '; ' + optionKey;
      let optionValue = options[optionKey];
      if (optionValue !== true) {
        updatedCookie += '=' + optionValue;
      }
    }
  }

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
  return matches ? decodeURIComponent(matches[1]) : false;
};

export const delCookie = (name: string) => {
  setCookie(name, '', {
    time: -1,
  });
};
