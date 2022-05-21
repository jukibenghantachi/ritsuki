import { useEffect, useState } from 'react';

export const useGetSeasons = () => {
  const [season, setSeason] = useState<string>('');
  const date = new Date().getMonth();
  useEffect(() => {
    switch (date) {
      case 0:
      case 1:
      case 2:
        setSeason('Winter Season');
        break;
      case 3:
      case 4:
      case 5:
        setSeason('Spring Season');
        break;
      case 6:
      case 7:
      case 8:
        setSeason('Summer Season');
        break;
      case 9:
      case 10:
      case 11:
        setSeason('Fall Season');
        break;
    }
  }, [date]);
  return season;
};
