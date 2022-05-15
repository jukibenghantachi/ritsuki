import type { NextPage } from 'next';
import { useQuery, UseQueryResult } from 'react-query';
import Head from 'next/head';
import {
  faCalendarDays,
  faStar,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';

import { SectionLeft } from '../../components/home/SectionLeft';
import { SectionRight } from '../../components/home/SectionRight';
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
    <div className="bg-background">
      <Head>
        <title>Ritsuki - Anime and Manga Tracker</title>
        <meta
          name="description"
          content="Ritsuki is a tracker anime and manga with modern UI. "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="mt-[1.25rem] flex justify-between gap-7">
        <div className="flex flex-col gap-12 w-[70%]">
          <SectionLeft
            name="Spring Season"
            logo={faCalendarDays}
            query={qSeasonsNow}
          />
          <SectionLeft name="Top Anime" logo={faTrophy} query={qTopAnime} />
        </div>
        <div className="flex flex-col gap-5 w-[30%]">
          <SectionRight
            name="Recommendation"
            logo={faStar}
            query={qSeasonsNow}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
