import React from 'react';
import { Button, Grid, Box } from '@mui/material';

const AllOptionsPage: React.FC = () => {
    const buttons = [
        { text: 'Vanilla', image: 'images/vanilla.png' },
        { text: 'Chocolate', image: 'images/chocolate.png' },
        { text: 'Strawberry', image: 'images/strawberry.png' },
        { text: 'Hokey Pokey', image: 'images/hokey pokey.png' },
        { text: 'Butterscotch', image: 'images/butterscotch.png' },
        { text: 'Cookies and Cream', image: 'images/cookies and cream.png' },
        { text: 'Bubblegum', image: 'images/Bubblegum.png' },
        { text: 'Mint', image: 'images/mint.png' },
        { text: 'Neapolitan', image: 'images/neapolitan.png' },
      ];
      const popbuttons = [
        { text: 'Lemonade', image: 'images/lemon.png' },
        { text: 'Apple', image: 'images/apple.png' },
        { text: 'Orange', image: 'images/orange.png' },
        { text: 'Pineapple', image: 'images/pineapple.png' },
        { text: 'Raspberry', image: 'images/raspberry.png' },
        { text: 'Mango', image: 'images/mango.png' },
        { text: 'Banana', image: 'images/banana.png' },
        { text: 'Grape', image: 'images/grape.png' },
        { text: 'Kiwifruit', image: 'images/popolato.png' },
      ];
    return (
        <div>
            <h1>Ice Cream Flavours</h1>
            <Grid container spacing={2} justifyContent="center">
                {buttons.map((btn, index) => (
                    <Grid item xs={4} key={index}>
                        <Button
                        variant="contained"
                        fullWidth
                        style={{ flexDirection: 'column', padding: '16px', zIndex: -10 }}
                        >
                            <img
                            src={btn.image}
                            alt={btn.text}
                             style={{ width: '60px', height: '60px', marginBottom: '8px' }}
                            />
                            <Box>
                                {btn.text}
                            </Box>
                        </Button>
                    </Grid>
                ))}
            </Grid>
            <h1>Popsicle Flavours</h1>
            <Grid container spacing={2} justifyContent="center">
                {popbuttons.map((btn, index) => (
                    <Grid item xs={4} key={index}>
                        <Button
                        variant="contained"
                        fullWidth
                        style={{ flexDirection: 'column', padding: '16px', zIndex: -10 }}
                        >
                            <img
                            src={btn.image}
                            alt={btn.text}
                             style={{ width: '60px', height: '60px', marginBottom: '8px' }}
                            />
                            <Box>
                                {btn.text}
                            </Box>
                        </Button>
                    </Grid>
                ))}
            </Grid>
            <h1>Ice Cream Sandwich Flavours</h1>
            <Grid container spacing={2} justifyContent="center">
                {buttons.map((btn, index) => (
                    <Grid item xs={4} key={index}>
                        <Button
                        variant="contained"
                        fullWidth
                        style={{ flexDirection: 'column', padding: '16px', zIndex: -10 }}
                        >
                            <img
                            src={btn.image}
                            alt={btn.text}
                             style={{ width: '60px', height: '60px', marginBottom: '8px' }}
                            />
                            <Box>
                                {btn.text}
                            </Box>
                        </Button>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
};

export default AllOptionsPage;