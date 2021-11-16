import React from 'react';
import './Contact.css';
import Navigation from '../../Components/Navigation/Navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import { Link } from 'react-router-dom';

import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import TwitterIcon from '@mui/icons-material/Twitter';

const Contact = () => {
    return (
        <>
            <Navigation />
            <div className="contact_page page_fixed">
                <Container fixed>
                    <Box component="div" className="custom_scrollbar contact_wrapper">
                        <Grid container spacing={4}>
                            <Grid item md={6} xs={12}>
                                <Typography variant="h2" component="h2" sx={{
                                    fontFamily: "'Oswald', sans-serif",
                                    fontSize: {
                                        md: '35px',
                                        sm: '28px',
                                        xs: '20px'
                                    },
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    marginBottom: '20px'
                                }}>Contact Me</Typography>
                                <p style={{
                                    maxWidth: '400px',
                                    letterSpacing: '2px',
                                    color: '#ddd'
                                }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, vero dolorem nostrum reiciendis nam sunt saepe ad eaque perferendis asperiores! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, tempore.</p>

                                <Typography variant="h3" component="h3" sx={{
                                    fontFamily: "'Oswald', sans-serif",
                                    fontSize: {
                                        md: '30px',
                                        sm: '25px',
                                        xs: '18px'
                                    },
                                    fontWeight: '500',
                                    marginBottom: '20px',
                                    marginTop: '30px'
                                }}>Social Links</Typography>

                                <ul className="social_menu">
                                    <li>
                                        <a href="https://github.com/gitHasib" target="_blank" rel="noreferrer">
                                            <GitHubIcon />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.linkedin.com/in/hasibur-rahman-32133815a/" target="_blank"  rel="noreferrer">
                                            <LinkedInIcon />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://twitter.com/Hasib11k" target="_blank"  rel="noreferrer">
                                            <TwitterIcon />
                                        </a>
                                    </li>
                                    <li>
                                        <a href="https://www.facebook.com/profile.php?id=100005719275494" target="_blank"  rel="noreferrer">
                                            <FacebookIcon />
                                        </a>
                                    </li>
                                </ul>

                            </Grid>
                            <Grid item md={6} xs={12}>
                                <form action="">
                                    <div className="input_group">
                                        <input
                                            type="text"
                                            placeholder="Name"
                                            className="contact_input"
                                        />
                                    </div>
                                    <div className="input_group">
                                        <input
                                            type="email"
                                            placeholder="Email"
                                            className="contact_input"
                                        />
                                    </div>
                                    <div className="input_group">
                                        <input
                                            type="text"
                                            placeholder="Subject"
                                            className="contact_input"
                                        />
                                    </div>
                                    <div className="input_group">
                                        <textarea
                                            placeholder="Message"
                                            className="contact_input"
                                        ></textarea>
                                    </div>
                                    <div>
                                        <button type="submit" className="contact_btn">Submit</button>
                                    </div>
                                </form>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </div>
        </>
    );
};

export default Contact;