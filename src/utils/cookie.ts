interface IsetCookie {
  time?: number;
  path?: string;
  secure?: boolean;
}

type TsetCookie<T> = (name: string, value: any, options?: T) => void;

export const setCookie: TsetCookie<IsetCookie> = (name, value, options?) => {
  if (options === undefined) {
  }
  document.cookie = `expires=Tue ${decodeURIComponent(
    name
  )}=${decodeURIComponent(value)}`;
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
