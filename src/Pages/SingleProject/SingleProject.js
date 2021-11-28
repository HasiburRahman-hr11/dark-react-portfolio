import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Navigation from '../../Components/Navigation/Navigation';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { projects } from '../../projectsData';
import Loading from '../../Components/Loading/Loading';

const SingleProject = () => {
    const params = useParams();
    const [project, setProject] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getProject = () => {
            const theProject = projects.find(project => project._id === params.id);
            if (theProject) {
                setProject(theProject)
            }
            setLoading(false)
        }
        getProject();
    }, [params]);

    if (loading) {
        return <Loading />
    }

    return (
        <>
            <Navigation />
            <div className="single_page page_fixed">
                <Box component="div" sx={{
                    paddingTop: '80px'
                }}>
                    <Container fixed>
                        <Box component="div" className="custom_scrollbar page_fixed_wrapper">
                            <Typography component="h2" variant="h2" sx={{
                                color: '#fff',
                                fontWeight: 'bold',
                                fontFamily: "'Oswald', sans-serif",
                                fontSize: {
                                    md: '35px',
                                    sm: '28px',
                                    xs: '23px'
                                },
                                marginBottom: '20px',
                                textAlign: 'center'
                            }}>
                                {project.title}
                            </Typography>
                            <Box component="div" sx={{
                                backgroundColor: '#191919',
                                padding: {
                                    xs: '10px 10px',
                                    md: '20px 20px'
                                },
                                borderRadius: '5px',
                                marginBottom: '30px'
                            }}>
                                <img src={project.image} alt={project.title} />
                            </Box>

                            <Box component="div" sx={{
                                textAlign: 'center'
                            }}>
                                <a href={project.link} className="project_btn" target="_blank" rel="noreferrer">Preview</a>
                            </Box>



                            {project.description && (
                                <>
                                    <Typography component="h2" variant="h2" sx={{
                                        color: '#fff',
                                        fontWeight: 'bold',
                                        fontFamily: "'Oswald', sans-serif",
                                        fontSize: {
                                            md: '25px',
                                            xs: '20px'
                                        },
                                        marginTop: '50px',
                                        marginBottom: '20px'
                                    }}>
                                        About This Project
                                    </Typography>

                                    <Typography component="p" variant="p" sx={{
                                        letterSpacing: '2px'
                                    }}>
                                        {project.description}
                                    </Typography>
                                </>
                            )}

                        </Box>

                    </Container>
                </Box>
            </div>

        </>
    );
};

export default SingleProject;