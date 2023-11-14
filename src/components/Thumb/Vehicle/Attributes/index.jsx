import './style.scss';
import React from 'react';

const ThumbVehicleAttributes = ({ data }) => {
  return data.map((attr, index) => {
    return (
      <span
        key={index}
        className="thumb_vehicle-attr"
      >
        {attr}
      </span>
    );
  });
};

export { ThumbVehicleAttributes };
