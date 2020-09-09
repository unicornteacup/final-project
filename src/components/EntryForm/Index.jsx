import React from "react";
import Form from "./Form";

import DateContext from "../../hooks/DateContext";
import VisitorContext from '../../hooks/VisitorContext';

import useVisualMode from '../../hooks/UseVisualMode';
// import TrailContext from ".../hooks/TrailContext";

const SAVING = "SAVING";
const INITIAL = "INITIAL";

export default function Entry(props) {

  const { date: selectedDate } = React.useContext(DateContext);
  const { visitor: selectedVisitor } = React.useContext(VisitorContext);

  const { mode, transition, back } = useVisualMode(INITIAL);

  //function to save a newly created entry
  function onSave(selectedDate, selectedVisitor,selectedTrail, guestState) {
    const passentry = {
      visitorId: selectedVisitor.id,
      date: selectedDate,
      guests: guestState,
      trailId: selectedTrail.id
    }
    console.log('save object', passentry)
    // transition(SAVING);

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
      <div>
        <Form
        back={props.back}
        onSave={onSave}
        />
      </div>
    )


  }


