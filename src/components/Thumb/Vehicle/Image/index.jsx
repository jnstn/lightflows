import React from 'react';
import carBlue from '@images/car-blue.jpg';
import carSilver from '@images/car-silver.jpg';
import carRed from '@images/car-red.jpg';

const getFileName = path => {
  const splitUrl = path.split('/');
  const fileName = splitUrl[splitUrl.length - 1];
  return fileName;
};

const ThumbVehicleImage = ({ path }) => {
  const fileName = getFileName(path);
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

export { ThumbVehicleImage };
