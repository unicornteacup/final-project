 
import React, { useState } from 'react';

import VisitorContext from '../hooks/VisitorContext';

import useVisualMode from '../hooks/UseVisualMode';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import LandscapeRoundedIcon from '@material-ui/icons/LandscapeRounded';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { timePickerDefaultProps } from '@material-ui/pickers/constants/prop-types';
import Confirm from './Confirm';

const visitors = [
  {
    id: 1,
    first_name: 'Daimhin',
    last_name: 'Dalong',
    phone: 4382165851,
    email: 'fupke@dugah.seven',
    password: 'password'
  },
  {
    id: 2,
    first_name: 'Andy',
    last_name: 'Dalong',
    phone: 4382165851,
    email: 'andy@email.com',
    password: 'password'
  },
  {
    id: 3,
    first_name: 'Travis',
    last_name: 'Borsa',
    phone: 4382165851,
    email: 'travis@email.com',
    password: 'password'
  },
  {
    id: 4,
    first_name: 'Hafiz',
    last_name: 'Dalong',
    phone: 4382165851,
    email: 'hafiz@email.com',
    password: 'password'
  },
  {
    id: 6,
    first_name: 'Ali',
    last_name: 'Dalong',
    phone: 4382165851,
    email: 'ali@email.com',
    password: 'password'
  }
]

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const INITIAL = "INITIAL";
const ERROR = "ERROR";
const CONFIRM = "CONFIRM";


export default function Register(props) {
  const classes = useStyles();

  const { mode, transition, back } = useVisualMode(INITIAL);

  const { selectedVisitor, setSelectedVisitor } = React.useContext(VisitorContext);

  const [ newVisitor, setNewVisitor ] = useState({});

  const save = (newVisitor, visitors) => {
    const isNotValid = visitors.filter(visitor => 
      newVisitor.email === visitor.email
    )
    if (isNotValid[0]) {
      transition(ERROR)
    } else {
      setSelectedVisitor(newVisitor);
      props.onSetVerify();
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    save(newVisitor, props.visitors);
  }

  return (
    
    <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
        <Avatar className={classes.avatar}>
            <LandscapeRoundedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Become a hiker!
          </Typography>
          <form className={classes.form} noValidate onSubmit={handleSubmit}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="fname"
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  value={newVisitor.first_name}
                  onChange={(event) => setNewVisitor({...newVisitor, first_name: event.target.value})}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="lname"
                  value={newVisitor.last_name}
                  onChange={(event) => setNewVisitor({...newVisitor, last_name: event.target.value})}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="phone"
                  label="Phone Number"
                  type="phone"
                  id="phone"
                  autoComplete="phone"
                  value={newVisitor.phone}
                  onChange={(event) => {
                    setNewVisitor({...newVisitor, phone: Number(event.target.value)})
                    setSelectedVisitor({...selectedVisitor, phone: Number(event.target.value)})
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                { mode === INITIAL && (
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={newVisitor.email}
                    onChange={(event) => setNewVisitor({...newVisitor, email: event.target.value})}
                  />
                )}
                 { mode === ERROR && (
                  <TextField
                    error
                    variant="outlined"
                    required
                    fullWidth
                    id="outlined-error-helper-text"
                    helperText="Email is already in use."
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    value={newVisitor.email}
                    onChange={(event) => setNewVisitor({...newVisitor, email: event.target.value})}
                  />
                )}
              </Grid>
              <Grid item xs={12}>
                <TextField
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={newVisitor.password}
                  onChange={(event) => setNewVisitor({...newVisitor, password: event.target.value})}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I love BC"
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="white"
              className={classes.submit}>
              Let's go for a hike!
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link href="/" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
        </Box>
    </Container>
  );
}