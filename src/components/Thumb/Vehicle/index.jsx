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
        className="thumb_vehicle-attr absolute top-[20px] left-[20px] text-[12px] bg-black text-white font-serif py-[10px] px-[12px] antialiased leading-1 select-none"
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
    <footer className="mt-[10px]">
      <span className="block mb-[6px] md:inline-block md:mr-1">
        <img
          className="inline-block w-[18px] h-[18px] mr-0.5"
          src={iconEngine}
          alt="Engine Icon"
        />
        {data.engine}
      </span>

      <span className="inline-block">
        <img
          className="inline-block w-[18px] h-[18px] mr-0.5"
          src={iconGearbox}
          alt="Gearbox Icon"
        />
        {data.gearbox}
      </span>
    </footer>
  );
};

const ThumbVehicle = ({ className = '', data, addMargin }) => {
  const clsMarginTop = addMargin ? ' md:top-[10em]' : '';
  console.log(className);

  return (
    <div className={`thumb_vehicle ${className}`}>
      <figure className={`thumb_vehicle-offset relative${clsMarginTop}`}>
        {image(data.image_path)}
        {attributes(data.attributes)}
        <figcaption className="bg-white pt-[20px] px-[30px] pb-[30px]">
          {header(data)}
          {footer(data)}
        </figcaption>
      </figure>
    </div>
  );
};

export { ThumbVehicle };
