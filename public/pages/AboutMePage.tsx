import React from 'react';  
import { Box, Typography } from '@mui/material';

const AboutMePage: React.FC = () => {
    return (
        <div>
            <h1>About Me Section</h1>
            <h2>This is a project that I had to make that was a full stack web application</h2>
            <h1>References</h1>
        <Box textAlign="center" marginTop={4}>
            <img src={'images/ice cream copy.jpg'} alt={'ice cream sandwich'} style={{ width: '80%', maxWidth: 400, margin: 'auto' }} />
            <Typography variant="caption" display="block" marginTop={2}>
                <em>{'File:2020-03-26 05 54 41 A Good Humor Giant Vanilla Ice Cream Sandwich in the Franklin Farm section of Oak Hill, Fairfax County, Virginia.jpg'}</em> by <a href={'https://commons.wikimedia.org/wiki/File:2020-03-26_05_54_41_A_Good_Humor_Giant_Vanilla_Ice_Cream_Sandwich_in_the_Franklin_Farm_section_of_Oak_Hill,_Fairfax_County,_Virginia.jpg'} target="_blank" rel="noopener noreferrer">{'Famartin'}</a>
            </Typography>
        </Box>
        <Box textAlign="center" marginTop={4}>
            <img src={'images/Bubblegum.png'} alt={'bubblegum'} style={{ width: '80%', maxWidth: 400, margin: 'auto' }} />
            <Typography variant="caption" display="block" marginTop={2}>
                <em>{'25.09.09 - cold rock - bubblegum ice cream'}</em> by <a href={'https://www.flickr.com/photos/yugggles/3956406453'} target="_blank" rel="noopener noreferrer">{'Jessica Ta'}</a>
            </Typography>
        </Box>
        <Box textAlign="center" marginTop={4}>
            <img src={'images/Butterscotch.png'} alt={'butterscotch'} style={{ width: '80%', maxWidth: 400, margin: 'auto' }} />
            <Typography variant="caption" display="block" marginTop={2}>
                <em>{'Winstones Butterscotch ice cream on Rodborough common'}</em> by <a href={'https://www.flickr.com/photos/ricardo/5723289261'} target="_blank" rel="noopener noreferrer">{'ricardo'}</a>
            </Typography>
        </Box>
        <Box textAlign="center" marginTop={4}>
            <img src={'images/hokey pokey.png'} alt={'hokey pokey'} style={{ width: '80%', maxWidth: 400, margin: 'auto' }} />
            <Typography variant="caption" display="block" marginTop={2}>
                <em>{'Hokey Pokey ice cream made with honeycomb toffee'}</em> by <a href={'https://www.flickr.com/photos/steven_maher/11579331053'} target="_blank" rel="noopener noreferrer">{'steven_n_maher'}</a>
            </Typography>
        </Box>
        <Box textAlign="center" marginTop={4}>
            <img src={'images/mango.png'} alt={'mango'} style={{ width: '80%', maxWidth: 400, margin: 'auto' }} />
            <Typography variant="caption" display="block" marginTop={2}>
                <em>{'File:Mangos - single and halved.jpg'}</em> by <a href={'https://commons.wikimedia.org/wiki/File:Mangos_-_single_and_halved.jpg'} target="_blank" rel="noopener noreferrer">{'Ivar Leidus'}</a>
            </Typography>
        </Box>
        <Box textAlign="center" marginTop={4}>
            <img src={'images/mint.png'} alt={'mint'} style={{ width: '80%', maxWidth: 400, margin: 'auto' }} />
            <Typography variant="caption" display="block" marginTop={2}>
                <em>{'Mint Chocolate Chip Goodness'}</em> by <a href={'https://www.flickr.com/photos/tamdotcom/756085841'} target="_blank" rel="noopener noreferrer">{'tamdotcom'}</a>
            </Typography>
        </Box>
        <Box textAlign="center" marginTop={4}>
            <img src={'images/neapolitan.png'} alt={'neapolitan'} style={{ width: '80%', maxWidth: 400, margin: 'auto' }} />
            <Typography variant="caption" display="block" marginTop={2}>
                <em>{'The Flickr Lounge Togetherness: Neapolitan Ice Cream'}</em> by <a href={'https://www.flickr.com/photos/sue90ca/12662738154'} target="_blank" rel="noopener noreferrer">{'Sue Thompson'}</a>
            </Typography>
        </Box>
        <Box textAlign="center" marginTop={4}>
            <img src={'images/popolato.png'} alt={'popolato'} style={{ width: '80%', maxWidth: 400, margin: 'auto' }} />
            <Typography variant="caption" display="block" marginTop={2}>
                <em>{'File:Kiwi (Actinidia chinensis) 1 Luc Viatour.jpg'}</em> by <a href={'https://commons.wikimedia.org/wiki/File:Kiwi_%28Actinidia_chinensis%29_1_Luc_Viatour.jpg'} target="_blank" rel="noopener noreferrer">{'Luc Viatour'}</a>
            </Typography>
        </Box>
        </div>
    );;
};

export default AboutMePage;