import React from "react";
import Form from "./Form";

// import DateContext from "...src/hooks/DateContext";
// import TrailContext from ".../hooks/TrailContext";

export default function Entry(props) {

  // const {selectedDate} = React.useContext(DateContext);

  // function to save a newly created entry
  // function save(name, interviewer) {
  //   const passentry = {
  //     visitor: name,
  //     interviewer
  //   }
  //   transition(SAVING);

  //   if (mode === EDIT) {
  //     props
  //     .editInterview(props.id, interview)
  //     .then(() => transition(SHOW))
  //     .catch(error => {
  //       transition(ERROR_SAVE, true)
  //     }); 
  //   } else {    
  //     props
  //     .bookInterview(props.id, interview)
  //     .then(() => transition(SHOW))
  //     .catch(error => {
  //       transition(ERROR_SAVE, true)
  //     }); 
  //   }   
  // }

  return (
    <div>
      <Form/>
    </div>
  )
}