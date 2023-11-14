import './style.scss';
import React, { Children } from 'react';
import { ThumbVehicle } from '@components';

const showrooms = ['Guildford', 'London', 'Worcester'];

// Render introduction text
const introduction = children => {
  if (children) {
    return (
      <div
        className={`grid_masonry_2-item`}
        data-item-index="0"
      >
        {Children.map(children, (child, index) => {
          return child;
        })}
      </div>
    );
  }
};

// Render all vehicle thumbnails
const items = (status, data, hasIntroduction, handleLiked) => {
  switch (status) {
    // Show Vehicle Thumbnail
    case 'complete':
      return data.map((vehicle, index) => {
        data[index].showroom = showrooms[index];
        const itemIndex = index + hasIntroduction;

        return (
          <ThumbVehicle
            className={`grid_masonry_2-item`}
            data={vehicle}
            key={index}
            itemIndex={itemIndex}
            handleLiked={handleLiked}
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

const showMoreBtn = show => {
  if (show) {
    return (
      <div className={`grid_masonry_2-item grid_masonry_2-more text--center`}>
        <button className="btn btn--lg">View all cars</button>
      </div>
    );
  }
};

const GridMasonry2 = ({ status, data, showMore, children, handleLiked }) => {
  const allVehicles = data ? data : false; // Empty data handler
  const hasIntroduction = !!children;

  return (
    <section className="grid_masonry_2">
      <div className="container">
        {introduction(children)}
        {items(status, allVehicles, hasIntroduction, handleLiked)}
        {showMoreBtn(showMore)}
      </div>
    </section>
  );
};

export { GridMasonry2 };
