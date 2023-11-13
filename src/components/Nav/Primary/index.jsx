import './style.scss';
import React from 'react';
import { ImageLogo, ImageMenu, ImageHeartUnfilled } from './Images';

const NavPrimary = () => {
  return (
    <nav className="nav_primary">
      {/* Logo */}
      <div className="nav_primary-logo">
        <a href="/">
          <ImageLogo />
        </a>
      </div>

      {/* Menu Icon */}
      <div className="nav_primary-menu">
        <button
          className="nav_primary-menu_btn"
          aria-label="Menu"
        >
          <ImageMenu />
        </button>
      </div>

      {/* Menu List */}
      <ul className="nav_primary-list">
        <li className="nav_primary-list_item nav_primary-list_item_left">
          <button
            className="nav_primary-about"
            aria-label="About Us"
          >
            About Us
          </button>
          <button
            className="nav_primary-liked"
            aria-label="Liked Products"
          >
            <ImageHeartUnfilled />
          </button>
        </li>

        <li className="nav_primary-list_item">
          <button
            className="btn btn--gold"
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
