import Head from 'next/head';
import { GetServerSideProps, NextPage } from 'next/types';
import { UseQueryResult, useQuery } from 'react-query';
import { getAnimeById } from '../../../services/detail';
import { Data } from '../../../types';

const AnimeDetail: NextPage = (props: any) => {
  const { data }: UseQueryResult<Data, unknown> = useQuery(
    ['anime', { id: props.data.mal_id, type: 'detail' }],
    () => getAnimeById({ id: props.data.mal_id })
  );

  return (
    <div>
      <Head>
        <title>{props.data.title} - Ritsuki</title>
        <meta name="description" content={props.data.synopsis} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <p>{JSON.stringify(data)}</p>
    </div>
  );
};

export default AnimeDetail;

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const { data }: any = await getAnimeById({ id: query.id });
  return {
    props: { data },
  };
};
