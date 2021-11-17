import React from 'react';
import './About.css';
import Navigation from '../../Components/Navigation/Navigation';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import cv from './hrResume.pdf';

import myImg from '../../images/hasibur-rahman.jpg';

const About = () => {
    return (
        <>
            <Navigation />
            <div className="about_page page_fixed">
                <Container fixed>
                    <Box component="div" className="custom_scrollbar about_wrapper">
                        <Grid container spacing={4} sx={{
                            flexDirection:{
                                xs:'column-reverse',
                                md:'row'
                            }
                        }}>
                            <Grid item md={8} xs={12}>
                                <Typography variant="h2" component="h2" sx={{
                                    fontFamily: "'Oswald', sans-serif",
                                    fontSize: {
                                        md: '35px',
                                        sm: '30px',
                                        xs: '25px'
                                    },
                                    fontWeight: 'bold',
                                    textTransform: 'uppercase',
                                    marginBottom: '20px'
                                }}>About Me</Typography>

                                <p style={{
                                    maxWidth: '500px',
                                    letterSpacing: '2px',
                                    color: '#ddd',
                                    marginBottom:'20px'
                                }}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa, vero dolorem nostrum reiciendis nam sunt saepe ad eaque perferendis asperiores! Lorem ipsum dolor, sit amet consectetur adipisicing elit. Molestias, tempore.</p>

                                <a href={cv} className="btn btn_secondary" download>Download CV</a>


                                <Box component="div" className="education_wrapper" sx={{
                                    marginTop: '40px'
                                }}>
                                    <Typography variant="h2" component="h2" sx={{
                                        fontFamily: "'Oswald', sans-serif",
                                        fontSize: {
                                            md: '30px',
                                            sm: '28px',
                                            xs: '22px'
                                        },
                                        fontWeight: 'bold',
                                        marginBottom: '20px'
                                    }}>My Education</Typography>

                                    <Grid container spacing={3}>
                                        <Grid item md={4} sm={6} xs={12}>
                                            <div className="education_item">
                                                <h3>BBA <span>(Marketing)</span></h3>
                                                <h4>Bachelor of Business Administration</h4>
                                                <p className="education_year">
                                                    Year: 2016 - Present
                                                </p>
                                            </div>
                                        </Grid>
                                        <Grid item md={4} sm={6} xs={12}>
                                            <div className="education_item">
                                                <h3>HSC <span>(Business Studies)</span></h3>
                                                <h4>Higher Secondary School Certificate</h4>
                                                <p className="education_year">
                                                    Year: 2014 - 2016
                                                </p>
                                                <p className="education_result">
                                                    CGPA: 5.00
                                                </p>
                                            </div>
                                        </Grid>
                                        <Grid item md={4} sm={6} xs={12}>
                                            <div className="education_item">
                                                <h3>SSC <span>(Business Studies)</span></h3>
                                                <h4>Secondary School Certificate</h4>
                                                <p className="education_year">
                                                    Year: 2009 - 2014
                                                </p>
                                                <p className="education_result">
                                                    CGPA: 5.00
                                                </p>
                                            </div>
                                        </Grid>
                                    </Grid>

                                </Box>


                                <Box component="div" className="skills_wrapper" sx={{
                                    marginTop: '40px'
                                }}>

                                    <Typography variant="h2" component="h2" sx={{
                                        fontFamily: "'Oswald', sans-serif",
                                        fontSize: {
                                            md: '30px',
                                            sm: '28px',
                                            xs: '22px'
                                        },
                                        fontWeight: 'bold',
                                        marginBottom: '20px'
                                    }}>Programming Skills</Typography>

                                    <div className="skills">
                                        <div className="skill_item">HTML5</div>
                                        <div className="skill_item">CSS3</div>
                                        <div className="skill_item">JavaScript</div>
                                        <div className="skill_item">React Js</div>
                                        <div className="skill_item">Node Js</div>
                                        <div className="skill_item">Express Js</div>
                                        <div className="skill_item">MongoDb</div>
                                        <div className="skill_item">Mongoose</div>
                                        <div className="skill_item">Bootstrap</div>
                                        <div className="skill_item">Material UI</div>
                                        <div className="skill_item">Git</div>
                                    </div>

                                </Box>



                            </Grid>
                            <Grid item md={4} xs={12} sx={{
                                paddingRight: {
                                    sm: '20px',
                                    xs: '0'
                                }
                            }}>
                                <div className="about_img_wrapper">
                                    <img src={myImg} alt="Hasibur Rahman" />
                                </div>
                            </Grid>
                        </Grid>
                    </Box>
                </Container>
            </div>
        </>
    );
};

export default About;