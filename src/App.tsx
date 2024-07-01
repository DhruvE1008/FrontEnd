import React from 'react';
import Slideshow from './Embedded-Slideshow';

const App: React.FC = () => {
  const slides = [
    {
      image: 'images/all .png',
      text: 'All Options',
    },
    {
      image: 'images/ice cream option.png',
      text: 'Ice Cream Options',
    },
    {
      image: 'images/popsicle.png',
      text: 'Popsicle Options',
    },
    {
      image: 'images/ice cream sandwich.png',
      text: 'Ice Cream Sandwich Options',
    },
  ];

  return (
    <div>
      <div style={{textAlign: 'center'}}>
        <h1>Explore our Range</h1>
      </div>
      <Slideshow slides ={slides} />
    </div>
  );
};

export default App;
