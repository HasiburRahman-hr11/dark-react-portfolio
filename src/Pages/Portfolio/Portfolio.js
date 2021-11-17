import React from 'react';
import './Portfolio.css';
import Navigation from '../../Components/Navigation/Navigation';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Projects from '../../Components/Projects/Projects';

const Portfolio = () => {
    return (
        <>
            <Navigation />
            <div className="portfolio_page page_fixed">
                <Box component="div" sx={{
                    paddingTop: '100px'
                }}>
                    <Container fixed>
                        <Box component="div" sx={{
                            textAlign: 'center',
                            marginBottom:{
                                md:'50px',
                                xs:'30px'
                            }
                        }}>
                            <Typography variant="h5" component="h5" sx={{
                                fontSize: {
                                    md: '22px',
                                    sm: '20px',
                                    xs: '18px'
                                },
                                fontWeight: 'normal',
                                fontFamily: "'Oswald', sans-serif",
                            }}>My Recent Projects</Typography>
                            <Typography variant="h2" component="h2" sx={{
                                fontFamily: "'Oswald', sans-serif",
                                fontSize: {
                                    md: '45px',
                                    sm: '35px',
                                    xs: '28px'
                                },
                                fontWeight:'bold',
                                textTransform:'uppercase'
                            }}>My Projects</Typography>
                        </Box>

                        <Box component="div" className="custom_scrollbar projects_wrapper">
                            <Projects/>
                        </Box>
                    </Container>
                </Box>
            </div>

        </>
    );
};

export default Portfolio;