import React from 'react';
import VisitorContext from '../hooks/VisitorContext';
import useVisualMode from '../hooks/UseVisualMode';

import { fade, makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import TextField from '@material-ui/core/TextField';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {

    marginRight: theme.spacing(2),
  },
  textField:{
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  title: {
    flexGrow: 1,
  },
}));

const INITIAL = "INITIAL";
const LOGIN = "LOGIN";

export default function NavBar() {
  const classes = useStyles();
  //set the visitor upon login
  const { selectedVisitor, setSelectedVisitor } = React.useContext(VisitorContext);

  const handleVisitorChange = (selectedVisitor) => {
  //  setSelectedVisitor(selectedVisitor);
  console.log('selected_visitor', selectedVisitor)
  };

  //transition hook
  const { mode, transition, back } = useVisualMode(INITIAL);

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            BC Park
          </Typography>
          { mode === INITIAL && (
             <div>
               <Button color="inherit" onClick={() => transition(LOGIN)}>Login</Button>
               <Button variant="outlined" color="secondary">Register</Button>
             </div>
          )}
          {mode === LOGIN && 
            <div>
              <TextField
                size="small"
                id="outlined-email-input"
                label="Email"
                type="email"
                autoComplete="current-email"
                variant="outlined"
                value={selectedVisitor.email}
                onChange={(event) => setSelectedVisitor({...selectedVisitor, email: event.target.value})}
              />
              <TextField
                size="small"
                id="outlined-password-input"
                label="Password"
                autoComplete="current-password"
                variant="outlined"
                value={selectedVisitor.password}
                onChange={(event) => setSelectedVisitor({...selectedVisitor, password: event.target.value})}
              />
              <Button color="inherit" 
                onClick={handleVisitorChange(selectedVisitor)}>Submit</Button>
            </div>
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}