import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { red, orange, green } from '@material-ui/core/colors';
import useVisualMode from '../hooks/UseVisualMode';
import VisitorContext from "../hooks/VisitorContext";
import './mybookings.scss';

const INITIAL = "INITIAL";
const VERIFIED = "VERIFIED";
const ERROR = "ERROR";
const BOOKINGS = "BOOKINGS";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(4),
    width: '80%',
    justifyContent: 'center',
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  success: {
    color: 'green'
  },
  declined: {
    color: 'red'
  },
  pending: {
    color: 'orange'
  }
}));


// const bookings = [

//   {
//     date: '29-Aug-2020',
//     status: 'Success',
//     trail_id: '1',
//     visitor_id: '1',
//     guests:[
//       {
//         first_name: 'Shayaan',
//         last_name: 'Shea', 
//         phone: '8671264338'
//       },
//       {
//         first_name: 'Barney',
//         last_name: 'Bartosz', 
//         phone: '2501348862'
//       }
//     ]
//   },
//   {
//     date: '02-Sep-2020',
//     status: 'Declined',
//     trail_id: '2',
//     visitor_id: '1',
//     guests:[]
//   },
//   {
//     date: '13-Sep-2020',
//     status: 'Pending',
//     trail_id: '3',
//     visitor_id: '1',
//     guests:[
//       {
//         first_name: 'Dougal',
//         last_name: 'Dregan', 
//         phone: '5811455717'
//       },
//       {
//         first_name: 'Jordy',
//         last_name: 'Josan', 
//         phone: '4386618541'
//       },
//       {
//         first_name: 'Jude',
//         last_name: 'Junior', 
//         phone: '7053846873'
//       }
//     ]
//   }
// ]
export default function MyBookings(props) {
  const classes = useStyles();

  const {selectedVisitor, setSelectedVisitor} = React.useContext(VisitorContext);

  console.log('form visitor :', selectedVisitor.email)
  console.log('mybookings props:', props)

  const bookings = props.mybookings
  // function status(booking) {
  //   if (booking === 'Success') {
  //     this.css('color', green)
  //   } else if(booking === 'Declined') {
  //     this.css('color', red)
  //   } else {
  //     this.css('color', orange)
  //   }
  // }

  // const onMyBookings = (allBookings) => {
  //   let visitorBookings = []
  //   for (let booking of allBookings) {
  //     if (booking.visitor_id === selectedVisitor.id) {
  //       visitorBookings.push(booking)
  //     }
  //   };
  //   return visitorBookings
  // };

  const { mode, transition, back } = useVisualMode(
    // INITIAL
    // onRegister ? REGISTER : INITIAL
  );

  function onCancel(booking) {
    
    console.log('booking to delete', booking)
  
      props
      .cancelPass(booking.id)
      .then(() => props.onMyBookings())
      .catch(error => {
        // transition(ERROR_SAVE, true)
      }); 
    } 

  return (
    <div class= "mybookings_name" className={classes.root}>
    <Button variant="contained" color="primary" onClick={() => props.back()}>Home    
    </Button>
      {bookings.filter((booking) => {
        return booking.visitor_id === selectedVisitor.id;
      }).map((booking) => (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>
            <header>
              <h2>Pass Entry</h2>
              <h4 className={classes.column}>Date: {booking.date}</h4>
              <h4 className={classes.column}>Trail ID:{booking.trail_id}</h4>
              <h5 className={classes.column}>First Name:{selectedVisitor.first_name}</h5>
              <h5 className={classes.column}>Last Name:{selectedVisitor.last_name}</h5>
              <h3 className={classes.column}>Booking Status:{booking.status}</h3>
            </header>

              {booking.guests.map((guest) => {
                return(
                  <div class="guests" className={classes.column}>
                    <h2> Guests </h2>
                    <Typography className={classes.secondaryHeading}>First Name:{guest.guests_first_name}</Typography>
                    <Typography className={classes.secondaryHeading}>Last Name:{guest.guests_last_name}</Typography>
                    <Typography className={classes.secondaryHeading}>Phone:{guest.guests_phone}</Typography>
                    </div>
                  )
              })}
              <Button variant="contained" color="primary" onClick={() => onCancel()}>Cancel Entry</Button>
          </Paper>
        </Grid>
      </Grid>
      ))}
    </div>
  );
}