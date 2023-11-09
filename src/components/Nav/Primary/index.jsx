import React from 'react';
import { ImageLogo, ImageMenu, ImageHeartUnfilled } from './Images';

const NavPrimary = () => {
  return (
    <nav className="nav_primary flex items-center justify-between flex-nowrap gap-x-6 p-[33px] lg:py-[48px] lg:px-[40px] sticky top-0 bg-white">
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
            className="block mt-4 lg:inline-block lg:mt-0 text-platinum hover:text-gold mr-4"
            aria-label="About Us"
          >
            About Us
          </button>
          <button
            className="inline-block rounded-full p-2 bg-grey mr-4"
            aria-label="Liked Products"
          >
            <ImageHeartUnfilled />
          </button>
        </li>

        <li className="nav_primary-list_item">
          <button
            className="inline-block text-sm px-4 py-2 leading-none border text-gold border-gold hover:border-transparent hover:text-white hover:bg-gold mt-4 lg:mt-0"
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
