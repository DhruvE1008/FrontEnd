import React from 'react';
import { Button, Grid, Box } from '@mui/material';

const PopsiclePage: React.FC = () => {
    const buttons = [
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
            <h1>Select Popsicle Flavour</h1>
            <h2>There are 9 amazing flavours to choose from</h2>
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

export default PopsiclePage;