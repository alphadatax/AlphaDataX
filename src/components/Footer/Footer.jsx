// src/components/Footer.jsx
import React from 'react';
import './Footer.css';
import { Box, Typography, Grid, IconButton } from '@mui/material';
import { Instagram, Twitter, LinkedIn } from '@mui/icons-material';
import XIcon from '@mui/icons-material/X';

const Footer = () => {
    return (
        <Box className="footer">
            <Grid container className="footer-content" spacing={4}>
                <Grid size={{ xs: 12, sm: 6, md: 3 }}>
                    <img className='footer-logo' src="./logo.png" alt="" />
                </Grid>

                <Grid size={{ xs: 6, sm: 3, md: 2 }}>
                    <h4 className="footer-heading">Company</h4>
                    <ul>
                        <li>Our Mission</li>
                        <li>Our Vision</li>
                        <li>Our Story</li>
                        <li>Meet Our Team</li>
                    </ul>
                </Grid>

                <Grid size={{ xs: 6, sm: 3, md: 3 }}>
                    <h4 className="footer-heading">Our Solutions</h4>
                    <ul>
                        <li>Hyperscale AI Data Campuses</li>
                        <li>GPU Cloud Compute Hosting</li>
                        <li>Modular Edge Data Centers</li>
                        <li>Smart Grid Power Systems</li>
                    </ul>
                </Grid>

                <Grid size={{ xs: 6, sm: 3, md: 2 }}>
                    <h4 className="footer-heading">Resources</h4>
                    <ul>
                        <li>Blog</li>
                        <li>Case Studies</li>
                    </ul>
                </Grid>

                <Grid size={{ xs: 12, sm: 6, md: 2 }} className="social-icons">
                    <a href="https://www.instagram.com/alphadatax.adx?igsh=MXNwZzhsdnpxNjIxbA=="
                        target="_blank"
                        rel="noopener noreferrer"
                    ><IconButton sx={{'&:focus': { outline: 'none', border: 'none' }}}><Instagram sx={{ color: 'white'}} /></IconButton></a>
                    <a href="https://www.linkedin.com/company/alpha-data-x/"
                        target="_blank"
                        rel="noopener noreferrer"
                    ><IconButton sx={{'&:focus': { outline: 'none', border: 'none' }}}><LinkedIn sx={{ color: 'white'}} /></IconButton></a>
                    <IconButton sx={{'&:focus': { outline: 'none', border: 'none' }}}><XIcon sx={{ color: 'white','&:focus': { outline: 'none', border: 'none' } }} /></IconButton> 
                </Grid>
            </Grid>

            <Box className="footer-bottom">
                <p variant="body2">Privacy Policy</p>
                <p variant="body2">Legal</p>
                <p variant="body2">Term of Services</p>
                <p variant="body2" className="copyright">
                    © Copyright Alpha Data X
                </p>
            </Box>
        </Box>
    );
};

export default Footer;
