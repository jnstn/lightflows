import React from 'react';
import { ImageLogo, ImageMenu, ImageHeartUnfilled } from './Images';

const NavPrimary = () => {
  return (
    <nav className="nav_primary flex items-center justify-between flex-nowrap gap-x-6 p-2 lg:py-3 lg:px-2.5 sticky top-0 bg-white">
      {/* Logo */}
      <div className="nav_primary-logo flex items-center text-white w-full max-w-[250px] h-[auto]">
        <a href="/">
          <ImageLogo />
        </a>
      </div>

      {/* Menu Icon */}
      <div className="nav_primary-menu block lg:hidden">
        <button
          className="flex items-center text-platinum hover:text-gold"
          aria-label="Menu"
        >
          <ImageMenu />
        </button>
      </div>

      {/* Menu List */}
      <ul className="nav_primary-list w-full hidden flex-grow lg:flex lg:items-center lg:w-auto">
        <li className="nav_primary-list_item text-sm lg:flex-grow text-end">
          <button
            className="block mt-1 lg:inline-block lg:mt-0 text-platinum hover:text-gold mr-1"
            aria-label="About Us"
          >
            About Us
          </button>
          <button
            className="inline-block rounded-full p-1 bg-grey mr-1"
            aria-label="Liked Products"
          >
            <ImageHeartUnfilled />
          </button>
        </li>

        <li className="nav_primary-list_item">
          <button
            className="inline-block text-sm px-1 py-1 leading-none border text-gold border-gold hover:border-transparent hover:text-white hover:bg-gold"
            aria-label="Contact Sales"
          >
            Contact Sales
          </button>
        </li>
      </ul>
    </nav>
  );
};

export { NavPrimary };
