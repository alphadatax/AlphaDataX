import React from 'react';
import { Box, Grid, Typography, Card, CardMedia, CardContent } from '@mui/material';
import './SixthSection.css';

const goals = [
  {
    title: 'Full carbon-negative operations',
    description: 'Achieve full carbon-negative operations across hyperscale and edge assets by 2030.',
  },
  {
    title: 'Recover 80%+ waste heat',
    description: 'Recover 80%+ waste heat across all facilities via AI-managed heat reuse systems.',
  },
  {
    title: 'Certify all ADX campuses',
    description: 'Certify all ADX campuses under leading ESG, LEED Platinum, and regional green data standards.',
  },
];

const SixthSection = () => {
  return (
    <Box className="future-goals-container">
      <div className="header-image-card">
        <img src="./u5935278521_httpss.mj.runxCR2KCHwhtk_httpss.mj.run3HcYNavWtNw_d8ac2023-8b4d-4346-b02e-26d5e97c1c53_1.png" alt="" className='ss-card-img'/>
      </div>

      <h1 className="ss-title">FUTURE GOALS BY 2030</h1>
      <p className="sub-title">
        Get inspired by the positive feedback from users who have tried
      </p>

      <Grid container spacing={2} className="sustainability-card">
        <Grid  size={{xs:12,md:6}}>
        <Typography variant="subtitle2" className="milestone-heading">
            SUSTAINABILITY MILESTONES
          </Typography>
          <img className='sustainability-image' src="/Solar-Powered Data Center at Dusk.png" alt="" />
        </Grid>
        <Grid  size={{xs:12,md:6}}>
          <Grid container spacing={2}>
            {goals.map((goal, index) => (
               <Grid container key={index}>
               <Grid size={{ xs: 3 }}>
                   <img className='fs-grid-1-logo' src="./Image.png" alt="" />
               </Grid>
               <Grid className='fs-grid-1-desc' size={{ xs: 9 }}>
                   <h2 className='fs-card-title'>{goal.title}</h2>
                   <p className="fs-card-desc">{goal.description}</p>
               </Grid>
           </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Box>
  );
};

export default SixthSection;
