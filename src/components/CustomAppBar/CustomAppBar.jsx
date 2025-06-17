import React from 'react';
import './CustomAppBar.css'
import { useState } from 'react';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  useTheme,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Paper
} from '@mui/material';
import { red } from '@mui/material/colors';

const CustomAppBar = ({ onFirstSectionClick, onSecondSectionClick, onThirdSectionClick, onFifthSectionClick, onFourthSectionClick, onContactNowClick }) => {
  const theme = useTheme();
  const [open, setOpen] = useState(false)
  const toggleDrawer = () => () => {
    setOpen(!open);
  };

  const DrawerList = (
    <Box sx={{ width: 250, padding: "10px" }} role="presentation" onClick={toggleDrawer(false)} >
      <List>
        <ListItem item disablePadding>
          <ListItemButton onClick={onFirstSectionClick}>
            <ListItemText primary='Services' />
          </ListItemButton>
        </ListItem>
        <ListItem item disablePadding>
          <ListItemButton onClick={onSecondSectionClick}>
            <ListItemText primary='Our Technology' />
          </ListItemButton>
        </ListItem>
        <ListItem item disablePadding>
          <ListItemButton onClick={onThirdSectionClick}>
            <ListItemText primary='What We Solve' />
          </ListItemButton>
        </ListItem>
        <ListItem item disablePadding>
          <ListItemButton onClick={onFourthSectionClick}>
            <ListItemText primary='Why Alpha Data X' />
          </ListItemButton>
        </ListItem>
        <ListItem item disablePadding>
          <ListItemButton onClick={onFifthSectionClick}>
            <ListItemText primary='Future Goals' />
          </ListItemButton>
        </ListItem>
      </List>
      <Button
        variant="contained"
        sx={{
          backgroundColor: 'white',
          color: 'black',
          margin: "10px",
          width: "100%",
          borderRadius: '30px',
          fontFamily: "Hamlin",
          fontSize: "12px",
          px: 3,
          '&:hover': {
            backgroundColor: '#f5f5f5',
          },
        }}
        onClick={onContactNowClick}
      >
        CONTACT NOW
      </Button>
      <Divider />

    </Box>
  );
  const styles = {
    paper: {
      background: "blue"
    }
  }

  return (
    <>
      {window.innerWidth > 1500 ?

        <AppBar position="fixed" sx={{
          backgroundColor: 'rgba(255, 255, 255, 0)', // semi-transparent black
          backdropFilter: 'blur(10px)', // blur effect
          WebkitBackdropFilter: 'blur(10px)', // Safari support
          boxShadow: 'none', paddingLeft: "60px", paddingRight: "60px"
        }}>
          <Toolbar className='tool-bar' sx={{ justifyContent: 'space-between', px: 4 }}>
            {/* Logo */}
            <Box component="img" src="/logo.png" alt="Alpha Data X Logo" sx={{ height: 40 }} />

            {/* Navigation Links */}
            <Box sx={{ display: 'flex', gap: 4 }}>

              <Button sx={{
                color: 'white', fontWeight: 400, fontFamily: "Hamlin", fontSize: "12px", '&:focus': {outline: 'none'}}} onClick={onFirstSectionClick}>
                Services
              </Button>
              <Button sx={{ color: 'white', fontWeight: 400, fontFamily: "Hamlin", fontSize: "12px", '&:focus': {outline: 'none'} }} onClick={onSecondSectionClick}>
                Our Technology
              </Button>
              <Button sx={{ color: 'white', fontWeight: 400, fontFamily: "Hamlin", fontSize: "12px", '&:focus': {outline: 'none'} }} onClick={onThirdSectionClick}>
                What We Solve
              </Button>
              <Button sx={{ color: 'white', fontWeight: 400, fontFamily: "Hamlin", fontSize: "12px", '&:focus': {outline: 'none'} }} onClick={onFourthSectionClick}>
                Why Alpha Data X
              </Button>
              <Button sx={{ color: 'white', fontWeight: 400, fontFamily: "Hamlin", fontSize: "12px", '&:focus': {outline: 'none'} }} onClick={onFifthSectionClick}>
                Future Goals
              </Button>

            </Box>

            {/* Contact Now Button */}
            <Button
              variant="contained"
              sx={{
                backgroundColor: 'white',
                color: 'black',
                borderRadius: '30px',
                fontFamily: "Hamlin",
                fontSize: "12px",
                px: 3,
                '&:hover': {
                  backgroundColor: '#f5f5f5',
                },
              }}
              onClick={onContactNowClick}
            >
              CONTACT NOW
            </Button>
          </Toolbar>

        </AppBar> :
        <AppBar position="fixed" sx={{
          backgroundColor: 'rgba(255, 255, 255, 0)', // semi-transparent black
          backdropFilter: 'blur(10px)', // blur effect
          WebkitBackdropFilter: 'blur(10px)', // Safari support
          boxShadow: 'none',
        }}>
          <Toolbar className='tool-bar' sx={{ justifyContent: 'space-between', px: 2 }}>
            <Box component="img" src="/logo.png" alt="Alpha Data X Logo" sx={{ width: 200, float: 'left' }} />
            <Button onClick={toggleDrawer(true)} sx={{ '&:focus': { outline: 'none', border: 'none' }, padding: 0, float: "left" }}><Box component="img" src="/icons8-menu-64.png" alt="menu" sx={{ width: 40, padding: 0, float: 'left' }} /></Button>
            <Drawer open={open} onClose={toggleDrawer(false)} anchor={'right'} classes={{ paper: 'blurred-drawer' }} className='blured-drawer' PaperProps={{
              sx: {
                width: 280,
                backgroundColor: 'rgba(255,255,255,0.08)',
                backdropFilter: 'blur(12px)',
                WebkitBackdropFilter: 'blur(12px)',
                color: '#fff',
                borderRight: '1px solid rgba(255, 255, 255, 0.2)',
              },
            }}>

              {DrawerList}

            </Drawer>
          </Toolbar>
        </AppBar>}
    </>
  );
};

export default CustomAppBar;
