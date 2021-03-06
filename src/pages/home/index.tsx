import Head from 'next/head';
import type { NextPage } from 'next';
import { useQuery, UseQueryResult } from 'react-query';
import {
  faCalendarDays,
  faStar,
  faTrophy,
} from '@fortawesome/free-solid-svg-icons';

import { SectionLeft } from '@/components/home/SectionLeft';
import { SectionRight } from '@/components/home/SectionRight';
import { useSeasons } from '@/hooks/useSeasons';
import {
  getSeasonsNow,
  getTopAnime,
  getAnimeRecommendations,
} from '@/services/home';
import { AnimeLists, AnimeRecommendations } from '@/types';

const Home: NextPage = () => {
  const qSeasonsNow: UseQueryResult<AnimeLists, unknown> = useQuery(
    ['anime', { type: 'seasons-now' }],
    getSeasonsNow
  );
  const qTopAnime: UseQueryResult<AnimeLists, unknown> = useQuery(
    ['anime', { type: 'top-anime' }],
    getTopAnime
  );
  const qRecommendationAnime: UseQueryResult<AnimeRecommendations, unknown> =
    useQuery(
      ['anime', { type: 'recommendations-anime' }],
      getAnimeRecommendations
    );
  const season = useSeasons();

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
        <div className="flex w-[70%] flex-col gap-12">
          <SectionLeft
            name={season}
            logo={faCalendarDays}
            query={qSeasonsNow}
          />
          <SectionLeft name="Top Anime" logo={faTrophy} query={qTopAnime} />
        </div>
        <div className="flex w-[30%] flex-col gap-5">
          <SectionRight
            name="Recommendation"
            logo={faStar}
            query={qRecommendationAnime}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
