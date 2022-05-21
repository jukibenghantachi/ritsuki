import { api } from './api';

export const getAnimeById = ({ id }: { id: string | string[] | undefined }) =>
  api({ url: `/anime/${id}`, method: 'GET' });
