import { GetStaticPaths, GetStaticProps, NextPage } from 'next/types';
import {
  dehydrate,
  DehydratedState,
  QueryClient,
  useQuery,
  UseQueryResult,
} from 'react-query';
import { NextSeo } from 'next-seo';

import { useQueryPage } from '@/hooks/useQueryPage';
import { getAnimeById } from '@/services/detail';
import { AnimeDetail } from '@/types';

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
      <NextSeo
        title={`${anime?.data?.title} - Ritsuki`}
        description={anime?.data?.synopsis}
        openGraph={{
          url: '@site',
          title: `${anime?.data?.title} - Ritsuki`,
          description: anime?.data?.synopsis,
          images: [{ url: anime?.data?.images.webp.large_image_url || '' }],
          site_name: 'Ritsuki',
        }}
        twitter={{
          handle: '@handle',
          site: '@site',
          cardType: anime?.data?.images.webp.large_image_url || '',
        }}
      />
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
