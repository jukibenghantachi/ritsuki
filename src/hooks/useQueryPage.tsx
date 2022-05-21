import { useRouter } from 'next/router';

export const useQueryPage = () => useRouter().query;
