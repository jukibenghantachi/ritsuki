import type { NextPage } from 'next';
import { useQuery, UseQueryResult } from 'react-query';
import Head from 'next/head';

import { Section } from '../../components/home/Section';
import { getSeasonsNow, getTopAnime } from '../../services/home';
import { DataAnime } from '../../types';

const Home: NextPage = () => {
  const qSeasonsNow: UseQueryResult<DataAnime, unknown> = useQuery(
    ['anime', { type: 'season-now' }],
    getSeasonsNow
  );
  const qTopAnime: UseQueryResult<DataAnime, unknown> = useQuery(
    ['anime', { type: 'top-anime' }],
    getTopAnime
  );

  return (
    <div className="h-full w-full bg-background">
      <Head>
        <title>Ritsuki - Anime and Manga Tracker</title>
        <meta
          name="description"
          content="Ritsuki is a tracker anime and manga with modern UI. "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col gap-14">
        <Section
          name="Spring Season"
          data={qSeasonsNow.data}
          isLoading={qSeasonsNow.isLoading}
        />
        <Section
          name="Top Anime"
          data={qTopAnime.data}
          isLoading={qTopAnime.isLoading}
        />
      </div>
    </div>
  );
};

export default Home;
