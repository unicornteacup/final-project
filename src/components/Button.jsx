import React from "react";


import Classnames from "classnames";
import Button from '@material-ui/core/Button';


export default function BookingsButton(props) {
 
   return (
    <Button 
    variant="outlined" 
    color="secondary"
    onClick={() => props.onMyBookings()}
    >My Bookings</Button>
   );
 }