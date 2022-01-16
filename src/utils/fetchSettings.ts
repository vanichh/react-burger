interface IRequestPOST {
  method: string;
  mode: string;
  cache: string;
  credentials: string;
  headers: {
    'Content-Type': string;
  };
  redirect: string;
  referrerPolicy: string;
  body: string;
}

export const RequestPOST = (body: any): any => {
  return {
    method: 'POST',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
    body: JSON.stringify(body),
  };
};
export const RequestGET = (token: string): any => {
  return {
    method: 'GET',
    mode: 'cors',
    cache: 'no-cache',
    credentials: 'same-origin',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
    redirect: 'follow',
    referrerPolicy: 'no-referrer',
  };
};
