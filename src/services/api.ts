const API_URL = 'https://api.jikan.moe/v4';

type FetchParam = {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: string;
};

export const api = async ({
  url,
  method,
  body,
}: FetchParam): Promise<Response> => {
  const res = await fetch(API_URL + url, {
    method,
    body: JSON.stringify(body),
  });
  return res.json();
};
