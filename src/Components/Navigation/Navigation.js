import React, { useState } from 'react';
import './Navigation.css';
import { Link } from 'react-router-dom';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import CloseIcon from '@mui/icons-material/Close';

import logo from '../../images/logo.png';
import home from '../../images/home.JPG'


const Navigation = () => {
    const [openMenu, setOpenMenu] = useState(false);

    const handleOpenMenu = () => {
        setOpenMenu(true);
    }
    const handleCloseMenu = () => {
        setOpenMenu(false);
    }
    return (
        <div className="navbar">
            <Box component="div" className="navbar_wrapper" sx={{
                padding: '0 30px',
                width: '100%'
            }}>
                <Grid container sx={{
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <Grid item xs={6}>
                        <Link to="/" className="navbar_brand">
                            <img src={logo} alt="Logo" />
                        </Link>
                    </Grid>
                    <Grid item xs={6}>
                        <div className="navbar_toggle">
                            <div className="menu_open" onClick={handleOpenMenu}>
                                <span></span>
                                <span></span>
                                <span></span>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
            <nav id="navbar" className={openMenu ? 'navbar_collapse navbar_active' : 'navbar_collapse'}>
                <CloseIcon
                    onClick={handleCloseMenu}
                    sx={{
                        width: '40px',
                        height: '40px',
                        padding: '10px',
                        borderRadius: '50%',
                        color: '#fff',
                        backgroundColor: '#000',
                        position: 'absolute',
                        left: '-20px',
                        top: '30px',
                        cursor: 'pointer'
                    }} />


                <ul className="nav_menu">
                    <li>
                        <Link to="/">
                            <img src={home} alt="Home" />
                            <div className="nav_link_content">
                                <span>Home</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/portfolio">
                            <img src={home} alt="Home" />
                            <div className="nav_link_content">
                                <span>Projects</span>
                            </div>
                        </Link>
                    </li>
                    <li>
                        <Link to="/contact">
                            <img src={home} alt="Home" />
                            <div className="nav_link_content">
                                <span>Contact</span>
                            </div>
                        </Link>
                    </li>
                </ul>
            </nav>
        </div>
    );
};

export default Navigation;