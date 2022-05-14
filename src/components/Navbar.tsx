import { FC, ReactNode } from 'react';

type NavbarProps = {
  children: ReactNode;
};

export const Navbar: FC<NavbarProps> = ({ children }) => {
  return (
    <div className="flex flex-col gap-5 container ">
      <div className="flex items-center justify-between top-0 fixed bg-white py-4 px-44 w-full z-50 border border-slate-300">
        <div>
          <p>Ritsuki</p>
        </div>
        <div>
          <ul className="flex gap-7">
            <li>Home</li>
            <li>Home</li>
          </ul>
        </div>
      </div>
      <div className="mt-20 mx-44">{children}</div>
    </div>
  );
};
