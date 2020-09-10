import React from 'react';
import useVisualMode from '../hooks/UseVisualMode';
import VisitorContext from '../hooks/VisitorContext';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Button from '@material-ui/core/Button';


import Login from './Login';
import LotterySwitch from './LotterySwitch';

import "./NavBar.scss";
import logo from '../images/logo.png'; 

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
const VERIFIED = "VERIFIED";

export default function NavBar(props) {
  const classes = useStyles();
  
  //transition hook
  const { selectedVisitor, setSelectedVisitor } = React.useContext(VisitorContext);

  const { mode, transition } = useVisualMode(INITIAL);
    if (selectedVisitor.email && mode === INITIAL) {
      transition(VERIFIED)
    }

    const logOut = () => {
      setSelectedVisitor({});
      transition(INITIAL);
    };

    const img = <img style={{marginTop: 10}}src={logo} alt="BC Parks" onClick={() => props.home()}/>

  return (
      < AppBar 
      color='transparent'
      position= 'static'>

      <Toolbar>
        <div class="nav_left">
      {img}
      <LotterySwitch />
      </div>

          { mode === VERIFIED && (
            <div class='logged_in'>

              <div class='email'>
              <strong>{selectedVisitor.email}</strong>
                </div>
              <div class= "logout">
              <Button 
              variant="outlined" 
              color="secondary"
              onClick={() => props.onMyBookings()}
              >My Bookings</Button>
              <Button  
                variant="outlined" 
                color="primary"
                onClick={() => logOut()}>Log Out</Button>
              </div>
              <LotterySwitch />
            </div>
           
          )}
  
          { mode === INITIAL && (
            <div class='log_reg'>
             <div class= 'login_button'>
               <Button 
                variant="outlined" 
                color="primary" 
                onClick={() => transition(LOGIN)}>Login</Button>
               </div>

               <div class= 'register_button'>
               <Button
                variant="outlined" 
                color="primary"
                onClick={() => props.onRegister()}>Register</Button>
               </div>
             </div>
          )}
          { mode === LOGIN && 
            <Login 
              visitors={props.visitors}
              onMyBookings={props.onMyBookings}
            />
          }
        </Toolbar>
      </AppBar>

  );
}