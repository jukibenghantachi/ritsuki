import { api } from './api';

export const getSeasonsNow = () => api({ url: '/seasons/now', method: 'GET' });
