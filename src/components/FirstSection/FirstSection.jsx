import React from 'react';
import './FirstSection.css';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import videobg from  '/globe-bg-video.mp4';
import bg from '/earth-background.png'; // or correct image path

const FirstSection = () => {
  
  return (
    <div className="hero-container">
      <video className='video-bg' autoPlay loop muted playsInline id="myVideo">
          <source src={videobg} type="video/mp4"></source>
      </video>
      <div className="hero-content">
      <Box sx={{ flexGrow: 1 }}>
      <Grid container columns={12}>
        <Grid size={{xs:12,md:9}}>
        <h1 className="hero-caption">
          POWERING SUSTAINABLE AI <br />
          <span>AT THE EDGE</span>
        </h1>
        <p className='sub-text'>
          Welcome to Alpha Data X – the infrastructure engine behind sovereign AI, clean compute, and exponential innovation.
        </p>
        <div className="buttons">
        <Grid container={'true'} sx={12} spacing={1}>
          <Grid size={{xs:12, sm:12,md:12,lg:3}}>
          
          </Grid>
          {/* <Grid size={{xs:12, sm:12,md:12,lg:3}}>
          <button className="btn btn-secondary">View Our Pitch Deck</button>
          </Grid> */}
          </Grid>
   
        </div>
        </Grid>
        <Grid className='globe-grid'size={ {xs:12 ,md:3}}>
        <div className="co2-metric">
        <img src="./globe.gif" alt="Computer man" className='globe'/>
          <p className="count">1.2M+</p>
          <p className="label">Tons of CO₂ saved annually</p>
        </div>
        </Grid>
      </Grid>
      </Box>
      </div>
    </div>
  );
};

export default FirstSection;
