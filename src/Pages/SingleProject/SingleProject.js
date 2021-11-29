import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navigation from '../../Components/Navigation/Navigation';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { projects } from '../../projectsData';
import Loading from '../../Components/Loading/Loading';
import { style } from '@mui/system';

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
                            <Typography component="h2" variant="h2" sx={styles.title}>
                                {project.title}
                            </Typography>
                            <Box component="div" sx={styles.thumbnailWrapper}>
                                <img src={project.image} alt={project.title} style={{ maxHeight: '600px', objectFit: 'cover' }} />
                            </Box>

                            <Box component="div" sx={{
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center'
                            }}>
                                {project?.gallery?.length > 0 && (
                                    <button className="project_btn" >Screenshots</button>
                                )}
                                <a href={project.link} className="project_btn" target="_blank" rel="noreferrer">Preview</a>
                            </Box>



                            {project?.points?.length > 0 && (
                                <>
                                    <Typography component="h2" variant="h2" sx={styles.sectionTitle}>
                                        Project Overview
                                    </Typography>

                                    <Box component="ul">
                                        {project.points.map((item, i) => (
                                            <li
                                                key={i}
                                                style={{
                                                    color: "#ddd",
                                                    letterSpacing: '2px',
                                                    marginBottom: '5px'
                                                }}
                                            >{i + 1}. {item}.</li>
                                        ))}
                                    </Box>
                                </>
                            )}


                            {project?.techs?.length > 0 && (
                                <>
                                    <Typography component="h2" variant="h2" sx={styles.sectionTitle}>
                                        Technology Used
                                    </Typography>

                                    <div className="skills skills-single">
                                        {project.techs.map((item,i)=>(
                                            <div className="skill_item" key={i}>{item}</div>
                                        ))}
                                    </div>
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


const styles = {
    title: {
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
    },

    sectionTitle: {
        color: '#fff',
        fontWeight: 'bold',
        fontFamily: "'Oswald', sans-serif",
        fontSize: {
            md: '25px',
            xs: '20px'
        },
        marginTop: '50px',
        marginBottom: '20px'
    },
    thumbnailWrapper: {
        backgroundColor: '#191919',
        padding: {
            xs: '10px 10px',
            md: '20px 20px'
        },
        borderRadius: '5px',
        marginBottom: '30px'
    }
}