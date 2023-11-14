import './style.scss';
import React from 'react';
import iconEngine from '@images/icon-engine.svg';
import iconGearbox from '@images/icon-gear.svg';

const ThumbVehicleFooter = ({ data }) => {
  return (
    <footer className="thumb_vehicle-footer">
      <div className="thumb_vehicle-stat thumb_vehicle-engine">
        <img
          className="thumb_vehicle-footer_icon"
          src={iconEngine}
          alt="Engine Icon"
        />
        {data.engine}
      </div>

      <div className="thumb_vehicle-stat thumb_vehicle-gearbox">
        <img
          className="thumb_vehicle-footer_icon"
          src={iconGearbox}
          alt="Gearbox Icon"
        />
        {data.gearbox}
      </div>
    </footer>
  );
};

export { ThumbVehicleFooter };
