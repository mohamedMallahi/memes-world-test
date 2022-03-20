import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './Home.css';

const Home = () => {
  const images = [];

  const swiped = (direction, id) => {
    console.log('Removing', id);
    setLastDirection(direction);
  };

  const outOfFrame = () => {
    console.log(index, 'left the screen');
  };

  return (
    <div>
      <div className="tinderCards__cardContainer">
        {images.map((image, index) => (
          <TinderCard
            className="swipe"
            key={index}
            preventSwipe={['up', 'down']}
          >
            <div style={{ backgroundImage: `url(${image})` }} className="card">
              <h3>Meme number {index}</h3>
            </div>
          </TinderCard>
        ))}
      </div>
    </div>
  );
};

export default Home;
