import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Link } from 'react-router-dom';
const Project = () => {
    return (
        <Box component="div" className="project">
            <Box component="div" sx={{
                padding: {
                    md: '20px 20px',
                    xs: '10px 10px'
                },
                borderRadius: '5px',
                backgroundColor: '#191919',
                position: 'relative',
                overflow: 'hidden'
            }}>
                <img src="https://images.pexels.com/photos/747964/pexels-photo-747964.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940" alt="" />
                <div className="project_content">
                    <div>
                        <Typography variant="h3" component="h3" sx={{
                            fontSize: {
                                md: '25px',
                                sm: '22px',
                                xs: '20px'
                            },
                            fontWeight: '500',
                            fontFamily: "'Oswald', sans-serif",
                            marginBottom: '15px',
                            color: '#000'
                        }}>
                            Project Title
                        </Typography>
                        <Box component="div">
                            <Link to="/" className="project_btn" >View</Link>
                        </Box>
                    </div>
                </div>
                <div className="project_content_mobile">
                    <Typography variant="h3" component="h3" sx={{
                        fontSize: {
                            sm: '20px',
                            xs: '18px'
                        },
                        fontWeight: '500',
                        fontFamily: "'Oswald', sans-serif",
                        marginBottom: '10px',
                        color: '#fff'
                    }}>
                        Project Title
                    </Typography>
                    <Box component="div">
                        <Link to="/" className="project_btn" >View</Link>
                    </Box>
                </div>
            </Box>
        </Box>
    );
};

export default Project;