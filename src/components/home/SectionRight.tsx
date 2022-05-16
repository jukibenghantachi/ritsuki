import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, Key } from 'react';
import { UseQueryResult } from 'react-query';
import { Recommendation } from '../../types';

type SectionRightProps = {
  name: string;
  logo: IconProp;
  query: UseQueryResult<Recommendation, unknown>;
};

export const SectionRight: FC<SectionRightProps> = ({ name, logo, query }) => {
  const { data, isLoading } = query;

  return (
    <div className="flex flex-col gap-5">
      <div className="rounded-lg bg-white py-2 px-5">
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
      {isLoading ? (
        <p>Loading</p>
      ) : (
        <div className="flex flex-col gap-5">
          {data?.data.slice(0, 5).map((res, id: Key) => (
            <div key={id} className="flex flex-col gap-5">
              {res.entry.map((e, i: Key) => (
                <div key={i} className="flex w-full items-center gap-2">
                  <img
                    src={e.images.webp.large_image_url}
                    className="h-14 w-14 flex-shrink-0 rounded-full object-cover"
                  />
                  <div className="w-[calc(100%-4rem)]">
                    <p className="truncate text-sm font-bold text-slate-700">
                      {e.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
