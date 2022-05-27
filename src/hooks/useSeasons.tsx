import { useMemo } from 'react';

export const useSeasons = () => {
  const date = new Date().getMonth();
  const season = useMemo<string | undefined>(() => {
    switch (date) {
      case 0:
      case 1:
      case 2:
        return 'Winter Season';
      case 3:
      case 4:
      case 5:
        return 'Spring Season';
      case 6:
      case 7:
      case 8:
        return 'Summer Season';
      case 9:
      case 10:
      case 11:
        return 'Fall Season';
    }
  }, [date]);
  return season;
};
