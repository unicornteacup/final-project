import React from "react";
import Form from "./Form";
import AlertDialog from "./FormFeedback";
import DateContext from "../../hooks/DateContext";
import VisitorContext from '../../hooks/VisitorContext';
import TrailContext from '../../hooks/TrailContext';
import useVisualMode from '../../hooks/UseVisualMode';
import Grid from '@material-ui/core/Grid';


const SAVING = "SAVING";
const INITIAL = "INITIAL";

export default function Entry(props) {
  const [open, setOpen] = React.useState(false);
  const {date: selectedDate} = React.useContext(DateContext);
  const { visitor: selectedVisitor } = React.useContext(VisitorContext);

  const { trail: selectedTrail } = React.useContext(TrailContext);

  const { mode, transition, back } = useVisualMode(INITIAL);
  console.log("index props:", props)


  // open popup to confirm saved
  const handleClickOpen = () => {
    setOpen(true);
  };

  

  //function to save a newly created entry
  function onSave(selectedDate, selectedVisitor,selectedTrail, guestState) {
    const passentry = {
      visitorId: selectedVisitor.id,
      date: selectedDate,
      guests: guestState,
      trailId: selectedTrail.id
    }
    // transition(SAVING);
    console.log('passentry...........', passentry)

    // if (mode === EDIT) {
    //   props
    //   .editInterview(props.id, interview)
    //   .then(() => transition(SHOW))
    //   .catch(error => {
    //     transition(ERROR_SAVE, true)
    //   }); 
    // } else {    
      props.newPass(passentry)
      props.onSetVerify()
    }  
    
    return (
        <Grid container justify = "center" alignItems="center" height="100%">
          <Form
          back={props.back}
          onSave={onSave}
          />
          <AlertDialog
          onMyBookings={props.onMyBookings}
          open={open}
          park={props.park}
          setOpen={setOpen}
          />
        </Grid>
    )

  }


