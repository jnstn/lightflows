import './style.scss';
import React from 'react';

const ThumbVehicleHeader = ({ data }) => {
  return (
    <header className="thumb_vehicle-header">
      <h2>{data.name}</h2>
      <h3>{`${data.showroom} Showroom`}</h3>
    </header>
  );
};

export { ThumbVehicleHeader };
