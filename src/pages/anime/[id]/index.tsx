import Head from 'next/head';
import { NextPage } from 'next/types';
import { UseQueryResult, useQuery } from 'react-query';
import { useQueryPage } from '../../../hooks/useQueryPage';
import { getAnimeById } from '../../../services/detail';
import { Data } from '../../../types';

const AnimeDetail: NextPage = () => {
  const { id } = useQueryPage();
  const { data }: UseQueryResult<Data, unknown> = useQuery(
    ['anime', { id: id, type: 'detail' }],
    () => getAnimeById({ id })
  );

  return (
    <div>
      <Head>
        <title>{data?.title} - Ritsuki</title>
        <meta name="description" content={data?.synopsis} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default AnimeDetail;
