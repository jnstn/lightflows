import './style.scss';
import React from 'react';
import { ThumbVehicleImage } from './Image';
import { ThumbVehicleAttributes } from './Attributes';
import { ThumbVehicleLike } from './Like';
import { ThumbVehicleHeader } from './Header';
import { ThumbVehicleFooter } from './Footer';

const ThumbVehicle = ({ className = '', data, addMargin, itemIndex }) => {
  return (
    <figure
      className={`thumb_vehicle ${className}`}
      data-item-index={itemIndex}
    >
      <ThumbVehicleImage path={data.image_path} />
      <ThumbVehicleAttributes data={data.attributes} />
      <ThumbVehicleLike itemIndex={itemIndex} />
      <figcaption className="thumb_vehicle-info">
        <ThumbVehicleHeader data={data} />
        <ThumbVehicleFooter data={data} />
      </figcaption>
    </figure>
  );
};

export { ThumbVehicle };
