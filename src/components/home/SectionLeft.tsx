import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, Key } from 'react';
import { UseQueryResult } from 'react-query';
import { Data, DataAnime } from '../../types';

type SectionLeftProps = {
  name: string;
  logo: IconProp;
  query: UseQueryResult<DataAnime, unknown>;
};

export const SectionLeft: FC<SectionLeftProps> = ({ name, logo, query }) => {
  const { data, isLoading } = query;

  return (
    <div className="flex flex-col gap-5">
      <div className="flex items-center justify-between rounded-lg bg-white py-2 px-5">
        <div>
          <div className="flex items-center gap-2">
            <div className="flex h-9 w-9 place-content-center items-center rounded-md bg-orange-600">
              <FontAwesomeIcon
                icon={logo}
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
        <div className="flex justify-between flex-wrap gap-2">
          {data?.data.map((res: Data, id: Key) => (
            <div key={id}>
              <img
                src={res.images.webp.large_image_url}
                className="h-52 w-36 rounded-lg object-cover"
              />
              <div className="mt-2 mb-3 flex w-36 flex-col gap-1">
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
