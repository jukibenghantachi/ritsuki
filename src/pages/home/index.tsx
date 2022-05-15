import type { NextPage } from 'next';
import Head from 'next/head';

import { Season } from '../../components/home/Season';
import { TopAnime } from '../../components/home/TopAnime';

const Home: NextPage = () => {
  return (
    <div className="bg-background w-full h-full">
      <Head>
        <title>Ritsuki - Anime and Manga Tracker</title>
        <meta
          name="description"
          content="Ritsuki is a tracker anime and manga with modern UI. "
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="flex flex-col gap-14">
        <Season />
        <TopAnime />
      </div>
    </div>
  );
};

export default Home;
