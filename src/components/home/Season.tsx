import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC } from 'react';

export const Season: FC = () => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between py-2 px-5 bg-white rounded-lg">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex bg-orange-600 rounded-md h-9 w-9 place-content-center items-center">
              <FontAwesomeIcon
                icon={faCalendarDays}
                width={20}
                height={20}
                color="#FFFFFF"
              />
            </div>
            <p className="font-bold text-orange-600">Spring Season</p>
          </div>
        </div>
        <p className="font-medium text-slate-600 text-sm hover:rounded-md hover:bg-slate-100/80 py-1 px-3 cursor-pointer">
          See All
        </p>
      </div>
      <div className="flex flex-wrap">
        <div className="relative">
          <img
            src="https://cdn.myanimelist.net/images/anime/1179/119897.jpg"
            className="rounded-lg"
          />
          <div className="absolute bottom-0 px-2 py-3 w-full bg-slate-100/95 text-sm">
            <p className="text-orange-600 font-bold text-lg truncate">
              Sono Bisque
            </p>
            <p className="text-slate-700 text-xs font-medium">
              Romance, School
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
