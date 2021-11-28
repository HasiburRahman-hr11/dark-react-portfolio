import React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

const Loading = () => {
    return (
        <Box component="div" sx={{
            position: 'fixed',
            width: '100%',
            height: '100%',
            left: '0',
            top: '0',
            backgroundColor: '#000',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: '999'
        }}>
            <CircularProgress sx={{ color: '#fff' }} />
        </Box>
    );
};

export default Loading;