import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';
import { FC, Key, ReactNode } from 'react';

type NavbarProps = {
  children: ReactNode;
};

export const Navbar: FC<NavbarProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-5 font-medium">
      <div className="fixed top-0 z-50 flex w-full items-center justify-between border-b border-slate-300 bg-white py-4 px-40">
        <div className="flex items-center gap-5">
          <p className="text-xl font-bold text-orange-600">Ritsuki</p>
          <ul className="flex items-center gap-1">
            {['Home', 'Gallery', 'Random', 'About'].map(
              (list: string, id: Key) => (
                <Link href={'/' + list.toLowerCase()}>
                  <li
                    key={id}
                    className="cursor-pointer py-1 px-3 text-sm text-gray-700 hover:rounded-md hover:bg-slate-100/80">
                    {list}
                  </li>
                </Link>
              )
            )}
          </ul>
        </div>
        <div className="relative">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            width={17}
            height={17}
            color="#475569"
            className="absolute top-1/2 left-3 -translate-y-1/2"
          />
          <input
            className="rounded-lg bg-slate-100/80 py-2 pl-9 pr-3 text-sm font-medium text-slate-600 placeholder-slate-600"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="h-full bg-background py-[69px] px-40">{children}</div>
    </div>
  );
};
