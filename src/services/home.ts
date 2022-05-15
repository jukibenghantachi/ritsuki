import { api } from './api';

export const getSeasonsNow = () => api({ url: '/seasons/now', method: 'GET' });
export const getTopAnime = () => api({ url: '/top/anime', method: 'GET' });
