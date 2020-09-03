import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));


const bookings = [

  {
    date: '29-Aug-2020',
    status: 'Success',
    trail_id: '1',
    visitor_id: '1',
    guests:[
      {
        first_name: 'Shayaan',
        last_name: 'Shea', 
        phone: '8671264338'
      },
      {
        first_name: 'Barney',
        last_name: 'Bartosz', 
        phone: '2501348862'
      }
    ]
  },
  {
    date: '02-Sep-2020',
    status: 'Declined',
    trail_id: '2',
    visitor_id: '1',
    guests:[]
  },
  {
    date: '13-Sep-2020',
    status: 'Pending',
    trail_id: '3',
    visitor_id: '1',
    guests:[
      {
        first_name: 'Dougal',
        last_name: 'Dregan', 
        phone: '5811455717'
      },
      {
        first_name: 'Jordy',
        last_name: 'Josan', 
        phone: '4386618541'
      },
      {
        first_name: 'Jude',
        last_name: 'Junior', 
        phone: '7053846873'
      }
    ]
  }
]
export default function MyBookings() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      {bookings.map((booking) => (
      <Grid container spacing={3}>
        <Grid item xs={12}>
          <Paper className={classes.paper}>



            
          </Paper>
        </Grid>
      </Grid>
      ))}
    </div>
  );
}