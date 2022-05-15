import { FC } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { Card } from './Card';
import { getTopAnime } from '../../services/home';
import { DataAnime } from '../../types';

export const TopAnime: FC = () => {
  const { data, isLoading }: UseQueryResult<DataAnime, unknown> = useQuery(
    ['anime', { type: 'top-anime' }],
    getTopAnime
  );

  return <Card name="Top Anime" data={data} isLoading={isLoading} />;
};
