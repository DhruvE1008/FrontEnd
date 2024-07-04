import React from 'react';
import Slideshow from './Embedded-Slideshow';

const HomePage: React.FC = () => {
    const slides = [
        {
          image: 'images/all .png',
          text: 'All Options',
          link: '/all',
        },
        {
          image: 'images/ice cream option.png',
          text: 'Ice Cream Options',
          link: '/iceCream',
        },
        {
          image: 'images/popsicle.png',
          text: 'Popsicle Options',
          link: '/popsicle',
        },
        {
          image: 'images/ice cream sandwich.png',
          text: 'Ice Cream Sandwich Options',
          link: '/sandwich',
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

export default HomePage;