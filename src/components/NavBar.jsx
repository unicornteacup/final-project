import React from 'react';
import useVisualMode from '../hooks/UseVisualMode';
import VisitorContext from '../hooks/VisitorContext';


import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

import Login from './Login';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {

    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

const INITIAL = "INITIAL";
const LOGIN = "LOGIN";

export default function NavBar() {
  const classes = useStyles();
  const selectedVisitorObj = React.useContext(VisitorContext);
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
          { mode === LOGIN && <Login /> }
        </Toolbar>
      </AppBar>
    </div>
  );
}