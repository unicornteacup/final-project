import React from "react";
import { makeStyles } from '@material-ui/core/styles';
// import DateContext from ".../hooks/DateContext";
// import TrailContext from "../hooks/TrailContext";

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
  },

}));

export default function Header(props) {
  const classes = useStyles();
  // const {selectedDate} = React.useContext(DateContext);

  return (
    <header className={classes.root}>
      <h4 className={classes.heading}>User</h4>
      {/* <hr className={classes.heading}>{selectedDate}</hr> */}
      {/* <hr className={classes.heading}>{selectedTrail}</hr> */}
    </header>
  )
}