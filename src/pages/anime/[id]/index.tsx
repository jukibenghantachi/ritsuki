import Head from 'next/head';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next/types';
import {
  dehydrate,
  DehydratedState,
  QueryClient,
  useQuery,
  UseQueryResult,
} from 'react-query';

import { useQueryPage } from '../../../hooks/useQueryPage';
import { getAnimeById } from '../../../services/detail';
import { AnimeDetail } from '../../../types';

type AnimeDetailProps = {
  dehydratedState?: DehydratedState;
};

const AnimeDetail: NextPage<AnimeDetailProps> = () => {
  const { id } = useQueryPage();
  const { data: anime }: UseQueryResult<AnimeDetail, unknown> = useQuery(
    ['anime', { id, type: 'detail' }],
    () => getAnimeById({ id }),
    {
      enabled: !id,
    }
  );
  return (
    <div>
      <Head>
        <title>{anime?.data.title} - Ritsuki</title>
        <meta name="description" content={anime?.data.synopsis} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>{JSON.stringify(anime)}</p>
    </div>
  );
};

export default AnimeDetail;

export const getStaticProps: GetStaticProps = async (context) => {
  const id = context.params?.id;
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(['anime', { id, type: 'detail' }], () =>
    getAnimeById({ id })
  );

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
    },
  };
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};
