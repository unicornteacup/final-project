import React from "react";
import Button from '@material-ui/core/Button';


export default function BookingsButton(props) {

console.log('bookings props:', props)
 
   return (
    <Button 
    variant="outlined" 
    color="secondary"
    onClick={() => props.onMyBookings()}
    >My Bookings</Button>
   );
 }