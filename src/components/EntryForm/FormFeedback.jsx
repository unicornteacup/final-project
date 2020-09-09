import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import TrailList from '../TrailList';
import { datePickerDefaultProps } from '@material-ui/pickers/constants/prop-types';
import TrailContext from '../../hooks/TrailContext';
import ParkContext from '../../hooks/ParkContext';

export default function AlertDialog(props) {
  // const [open, setOpen] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const { selectedPark, setSelectedPark } = React.useContext(ParkContext);
  console.log('popup park:', selectedPark)
  const { selectedTrail, setSelectedTrail } = React.useContext(TrailContext);

  const onMyBookings = props.onMyBookings;
  const setPark = props.park;

  const myBookings = (props) => {
    onMyBookings();
    props.open=false;
  };
  
  const newForm = (props) => {
    props.open=false;
    setSelectedTrail({});
    setPark({});
  };

  console.log('popup props:', props)

  return (
    <div>
      {/* <Button variant="outlined" color="primary" onClick={handleClickOpen}>
        Open alert dialog
      </Button> */}
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">{"New pass has been saved!"}</DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            Click My Bookings to see your pass entries or New Pass to apply for another trail.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button onClick={newForm} color="primary">
            New Pass
          </Button>
          <Button onClick={myBookings} color="primary" autoFocus>
            My Bookings
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}