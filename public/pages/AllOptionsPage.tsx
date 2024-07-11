import React, {useState} from 'react';
import { Button, Grid, Box } from '@mui/material';
import axios from 'axios';

const AllOptionsPage: React.FC = () => {
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
      const popsicleFlavours = [
        { id:10, text: 'Lemonade', image: 'images/lemon.png' },
        { id:11, text: 'Apple', image: 'images/apple.png' },
        { id:12, text: 'Orange', image: 'images/orange.png' },
        { id:13, text: 'Pineapple', image: 'images/pineapple.png' },
        { id:14, text: 'Raspberry', image: 'images/raspberry.png' },
        { id:15, text: 'Mango', image: 'images/mango.png' },
        { id:16, text: 'Banana', image: 'images/banana.png' },
        { id:17, text: 'Grape', image: 'images/grape.png' },
        { id:18, text: 'Kiwifruit', image: 'images/popolato.png' },
      ];
      const iceCreamSandwichFlavours = [
        { id:19, text: 'Vanilla', image: 'images/vanilla.png' },
        { id:20, text: 'Chocolate', image: 'images/chocolate.png' },
        { id:21, text: 'Strawberry', image: 'images/strawberry.png' },
        { id:22, text: 'Hokey Pokey', image: 'images/hokey pokey.png' },
        { id:23, text: 'Butterscotch', image: 'images/butterscotch.png' },
        { id:24, text: 'Cookies and Cream', image: 'images/cookies and cream.png' },
        { id:25, text: 'Bubblegum', image: 'images/Bubblegum.png' },
        { id:26, text: 'Mint', image: 'images/mint.png' },
        { id:27, text: 'Neapolitan', image: 'images/neapolitan.png' },
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
            <h1>Ice Cream Flavours</h1>
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
            <h1>Popsicle Flavours</h1>
            <Grid container spacing={2} justifyContent="center">
                {popsicleFlavours.map((flavour) => (
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
            <h1>Ice Cream Sandwich Flavours</h1>
            <Grid container spacing={2} justifyContent="center">
                {iceCreamSandwichFlavours.map((flavour) => (
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

export default AllOptionsPage;