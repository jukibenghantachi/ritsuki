import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next/types';
import { dehydrate, DehydratedState, QueryClient } from 'react-query';
import { getAnimeById } from '../../../services/detail';
import { Data } from '../../../types';

type AnimeDetailProps = {
  dehydratedState?: DehydratedState;
  data: Data;
};

const AnimeDetail: NextPage<AnimeDetailProps> = ({ data }) => {
  return (
    <div>
      <Head>
        <title>{data.title} - Ritsuki</title>
        <meta name="description" content={data.synopsis} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default AnimeDetail;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const queryClient = new QueryClient();
  await queryClient.prefetchQuery(
    ['anime', { id: query.id, type: 'detail' }],
    () => getAnimeById({ id: query.id })
  );
  const { data } = queryClient.getQueryData<any>([
    'anime',
    { id: query.id, type: 'detail' },
  ]);

  return {
    props: {
      dehydratedState: dehydrate(queryClient),
      data: data,
    },
  };
};
