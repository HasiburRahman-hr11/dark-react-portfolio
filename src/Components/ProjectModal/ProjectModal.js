import React from 'react';
import './ProjectModal.css';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CancelIcon from '@mui/icons-material/Cancel';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%',
    maxWidth: '1100px',
    backgroundColor: '#191919',
    border: '2px solid #fff',
    borderRadius: '5px',
    boxShadow: 24,
    padding: {
        md: '10px',
        xs: '5px'
    }
};

const ProjectModal = (props) => {
    const {
        handleModalOpen,
        modalOpen,
        handleModalClose,
        project
    } = props;


    return (
        <Modal
            open={modalOpen}
            onClose={handleModalClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >

            <Box sx={style} >
                <CancelIcon sx={{
                    position: 'absolute',
                    top: '-20px',
                    right: '-20px',
                    cursor: 'pointer',
                    color: '#fff',
                    width: '35px',
                    height: '35px'
                }}
                    onClick={handleModalClose}
                />
                <Box className="custom_scrollbar" sx={{
                    maxHeight: '400px',
                    overflowY: 'auto',
                }}>

                    {project.gallery.map((item, i) => (
                        <Box key={i}>
                            <Typography
                                component="h3"
                                variant="h3"
                                sx={{
                                    margin: '10px 0',
                                    fontSize: '20px',
                                    fontFamily: "'Oswald', sans-serif",
                                    textAlign: 'center'
                                }}
                            >Screenshot {i + 1}</Typography>
                            <img src={item} alt="Project Gallery" />
                        </Box>
                    ))}
                </Box>
            </Box>
        </Modal>
    );
};

export default ProjectModal;
