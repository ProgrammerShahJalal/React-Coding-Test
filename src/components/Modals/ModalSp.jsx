import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';



const {useState} = React;

function AllContactDialog(props) {
  const { open, setAllContactOpen, setUSContactOpen } = props;

  const switchUSContact = (event) => {
    setAllContactOpen(false)
    setUSContactOpen(true)
  }

  return (
    <Dialog aria-labelledby="simple-dialog-title" open={open}>
      <DialogTitle id="simple-dialog-title">All Contact</DialogTitle>
      <DialogContent>If you want switch, press US Contact</DialogContent>
      <DialogActions>
        <Button onClick={(event) => {setAllContactOpen(false)}}>CLOSE</Button>
        <Button>All Contact</Button>
        <Button onClick={switchUSContact}>US Contact</Button>
      </DialogActions>
    </Dialog>
  );
}
function USContactDialog(props) {
    const { open, setAllContactOpen, setUSContactOpen } = props;
  
    const switchAllContact = (event) => {
      setUSContactOpen(false)
      setAllContactOpen(true)
    }
  
    return (
      <Dialog aria-labelledby="simple-dialog-title" open={open}>
        <DialogTitle id="simple-dialog-title">US Contact</DialogTitle>
        <DialogContent>If you want to switch, press All Contact</DialogContent>
        <DialogActions>
          <Button onClick={(event) => {setUSContactOpen(false)}}>CLOSE</Button>
          <Button>US Contact</Button>
          <Button onClick={switchAllContact}>All Contact</Button>
        </DialogActions>
      </Dialog>
    );
  }
  
  const ModalSp = () => {
    const [AllContactOpen, setAllContactOpen] = useState(false)
    const [USContactOpen, setUSContactOpen] = useState(false)
    
    const handleAllContact = (event) => {
      setAllContactOpen(true)
    }
    
    const handleUSContact = (event) => {
      setUSContactOpen(true)
    }
      
    return (
      <div className='text-center'>
        <Button sx={{margin: 1}} variant='contained' color='primary' onClick={handleAllContact} >
          AllContact
        </Button>
        <Button variant='outlined' color='primary' onClick={handleUSContact} >
          USContact
        </Button>
        <AllContactDialog open={AllContactOpen} setAllContactOpen={setAllContactOpen} setUSContactOpen={setUSContactOpen} />
        <USContactDialog open={USContactOpen} setAllContactOpen={setAllContactOpen} setUSContactOpen={setUSContactOpen} />
      </div>
    )
  }

export default ModalSp;
  