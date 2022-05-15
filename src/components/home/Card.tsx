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
            <p className="font-bold text-orange-600">{name}</p>
          </div>
        </div>
        <p className="font-medium text-slate-600 text-sm hover:rounded-md hover:bg-slate-100/80 py-1 px-3 cursor-pointer">
          See All
        </p>
      </div>
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="flex overflow-x-auto gap-5 justify-between">
          {data?.data.map((res: Data, id: Key) => (
            <div key={id}>
              <img
                src={res.images.webp.large_image_url}
                className="rounded-lg w-56 h-80 object-cover"
              />
              <div className="flex flex-col gap-1 mt-2 w-56 mb-3">
                <p className="text-slate-700 text-sm font-bold truncate">
                  {res.title}
                </p>
                <p className="text-slate-700 text-xs truncate">
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
