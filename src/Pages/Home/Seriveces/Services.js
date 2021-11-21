import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import Service from '../Service/Service';
import Flouride from '../../../images/fluoride.png';
import cavity from '../../../images/cavity.png';
import teath from '../../../images/whitening.png';


const services = [
    {
        name: "Flouride Treatment",
        description: "Loream something add here we dont care what is add here",
        image: Flouride
    },
    {
        name: "Cavity Filling",
        description: "Loream something add here we dont care what is add here",
        image: cavity
    },
    {
        name: "Teath Whithening",
        description: "Loream something add here we dont care what is add here",
        image: teath
    }
]




const Services = () => {
    return (

        <Container>
            <Box>
                <Typography variant="h6" component="div">
                    Our services
                </Typography>
                <Typography sx={{ fontWeight: 'bold', m: 0.5 }} variant="h4" component="div">
                    Serviceces We provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Box>

        </Container >

    );
};

export default Services;