import React from 'react';
import "../App.css";

import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';


export default function ChildModal() {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #d2d2d2',
        boxShadow: 2,
        pt: 2,
        px: 4,
        pb: 3,
      };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };
  
    return (
      <React.Fragment>
        <Button onClick={handleOpen}>Sepete Ekle</Button>
        <Modal
          
          open={open}
          onClose={handleClose}
          aria-labelledby="child-modal-title"
          aria-describedby="child-modal-description"
        >
          <Box sx={{ ...style, width: 200 }}>
            <h2 id="child-modal-title">Sepete eklendi!</h2>
           
            <Button onClick={handleClose}>Kapat</Button>
          </Box>
        </Modal>
      </React.Fragment>
    );
  }