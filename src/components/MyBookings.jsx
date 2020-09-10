import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';

import Guests from './Guests';
import VisitorContext from "../hooks/VisitorContext";
import useVisualMode from '../hooks/UseVisualMode';


const StyledTableCell = withStyles((theme) => ({
  head: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  body: {
    fontSize: 14,
  },
}))(TableCell);

const useStyles = makeStyles({
  table: {
    minWidth: 700,
  },
});

const INITIAL = "INITIAL";
const VERIFIED = "VERIFIED";
const ERROR = "ERROR";
const BOOKINGS = "BOOKINGS";

export default function MyBookings(props) {

  const [ bookings, setBookings ] = useState([])

  useEffect(() => {
    axios.get('/api/mybookings')
    .then((res) => {
      setBookings(res.data)
    })
  }, [])
  const { mode, transition, back } = useVisualMode();

  const {selectedVisitor, setSelectedVisitor} = React.useContext(VisitorContext);

  const sortedBookings = bookings.slice().sort((a, b) => b.date - a.date)

    return (
      <TableContainer component={Paper}>
        <Table aria-label="collapsible table">
          <TableHead>
            <TableRow>
              <StyledTableCell />
              <StyledTableCell>Pass Entry</StyledTableCell>
              <StyledTableCell align="right">Date</StyledTableCell>
              <StyledTableCell align="right">Trail ID</StyledTableCell>
              <StyledTableCell align="right">First Name</StyledTableCell>
              <StyledTableCell align="right">Last Name</StyledTableCell>
              <StyledTableCell align="right">Booking Status</StyledTableCell>
              <StyledTableCell />
            </TableRow>
          </TableHead>
          <TableBody>
            {sortedBookings.filter((booking) => {
        return booking.visitor_id === selectedVisitor.id;
      }).map((booking) => (
              <Guests 
                key={booking.id} 
                row={booking} 
                // cancelPass={() => props.cancelPass()}
                // onMyBookings={() => props.onMyBookings()}
                />
            ))}
          </TableBody>
        </Table>
      <Button color="primary" onClick={() => props.back()}>Home    
    </Button>
      </TableContainer>
    );
  }
