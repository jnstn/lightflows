import './style.scss';
import React from 'react';
import { ImageLogo, ImageMenu, ImageHeartUnfilled } from './Images';

const NavPrimary = ({ hasLikedVehicles }) => {
  const likedActiveCls = hasLikedVehicles.length > 0 ? 'active' : 'inactive';

  return (
    <nav className="nav_primary">
      {/* Logo */}
      <div className="nav_primary-logo">
        <a href="/">
          <ImageLogo />
        </a>
      </div>

      <div className="nav_primary-about_us">
        <button
          className="nav_primary-about"
          aria-label="About Us"
        >
          About Us
        </button>
      </div>

      <div className={`nav_primary-btn_like ${likedActiveCls}`}>
        <button
          className="nav_primary-liked"
          aria-label="Liked Products"
        >
          <ImageHeartUnfilled />
        </button>
      </div>

      <div className="nav_primary-contact">
        <button
          className="btn btn--gold"
          aria-label="Contact Sales"
        >
          Contact Sales
        </button>
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
    </nav>
  );
};

export { NavPrimary };
