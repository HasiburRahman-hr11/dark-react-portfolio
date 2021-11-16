import React from 'react';
import Grid from '@mui/material/Grid';
import Project from '../Project/Project';

const Projects = () => {
    return (
        <Grid container spacing={3}>
            <Grid item md={6} xs={12}>
                <Project/>
            </Grid>
            <Grid item md={6} xs={12}>
                <Project/>
            </Grid>
            <Grid item md={6} xs={12}>
                <Project/>
            </Grid>
            <Grid item md={6} xs={12}>
                <Project/>
            </Grid>
            <Grid item md={6} xs={12}>
                <Project/>
            </Grid>
            <Grid item md={6} xs={12}>
                <Project/>
            </Grid>
        </Grid>
    );
};

export default Projects;