import './style.scss';
import React, { useState } from 'react';
import { ThumbVehicleLikeAnimation } from './Animation';

const ThumbVehicleLike = ({ itemIndex, handleLiked }) => {
  const [liked, setLiked] = useState(false);
  const [animInit, setAnimInit] = useState(false);
  const activeCls = liked ? 'active' : 'inactive';
  const animDur = 600;

  const handleAnim = () => {
    // Update state to initialise heart animation
    setAnimInit(true);

    // Timmer to update state and remove heart animation elements
    setTimeout(() => setAnimInit(false), animDur);
  };

  const handleClick = () => {
    if (liked) {
      // Set the current component state
      setLiked(false);

      // Remove itemIndex from the global array of Liked items
      handleLiked('remove', itemIndex);
    }
    if (!liked) {
      // Set the current component state
      setLiked(true);

      // Add itemIndex to the global array of Liked items
      handleLiked('add', itemIndex);

      // Initialise Heart animation
      handleAnim();
    }
  };

  return (
    <>
      <ThumbVehicleLikeAnimation
        init={animInit}
        duration={animDur}
      />
      <button
        className={`thumb_vehicle-like ${activeCls}`}
        onClick={handleClick}
      >
        <svg
          width="14px"
          height="12px"
          viewBox="0 0 14 12"
          version="1.1"
          xmlns="http://www.w3.org/2000/svg"
        >
          <title>icon-heart-unfilled</title>
          <g
            id="Design"
            stroke="none"
            strokeWidth="1"
            fill="none"
            fillRule="evenodd"
          >
            <g
              id="icon-heart-unfilled"
              fillRule="nonzero"
              stroke="#000000"
            >
              <path
                d="M10.0216338,0.5 C10.9516527,0.5 11.7500482,0.831777162 12.4196808,1.49556558 C12.7631899,1.8320769 13.0270238,2.21933276 13.2112915,2.65884042 C13.4039874,3.11503541 13.5,3.59487236 13.5,4.09821429 C13.5,4.64697676 13.3844273,5.16452322 13.1523244,5.65063465 C12.9205642,6.13602813 12.5970082,6.54714654 12.1814212,6.88380422 C11.8151098,7.2133695 10.9225624,8.01189109 9.48340553,9.29680798 C8.39213953,10.2719416 7.64395327,10.9402102 7.23866757,11.3015031 C6.23090817,10.8567105 5.15261525,9.86563951 3.4774717,8.35875033 C2.56879259,7.54950663 2.05009948,7.09105789 1.92062204,6.98234018 C1.39955757,6.54707301 1.07686095,6.13587701 0.850418968,5.64864536 C0.624910616,5.16342257 0.508524144,4.64855044 0.500460199,4.10350666 C0.492497356,3.61206698 0.588504661,3.1363511 0.789752091,2.67100279 C0.973502024,2.23272562 1.23733591,1.84546975 1.58502264,1.50481745 C2.25197132,0.835899184 3.04953319,0.5 3.97889202,0.5 C4.4865874,0.5 4.96853595,0.608682432 5.42468446,0.826281942 C5.8844087,1.04558721 6.28178879,1.35539335 6.61753391,1.75477865 C6.76393059,1.92892467 6.89153542,2.11168794 7.00030844,2.30303284 C7.10902612,2.11163677 7.23661572,1.9289003 7.38299191,1.75477865 C7.71873703,1.35539335 8.11611712,1.04558721 8.57584136,0.826281942 C9.03198987,0.608682432 9.51393843,0.5 10.0216338,0.5 Z"
                id="icon"
              ></path>
            </g>
          </g>
        </svg>
      </button>
    </>
  );
};

export { ThumbVehicleLike };
