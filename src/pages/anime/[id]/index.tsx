import { NextPage } from 'next/types';
import { useQueryPage } from '../../../hooks/useQueryPage';

const AnimeDetail: NextPage = () => {
  const { id } = useQueryPage();

  return <p>Detail</p>;
};

export default AnimeDetail;
