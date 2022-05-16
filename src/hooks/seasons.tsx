import { useEffect, useState } from 'react';

export const useGetSeasons = () => {
  const [season, setSeason] = useState<string>('');
  const date = new Date().getMonth();
  useEffect(() => {
    switch (date) {
      case 0:
      case 1:
      case 2:
        setSeason('Winter');
        break;
      case 3:
      case 4:
      case 5:
        setSeason('Spring');
        break;
      case 6:
      case 7:
      case 8:
        setSeason('Summer');
        break;
      case 9:
      case 10:
      case 11:
        setSeason('Fall');
        break;
    }
  }, [date]);
  return season;
};
