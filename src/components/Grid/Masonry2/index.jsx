import React, { Children } from 'react';
import { ThumbVehicle } from '@components';

const showrooms = ['Guildford', 'London', 'Worcester'];

const itemStyles = 'md:w-[48.5%]';

// Render introduction text
const introduction = children => {
  if (children) {
    return (
      <div className={`grid_masonry_2-item ${itemStyles}`}>
        {Children.map(children, (child, index) => {
          return child;
        })}
      </div>
    );
  }
};

// Render all vehicle thumbnails
const items = (status, data, hasIntroduction) => {
  switch (status) {
    // Show Vehicle Thumbnail
    case 'complete':
      return data.map((vehicle, index) => {
        data[index].showroom = showrooms[index];
        const isEven = index + 1 + hasIntroduction > 2 ? true : false;
        return (
          <ThumbVehicle
            className={`grid_masonry_2-item ${itemStyles}`}
            data={vehicle}
            addMargin={isEven}
            key={index}
          />
        );
      });

    // Show loading status
    default:
    case 'loading':
      return <div className="loading">Loading...</div>;

    // Catch API loading errors
    case 'error':
      return (
        <div className="error">
          There has been an error. Please refresh the page or try again later.
        </div>
      );
  }
};

const GridMasonry2 = ({ status, data, children }) => {
  const allVehicles = data ? data : false; // Empty data handler
  const hasIntroduction = !!children;

  return (
    <section
      className="
        grid_masonry_2 container p-[32px] mx-auto mt-6.5 grid grid-cols-1 gap-[30px] 
        md:flex md:flex-col md:flex-wrap md:h-[1037px] md:mb-[345px]
        lg:h-[1221px] 
        xl:h-[1410px]
        2xl:h-[1592px]
      "
    >
      {introduction(children)}
      {items(status, allVehicles, hasIntroduction)}
    </section>
  );
};

export { GridMasonry2 };
