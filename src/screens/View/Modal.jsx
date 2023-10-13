import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function AlertDialog({open,setOpen,modalData}) {
  
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        
        <DialogTitle id="alert-dialog-title">
          {modalData.title}
        </DialogTitle>
        <div style={{width:"100%"}}>
          <img style={{width:"100%",height:400,objectFit:"cover"}} src={modalData.image} alt="" />
        </div>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            {modalData.description}
          <h2>Narxi: {modalData.price}</h2>
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Yopish</Button>
          
        </DialogActions>
      </Dialog>
    </div>
  );
}