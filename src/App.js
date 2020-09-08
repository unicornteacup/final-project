import React, { useEffect, useState } from 'react';

import './App.css';
//importing hooks
import useVisualMode from './hooks/UseVisualMode';
import useApplicationData from "./hooks/useApplicationData";
import ParkContext from "./hooks/ParkContext";
import DateContext from "./hooks/DateContext";
import VisitorContext from "./hooks/VisitorContext";

// import Lottery from "./hooks/Lottery";


// importing components
import NavBar from './components/NavBar';
import TrailList from './components/TrailList';
import ParksList from './components/ParksList';
import Entry from "./components/EntryForm/Index";
import DateSelector from "./components/DateSelector";
import Register from "./components/Register";
import Confirm from './components/Confirm';
// import EntryForm from "components/EntryForm/Index"; 


const INITIAL = "INITIAL";
const REGISTER = "REGISTER";
const CONFIRM = "CONFIRM";
// export default App;
export default function App() {

  const { state, sendConfirmCode, codeValidation } = useApplicationData();

  const { mode, transition, back } = useVisualMode(INITIAL
    // onRegister ? REGISTER : INITIAL
  );
  
  const [park, setPark] = React.useState({});

  const [selectedDate, setSelectedDate] = React.useState({});
  const [selectedVisitor, setSelectedVisitor] = React.useState({});

  // const lottery = Lottery()
  // lottery()
  
  
  return (
          <DateContext.Provider value={{selectedDate, setSelectedDate}}>
            <ParkContext.Provider value={{park, setPark}}>
              <VisitorContext.Provider value={{selectedVisitor, setSelectedVisitor}}>
                <main className="App">
                  <nav>
                    <NavBar
                      visitors={state.visitors}
                      onRegister={()=> transition(REGISTER)}
                    />
                  </nav>
                  { mode === INITIAL && (
                    <div className='main-body'>
                        <DateSelector></DateSelector>
                        <ParksList
                          parks={state.parks} 
                          // setPark={setPark}
                          >
                          {/* parks={state.parks}  */}
                          
                        </ParksList>
                        { park.name && (
                          <TrailList 
                            trails={state.trails}
                            pass_entries={state.pass_entries}
                          />
                        )}
                        {/* <Entry/> */}
                    </div>
                  )}
                  { mode === REGISTER && (
                    <Register 
                      visitors={state.visitors}
                      onSetVerify={() => transition(CONFIRM)}
                    />
                  )}
                  { mode === CONFIRM && (
                    <Confirm 
                      sendConfirmCode={sendConfirmCode(selectedVisitor.phone)}
                      codeValidation={codeValidation}
                      onSuccess={() => transition(INITIAL)}
                    />
                  )}


                  {/* // <h1>{ this.state.message }</h1> */}
                  {/* // <button onClick={this.fetchData} > */}
                  {/* //   Fetch Data */}
                  {/* // </button>         */}
                </main>
              </VisitorContext.Provider>
            </ParkContext.Provider>
          </DateContext.Provider>
  )
};