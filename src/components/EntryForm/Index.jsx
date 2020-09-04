import React from "react";
import Form from "./Form";

import DateContext from "...src/hooks/DateContext";
import VisitorContext from '../../hooks/VisitorContext';
// import TrailContext from ".../hooks/TrailContext";

export default function Entry(props) {

  const {selectedDate} = React.useContext(DateContext);
  const { visitor: selectedVisitor } = React.useContext(VisitorContext);

  //function to save a newly created entry
  function save(selectedDate, selectedVisitor.id, guestState, props.trail.id) {
    const passentry = {
      visitor: selectedVisitor.id,
      date: selectedDate,
      guests: guestState,
      trail: props.trail.id
    }
    transition(SAVING);

    // if (mode === EDIT) {
    //   props
    //   .editInterview(props.id, interview)
    //   .then(() => transition(SHOW))
    //   .catch(error => {
    //     transition(ERROR_SAVE, true)
    //   }); 
    // } else {    
      props
      .newPass(passentry)
      .then(() => transition(INITIAL))
      .catch(error => {
        // transition(ERROR_SAVE, true)
      }); 
    }   
  }

  return (
    <div>
      <Form/>
    </div>
  )
}