import 'normalize.css';
import '../styles/global.scss';
import React, { useState, useEffect } from 'react';
import { GridMasonry2, NavPrimary } from '@components';

// Get data from the API to feed in to <GridMasonry2/>
const carsApi = 'https://products.lfdev.co/api/cars';

// IndexPage component: This functional component represents the main page of the application.
const IndexPage = () => {
  const [carsData, setCarsData] = useState('none');
  const [likedVehicles, setLikedVehicles] = useState([]);

  // Store the list of liked vehicles
  // This should update the Liked button in the navigation
  const handleLiked = (action, id) => {
    if (action === 'add') {
      setLikedVehicles([...likedVehicles, id]);
    }
    if (action === 'remove') {
      setLikedVehicles(likedVehicles.filter(entry => entry !== id));
    }
  };

  useEffect(() => {
    // Get API Data
    const getApiData = async () => {
      setCarsData({ status: 'loading' });
      try {
        const response = await fetch(carsApi);
        let result = await response.json();
        result = [result.data[1], result.data[0], result.data[2]]; // arrange data to match design
        setCarsData({
          status: 'complete',
          response: result,
        });
      } catch (error) {
        console.error(`Download error: ${error.message}`);
        setCarsData({ status: 'error' });
      }
    };
    getApiData();
  }, []);

  return (
    <>
      <NavPrimary hasLikedVehicles={likedVehicles} />
      <main>
        <GridMasonry2
          data={carsData.response}
          status={carsData.status}
          showMore={true}
          handleLiked={handleLiked}
        >
          {/* Introduction Grid Element */}
          <h1>Vehicles</h1>
          <div className="content_container">
            <p>
              Welcome to Prestige Porsche, a beacon of luxury and dynamism in
              the automotive world. As the authorised Porsche dealers, we are
              proud to uphold a 25-year legacy of guiding discerning enthusiasts
              to the pinnacle of German engineering.
            </p>
            <p>
              At Prestige Porsche, we don't just sell cars; we deliver the
              Porsche promise of exhilarating driving pleasure, underpinned by a
              heritage of trust and an unwavering dedication to excellence.
            </p>
          </div>
        </GridMasonry2>
      </main>
    </>
  );
};

export default IndexPage;

// Head component: This functional component sets the title of the HTML document.
export const Head = () => <title>Home Page</title>;
