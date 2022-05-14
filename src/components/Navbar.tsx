import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { FC, Key, ReactNode } from 'react';

type NavbarProps = {
  children: ReactNode;
};

export const Navbar: FC<NavbarProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-5 font-medium">
      <div className="flex items-center justify-between top-0 fixed bg-white py-4 px-40 w-full z-50 border border-slate-300">
        <div className="flex items-center gap-5">
          <p className="text-xl text-orange-600 font-bold">Ritsuki</p>
          <ul className="flex items-center gap-1">
            {['Home', 'Gallery', 'Random', 'About'].map((r: string, i: Key) => (
              <li
                key={i}
                className="text-gray-700 text-sm hover:rounded-md hover:bg-slate-100/80 py-1 px-3 cursor-pointer"
              >
                {r}
              </li>
            ))}
          </ul>
        </div>
        <div className="relative">
          <FontAwesomeIcon
            icon={faMagnifyingGlass}
            color="#475569"
            className="absolute top-1/2 -translate-y-1/2 left-3"
          />
          <input
            className="py-2 pl-9 pr-3 text-sm font-medium bg-slate-100/80 rounded-lg text-slate-600 placeholder-slate-600"
            placeholder="Search..."
          />
        </div>
      </div>
      <div className="py-20 px-40 h-full bg-background">{children}</div>
    </div>
  );
};
