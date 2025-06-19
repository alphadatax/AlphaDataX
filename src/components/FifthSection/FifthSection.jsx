import React from 'react';
import { Box, Typography, Grid, Chip, Button, Paper } from '@mui/material';
import './FifthSection.css';

const features = [
  "UNMATCHED SCALABILITY",
  "CLEAN BY DEFAULT",
  "SOVEREIGN-FIRST COMPLIANCE",
  "BUILT IN THE UAE, ENGINEERED FOR THE WORLD",
  "CROSS-DISCIPLINARY LEADERSHIP",
  "MISSION-DRIVEN OPERATIONS",
];

const FifthSection = ({onContactNowClick}) => {
  return (
    <div className='outer-bg'>
        <div className="glow" />
    <Box className="why-container">
      <Grid container spacing={4} >
        {/* Left Side */}
        <Grid size={{xs:12,md:6}}>
          <Grid container>
            <Grid className='image-div'size={{xs:12 ,md:12}} >
            <img src="/ADX-WHITE-TRANSPARENT 2.png" alt="X Icon" className="x-icon" />
            </Grid>
            <Grid  size={{xs:12,md:12}} className='title-div'>
            <h2 className="title">
              WHY ALPHA DATA X
            </h2>
            </Grid>
            <p className="subtitle">
              We deliver localized, regulation-ready compute environments – empowering governments and enterprises with data control and digital independence.
            </p>

            <Grid container spacing={1} className="feature-chip-group">
              {features.map((feature, index) => (
                <Grid key={index}>
                  <Chip
                    label={feature}
                    className={`feature-chip ${index === 0 ? 'red-dot' : 'black-dot'}`}
                  />
                </Grid>
              ))}
            </Grid>
          </Grid>
        </Grid>

        {/* Right Side */}
        <Grid  size={{xs:12,md:6}}>
          <Paper className="info-card" elevation={4}>
            <div className="card-header">
              <Box className="card-number">1</Box>
              <h2  className="card-title">
                Unmatched Scalability
                <p className='card-title-sub'> 1/6</p>
              </h2>
              <p>1/6</p>
            </div>
            <p className="card-description">
              Alpha Data X is purpose-built for exponential AI workloads – from multimodal LLM training to real-time inference for autonomous systems. Our hyperscale and modular campuses can scale from 5MW to 1GW+, adapting to the evolving demands of our clients without compromise.
            </p>

            <img src="/Futuristic Desert Tech Landscape at Sunrise.png" alt="Data Center" className="card-image" />

            <Button variant="outlined" sx={{'&:focus': { outline: 'none', border: 'solid' }}} fullWidth  className="contact-btn" onClick={onContactNowClick}>
              Contact Us
            </Button>
          </Paper>
        </Grid>
      </Grid> 
    </Box>
    </div>

  );
};

export default FifthSection;
