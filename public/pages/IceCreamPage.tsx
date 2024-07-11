import React, {useState} from 'react';
import { Button, Grid, Box } from '@mui/material';
import axios from 'axios';

const IceCreamPage: React.FC = () => {
    const [selectedFlavors, setSelectedFlavors] = useState<number[]>([]);

    const iceCreamFlavours = [
        { id:1, text: 'Vanilla', image: 'images/vanilla.png' },
        { id:2, text: 'Chocolate', image: 'images/chocolate.png' },
        { id:3, text: 'Strawberry', image: 'images/strawberry.png' },
        { id:4, text: 'Hokey Pokey', image: 'images/hokey pokey.png' },
        { id:5, text: 'Butterscotch', image: 'images/butterscotch.png' },
        { id:6, text: 'Cookies and Cream', image: 'images/cookies and cream.png' },
        { id:7, text: 'Bubblegum', image: 'images/Bubblegum.png' },
        { id:8, text: 'Mint', image: 'images/mint.png' },
        { id:9, text: 'Neapolitan', image: 'images/neapolitan.png' },
      ];
      const handleFlavorClick = (flavorId: number) => {
        setSelectedFlavors([...selectedFlavors, flavorId]);
    };

    const handleSubmitOrder = async () => {
        try {
            const response = await axios.post('http://localhost:5227/api/orders', { flavorIds: selectedFlavors });
            alert(`Order placed successfully! Order ID: ${response.data.id}`);
            setSelectedFlavors([]);
        } catch (error) {
            console.error('Error placing order:', error);
        }
    };
    return (
        <div>
            <h1>Select Ice Cream Flavour</h1>
            <h2>There are 9 amazing flavours to choose from</h2>
            <Grid container spacing={2} justifyContent="center">
                {iceCreamFlavours.map((flavour) => (
                    <Grid item xs={4} key={flavour.id}>
                        <Button
                        variant="contained"
                        fullWidth
                        style={{ flexDirection: 'column', padding: '16px', zIndex: -10 }}
                        onClick={() => handleFlavorClick(flavour.id)}
                        >
                            <img
                            src={flavour.image}
                            alt={flavour.text}
                             style={{ width: '60px', height: '60px', marginBottom: '8px' }}
                            />
                            <Box>
                                {flavour.text}
                            </Box>
                        </Button>
                    </Grid>
                ))}
            </Grid>
            <Box textAlign="center" marginTop="20px">
                <Button variant="contained" onClick={handleSubmitOrder}>
                    Submit Order
                </Button>
            </Box>
        </div>
    )
};

export default IceCreamPage;