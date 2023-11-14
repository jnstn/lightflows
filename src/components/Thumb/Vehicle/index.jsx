import './style.scss';
import React from 'react';
import iconEngine from '@images/icon-engine.svg';
import iconGearbox from '@images/icon-gear.svg';
import carBlue from '@images/car-blue.jpg';
import carSilver from '@images/car-silver.jpg';
import carRed from '@images/car-red.jpg';

const getFileName = path => {
  const splitUrl = path.split('/');
  const fileName = splitUrl[splitUrl.length - 1];

  return fileName;
};

const image = data => {
  const fileName = getFileName(data);
  let imgSrc, imgAlt;

  switch (fileName) {
    default:
    case 'car-blue.jpg':
      imgSrc = carBlue;
      imgAlt = 'Blue Porsche 911 GT3 in a clean, well lit garage';
      break;

    case 'car-silver.jpg':
      imgSrc = carSilver;
      imgAlt = 'Silver Porsche Cayman GT4 in a clean, well lit garage';
      break;

    case 'car-red.jpg':
      imgSrc = carRed;
      imgAlt = 'Red Porsche 911 Targa in a clean, well lit garage';
      break;
  }
  return (
    <img
      src={imgSrc}
      alt={imgAlt}
    />
  );
};

const attributes = array => {
  return array.map((attr, index) => {
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

const header = data => {
  return (
    <header>
      <h2>{data.name}</h2>
      <h3>{`${data.showroom} Showroom`}</h3>
    </header>
  );
};

const footer = data => {
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

const ThumbVehicle = ({ className = '', data, addMargin, itemIndex }) => {
  const clsMarginTop = addMargin ? ' md:top-[10em]' : '';

  return (
    <div
      className={`thumb_vehicle ${className}`}
      data-item-index={itemIndex}
    >
      <figure className={`thumb_vehicle-offset${clsMarginTop}`}>
        {image(data.image_path)}
        {attributes(data.attributes)}
        <figcaption className="thumb_vehicle-info">
          {header(data)}
          {footer(data)}
        </figcaption>
      </figure>
    </div>
  );
};

export { ThumbVehicle };
