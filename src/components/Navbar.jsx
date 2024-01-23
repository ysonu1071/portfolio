import { Box, Button, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Slide from '@mui/material/Slide';
import { Close } from '@mui/icons-material';

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="right" ref={ref} {...props} />;
});

const styles = {
  navContainer: {
    display: 'flex',
    gap: '50px'
  },
  navItem: {
    padding: "5px 15px",
    cursor: 'pointer',

  },
  mobileNavItem:{
    padding: "5px 15px",
    cursor: 'pointer',
    display:'flex',
    justifyContent:'center',
    
  }
}


const Navbar = ({ index, handleIndex, isSmallDevice }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSetIndex = (id) => {
    handleIndex(id);
    handleClose();
  }

  return (
    <div style={{ width: "100%", backgroundColor: "#003140", display: "flex", justifyContent: "center", }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: 'center',
          width: "100%",
          padding: isSmallDevice ? "5px 20px" : "20px 100px",
          color: 'white'

        }}>
        <Typography variant={isSmallDevice ? "h6" : 'h4'}>Sonu Kumar</Typography>
        {!isSmallDevice && <Box style={styles.navContainer}>

          <Typography
           onClick={(e) => handleIndex(0)}
            style={styles.navItem} sx={{ backgroundColor: index == 0 ? '#00719C' : 'none', borderRadius: "10px", "&:hover": { backgroundColor: '#00719C' } }}>Home</Typography>
          <Typography onClick={(e) => handleIndex(1)} style={styles.navItem} sx={{ backgroundColor: index == 1 ? '#00719C' : 'none', borderRadius: "10px", "&:hover": { backgroundColor: '#00719C' } }}>About</Typography>
          <Typography onClick={(e) => handleIndex(2)} style={styles.navItem} sx={{ backgroundColor: index == 2 ? '#00719C' : 'none', borderRadius: "10px", "&:hover": { backgroundColor: '#00719C' } }}>Projects</Typography>
          <Typography onClick={(e) => handleIndex(3)} style={styles.navItem} sx={{ backgroundColor: index == 3 ? '#00719C' : 'none', borderRadius: "10px", "&:hover": { backgroundColor: '#00719C' } }}>Contact</Typography>
        </Box>}

        {isSmallDevice && <IconButton sx={{ color: "white" }} onClick={handleClickOpen}><MenuIcon /></IconButton>}


        <Dialog
          open={open}
          TransitionComponent={Transition}
          keepMounted
          onClose={handleClose}
          aria-describedby="alert-dialog-slide-description"
          style={{}}
          fullScreen={true}
        >

          <DialogTitle sx={{ display: 'flex', justifyContent: 'flex-end' }}>
            <IconButton onClick={handleClose}><Close /></IconButton>
          </DialogTitle>
          <DialogContent>
            <Box style={{display:'flex', flexDirection:"column",gap:"10px"}}>

              <Typography onClick={(e) => handleSetIndex(0)} style={styles.mobileNavItem} sx={{ backgroundColor: index == 0 ? '#00719C' : 'none', borderRadius: "10px",color: index == 0 ? 'white' : 'black', "&:hover": { backgroundColor: '#00719C' } }}>Home</Typography>
              <Typography onClick={(e) => handleSetIndex(1)} style={styles.mobileNavItem} sx={{ backgroundColor: index == 1 ? '#00719C' : 'none', borderRadius: "10px",color: index == 1 ? 'white' : 'black', "&:hover": { backgroundColor: '#00719C' } }}>About</Typography>
              <Typography onClick={(e) => handleSetIndex(2)} style={styles.mobileNavItem} sx={{ backgroundColor: index == 2 ? '#00719C' : 'none', borderRadius: "10px",color: index == 2 ? 'white' : 'black', "&:hover": { backgroundColor: '#00719C' } }}>Projects</Typography>
              <Typography onClick={(e) => handleSetIndex(3)} style={styles.mobileNavItem} sx={{ backgroundColor: index == 3 ? '#00719C' : 'none', borderRadius: "10px",color: index == 3 ? 'white' : 'black', "&:hover": { backgroundColor: '#00719C' } }}>Contact</Typography>
            </Box>

          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Disagree</Button>
            <Button onClick={handleClose}>Agree</Button>
          </DialogActions>
        </Dialog>

      </Box>
    </div>
  )
}

export default Navbar