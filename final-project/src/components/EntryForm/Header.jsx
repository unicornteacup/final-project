import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import DateContext from "../hooks/DateContext";
import TrailContext from "../hooks/TrailContext";

const useStyles = makeStyles((theme) => ({
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },

}));

export default function Header(props) {

  const {selectedDate} = React.useContext(DateContext);

  return (
    <header className={classes.root}>
      <h4 className={classes.heading}>{selectedDate}</h4>
      <hr className={classes.heading}>{selectedTrail}</hr>
    </header>
  )
}