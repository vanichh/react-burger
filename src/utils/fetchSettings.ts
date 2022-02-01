interface IRequestPOST {
  method: string;
  headers: {
    'Content-Type': string;
  };
  body: string;
}
interface IRequestGET {
  method: string;
  headers: {
    'Content-Type': string;
    Authorization: string;
  };
}

export const RequestPOST = (body: any): IRequestPOST => {
  return {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
};
export const RequestGET = (token: string): IRequestGET => {
  return {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: token,
    },
  };
};
export const RequestPATCH = (body: string): IRequestPOST => {
  return {
    method: 'PATCH',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(body),
  };
};
