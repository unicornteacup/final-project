import React from 'react';
import useVisualMode from '../hooks/UseVisualMode';
import VisitorContext from '../hooks/VisitorContext';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import Button from '@material-ui/core/Button';

import Login from './Login';
import Register from './Register';

import "./NavBar.scss";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,

  },
}));

const INITIAL = "INITIAL";
const LOGIN = "LOGIN";
const VERIFIED = "VERIFIED";
const REGISTER= "REGISTER";

export default function NavBar(props) {
  const classes = useStyles();
  
  //transition hook
  const { selectedVisitor, setSelectedVisitor } = React.useContext(VisitorContext);

  const { mode, transition, back } = useVisualMode(INITIAL);
    if (selectedVisitor.email && mode === INITIAL) {
      transition(VERIFIED)
    }

    const logOut = () => {
      setSelectedVisitor({});
      transition(INITIAL);
    };

  return (

    <div class = 'navbar' className={classes.root}>
      <AppBar 
      color='transparent'
      position = 'relative'>
        <img src='/images/logo.png'></img>
        <Toolbar>
          { mode === VERIFIED && (
            <div>
              <strong>{selectedVisitor.email}</strong>
              <Button color="primary"
                onClick={() => logOut()}>Log Out</Button>
            </div>
          )}
          { mode === INITIAL && (
             <div>
               <Button color="inherit" onClick={() => transition(LOGIN)}>Login</Button>
               <Button 
                variant="outlined" 
                color="secondary"
                onClick={() => props.onRegister()}
                >
                  Register</Button>
             </div>
          )}
          { mode === LOGIN && 
            <Login 
              visitors={props.visitors}
            />
          }
        </Toolbar>
      </AppBar>
    </div>
  );
}