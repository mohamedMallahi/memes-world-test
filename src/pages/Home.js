import React, { useState, useEffect } from 'react';
import TinderCard from 'react-tinder-card';
import './Home.css';

const Home = () => {
  const images = [
    'https://firebasestorage.googleapis.com/v0/b/memes-world-9d360.appspot.com/o/5064a47c-b32f-4945-8d16-138eed3f3cc4.jpg?alt=media&token=cc94169f-71c8-4a57-9d66-49e5ed824e05',
    'https://firebasestorage.googleapis.com/v0/b/memes-world-9d360.appspot.com/o/090cd433-2336-4028-a248-aaec98d630ed.jpg?alt=media&token=d2ff1c71-dae7-4155-b160-06b2446944a9',
    'https://firebasestorage.googleapis.com/v0/b/memes-world-9d360.appspot.com/o/70007507-a5d2-4ab0-abc2-8930cb7768ae.jpg?alt=media&token=86940c32-c07e-4c94-834f-18043b2e8ce9',
    'https://firebasestorage.googleapis.com/v0/b/memes-world-9d360.appspot.com/o/FB_IMG_16142096402082422.jpg?alt=media&token=33f78456-bf61-4751-9104-60d4b5da5915',
    'https://firebasestorage.googleapis.com/v0/b/memes-world-9d360.appspot.com/o/FB_IMG_16144508857435195.jpg?alt=media&token=c316ae39-f4cf-4b32-8d7b-58e6e0a84660',
    'https://firebasestorage.googleapis.com/v0/b/memes-world-9d360.appspot.com/o/d9a02033-bf8c-49f1-9243-1d679f1cec82.jpg?alt=media&token=36cf5198-34a1-4468-9461-c79496b59e94',
    'https://firebasestorage.googleapis.com/v0/b/memes-world-9d360.appspot.com/o/f7f9d870609d2e8ae565d3a96656fd5b.jpg?alt=media&token=8d5e1ed2-9314-4166-83fc-d555f7571f22',
  ];

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
