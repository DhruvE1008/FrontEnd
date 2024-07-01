import React, { useState } from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/system';

const SlideshowContainer = styled(Box)({
    margin: 'auto',
    overflow: 'hidden',
    position: 'relative',
    width: '30%',
    textAlign: 'center',
});


const Slides = styled(Box)<{ current : number}>(({current}) => ({
    display: 'flex',
    transition: 'transform 0.5s ease-in-out',
    transform:  `translateX(-${current*100}%)`,
    width: '100%',
    position: 'relative',
}));

const Slide = styled(Box)({
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'center',
    width: '100%',
    minWidth: '100%',
});

const Image = styled('img')({
    width: '80%',
    maxWidth: 200,
    maxHeight: 200,
    margin: 'auto',
  });

const Text = styled(Typography)({
    marginTop: 10,
    fontSize: '1.2em',
    color: '#00',
});

const DotsContainer = styled(Box)({
    textAlign: 'center',
    bottom: 10,
    width: '100%',
});

const Dot = styled('span')<{ active: boolean }>(({ active }) => ({
    height: 15,
    width: 15,
    margin: '0 2px',
    backgroundColor: active ? '#717171' : '#bbb',
    borderRadius: '50%',
    display: 'inline-block',
    transition: 'background-color 0.6s ease',
    cursor: 'pointer',
  }));

  const PrevButton = styled('button')({
    left: 0,
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    zIndex: 1,
  });
  
  const NextButton = styled('button') ({
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    cursor: 'pointer',
    zIndex: 1,
    right: 0,
  });
  
interface SlideshowProps {
    slides: { image: string; text: string }[];
}
  
const Slideshow: React.FC<SlideshowProps> = ({ slides }) => {
    const [current, setCurrentSlide] = useState(0);
    const NextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
      };
    
      const PrevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
      };
    
      const dotClick = (index: number) => {
        setCurrentSlide(index);
      };

    return (
      <SlideshowContainer>
        <PrevButton onClick={PrevSlide}>&lt;</PrevButton>
        <Slides current={current}>
          {slides.map((slide, index) => (
            <Slide key={index}>
                <Image src={slide.image} alt={`Slide ${index}`} />
                <Text>{slide.text}</Text>
            </Slide>
          ))}
        </Slides>
        <NextButton onClick={NextSlide}>&gt;</NextButton>
        <DotsContainer>
          {slides.map((_, index) => (
            <Dot key={index} active={index === current} onClick={() => dotClick(index)} />
          ))}
        </DotsContainer>
      </SlideshowContainer>
    );
  };
  
  export default Slideshow;
  
