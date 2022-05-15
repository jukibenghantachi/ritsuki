import { faCalendarDays } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, Key } from 'react';
import { Data, DataAnime } from '../../types';

type CardProps = {
  name: string;
  data: DataAnime | undefined;
  isLoading: boolean;
};

export const Card: FC<CardProps> = ({ name, data, isLoading }) => {
  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between rounded-lg bg-white py-2 px-5">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 place-content-center items-center rounded-md bg-orange-600">
              <FontAwesomeIcon
                icon={faCalendarDays}
                width={20}
                height={20}
                color="#FFFFFF"
              />
            </div>
            <p className="font-bold text-orange-600">{name}</p>
          </div>
        </div>
        <p className="cursor-pointer py-1 px-3 text-sm font-medium text-slate-600 hover:rounded-md hover:bg-slate-100/80">
          See All
        </p>
      </div>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="flex justify-between gap-5 overflow-x-auto">
          {data?.data.map((res: Data, id: Key) => (
            <div key={id}>
              <img
                src={res.images.webp.large_image_url}
                className="h-80 w-56 rounded-lg object-cover"
              />
              <div className="mt-2 mb-3 flex w-56 flex-col gap-1">
                <p className="truncate text-sm font-bold text-slate-700">
                  {res.title}
                </p>
                <p className="truncate text-xs text-slate-700">
                  {res.genres.map((m) => m.name).toString()}
                </p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
