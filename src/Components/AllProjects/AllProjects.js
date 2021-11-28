import React from 'react';
import Grid from '@mui/material/Grid';
import Project from '../Project/Project';
import { projects } from '../../projectsData';

const AllProjects = () => {
    return (
        <Grid container spacing={3}>
            {projects.map(project => (
                <Grid item md={6} xs={12} key={project.link}>
                    <Project project={project} />
                </Grid>
            ))}

        </Grid>
    );
};

export default AllProjects;