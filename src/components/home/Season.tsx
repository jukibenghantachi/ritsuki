import { FC } from 'react';
import { useQuery, UseQueryResult } from 'react-query';
import { Card } from './Card';
import { getSeasonsNow } from '../../services/home';
import { DataAnime } from '../../types';

export const Season: FC = () => {
  const { data, isLoading }: UseQueryResult<DataAnime, unknown> = useQuery(
    ['anime', { type: 'season-now' }],
    getSeasonsNow
  );

  return <Card name="Spring Season" data={data} isLoading={isLoading} />;
};
