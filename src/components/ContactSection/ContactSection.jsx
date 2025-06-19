import React, { useState } from 'react';
import { Grid, Box, Typography, TextField, Button,Grow,Paper } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import './ContactSection.css';

const ContactSection = () => {
    const[isSent,setIsSent] = useState(false);
    return (
        <Box className="contact-container">
            <Grid container spacing={4} className="contact-wrapper">
                <Grid size={{ xs: 12, md: 6 }} className="left-panel">
                    <h1 className="main-heading">
                        LET’S BUILD THE FUTURE TOGETHER
                    </h1>
                    {isSent?
                    <Grow in={true} timeout={500}>
                        <Paper
                            elevation={3}
                            sx={{
                                display: 'flex',
                                alignItems: 'center',
                                gap: 2,
                                padding: 2,
                                backgroundColor: '#e6ffee',
                                border: '1px solid #b2f0d2',
                                borderRadius: '12px',
                                width: 'fit-content',
                                margin: '100px auto',
                            }}
                        >
                            <CheckCircleIcon sx={{ color: '#2e7d32', fontSize: 40 }} />
                            <Typography sx={{ color: '#2e7d32', fontWeight: 600 }}>
                                Message sent successfully!
                            </Typography>
                        </Paper>
                    </Grow>:
                    <form className="form-container">
                        <TextField
                            label="Name"
                            placeholder="Your Name"
                            variant="filled"
                            fullWidth
                            InputProps={{ disableUnderline: true }}
                            className="input-field"
                        />
                        <TextField
                            label="Email"
                            variant="filled"
                            fullWidth
                            InputProps={{ disableUnderline: true }}
                            className="input-field"
                        />
                        <TextField
                            label="Phone"
                            variant="filled"
                            fullWidth
                            InputProps={{ disableUnderline: true }}
                            className="input-field"
                        />
                        <TextField
                            label="Message"
                            variant="filled"
                            fullWidth
                            multiline
                            rows={4}
                            InputProps={{ disableUnderline: true }}
                            className="input-field"
                        />
                        <Button className="submit-btn" variant="contained" style={{ backgroundColor: 'white', color: 'black', borderRadius: '999px', padding: "8px 24px" }} onClick={()=>setIsSent(true)}>
                            Send Message
                        </Button>
                    </form>}
                </Grid>

                <Grid item size={{ xs: 12, md: 6 }} className="right-panel">
                    <p className='right-panel-dialogue'>Join the innovators, governments, and visionaries powering the next era of AI infrastructure — sustainably, securely, and at scale.</p>
                    <div className="info-group">
                        <h5 className="info-title">ADDRESS</h5>
                        <p className="info-text">
                            Smart Station, First Floor Incubator Building Masdar City, Abu Dhabi, UAE
                        </p>
                    </div>
                    <div className="info-group">
                        <h5 className="info-title">EMAIL</h5>
                        <p className="info-text">info@alphadatax.com</p>
                    </div>
                    <div className="info-group">
                        <h5 className="info-title">FOR BUSINESS DEVELOPMENT & PARTNERSHIPS</h5>
                        <p className="info-text">business@alphadatax.com</p>
                    </div>
                    <div className="info-group">
                        <h5 className="info-title">PHONE</h5>
                        <p className="info-text">+971 52 720 9529</p>
                    </div>
                    <img src="./ADX-WHITE-TRANSPARENT X.png" className="logo-x-img" alt="" />
                </Grid>
            </Grid>
        </Box>
    );
};

export default ContactSection;
