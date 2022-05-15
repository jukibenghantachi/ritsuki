import type { NextPage } from 'next';
import { useQuery, UseQueryResult } from 'react-query';
import Head from 'next/head';
import { faCalendarDays, faTrophy } from '@fortawesome/free-solid-svg-icons';

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
      <div className="mt-[1.25rem] flex flex-col gap-12">
        <Section
          name="Spring Season"
          logo={faCalendarDays}
          query={qSeasonsNow}
        />
        <Section name="Top Anime" logo={faTrophy} query={qTopAnime} />
      </div>
    </div>
  );
};

export default Home;
