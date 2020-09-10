import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@material-ui/icons/KeyboardArrowUp';
import DeleteIcon from '@material-ui/icons/Delete';


import VisitorContext from "../hooks/VisitorContext";

const useRowStyles = makeStyles({
  root: {
    '& > *': {
      borderBottom: 'unset',
    },
  },
});

export default function Guests(props) {
  const {selectedVisitor, setSelectedVisitor} = React.useContext(VisitorContext);

  const booking = props.row;
  const [open, setOpen] = React.useState(false);
  const classes = useRowStyles();
  function onCancel(booking) {
    
    const passId = booking.id
    const guestsId = booking.guests[0].entry_id
  
      props
      .cancelPass(passId, guestsId)
      .then(() => props.onMyBookings())
      .catch(error => {
        // transition(ERROR_SAVE, true)
      }); 
    } 

  const date = new Date(booking.date)

  return (
    <React.Fragment>
      <TableRow className={classes.root}>
        <TableCell>
          <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
            {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
          </IconButton>
        </TableCell>
        <TableCell component="th" scope="row">
          {booking.id}
        </TableCell>
        <TableCell align="right">{date.toDateString()}</TableCell>
        <TableCell align="right">{booking.trail_id}</TableCell>
        <TableCell align="right">{selectedVisitor.first_name}</TableCell>
        <TableCell align="right">{selectedVisitor.last_name}</TableCell>
        <TableCell align="right"><strong>{booking.status}</strong></TableCell>
        <DeleteIcon align="right"/>
      </TableRow>
      <TableRow>
        <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
          <Collapse in={open} timeout="auto" unmountOnExit>
            <Box margin={1}>
              <Typography variant="h6" gutterBottom component="div">
                Guests
              </Typography>
              <Table size="small" aria-label="purchases">
                <TableHead>
                  <TableRow>
                    <TableCell>First Name</TableCell>
                    <TableCell>Last Name</TableCell>
                    <TableCell align="center">Phone</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {booking.guests.map((guest) => (
                    <TableRow key={guest.guests_first_name}>
                      <TableCell component="th" scope="row">
                        {guest.guests_first_name}
                      </TableCell>
                      <TableCell>{guest.guests_last_name}</TableCell>
                      <TableCell align="right">{guest.guests_phone}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </Box>
          </Collapse>
        </TableCell>
      </TableRow>
    </React.Fragment>
  );
}