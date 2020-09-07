import React, { useEffect, useState } from 'react';

import './App.css';
//importing hooks
import useVisualMode from './hooks/UseVisualMode';
import useApplicationData from "./hooks/useApplicationData";
import ParkContext from "./hooks/ParkContext";
import DateContext from "./hooks/DateContext";
import VisitorContext from "./hooks/VisitorContext";
import TrailContext from "./hooks/TrailContext";

// importing components
import NavBar from './components/NavBar';
import TrailList from './components/TrailList';
import ParksList from './components/ParksList';
import MyBookings from './components/MyBookings';
import Entry from "./components/EntryForm/Index";
import DateSelector from "./components/DateSelector";
import Register from "./components/Register";
import Confirm from './components/Confirm';
import Login from './components/Login';
// import EntryForm from "components/EntryForm/Index"; 


const INITIAL = "INITIAL";
const REGISTER = "REGISTER";
const BOOKINGS = "BOOKINGS";
const FORM = "FORM";

// export default App;
export default function App() {

  const { state } = useApplicationData();
  console.log('app state:', state)

  const { mode, transition, back } = useVisualMode(INITIAL
    // onRegister ? REGISTER : INITIAL
  );
  
  const [park, setPark] = React.useState({});

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const [selectedTrail, setSelectedTrail] = React.useState({});

  const [selectedVisitor, setSelectedVisitor] = React.useState({});
  
  console.log('app:', state.parks )

  const onMyBookings = () => {
    transition(BOOKINGS);
  };
  
  return (
          <DateContext.Provider value={{selectedDate, setSelectedDate}}>
            <ParkContext.Provider value={{park, setPark}}>
            <TrailContext.Provider value={{selectedTrail, setSelectedTrail}}>
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
                        {/* <Confirm /> */}
                        <ParksList
                          parks={state.parks} 
                          // setPark={setPark}
                          >
                          {/* parks={state.parks}  */}
                          
                        </ParksList>

                        { park.name && (
                          <TrailList 
                            trails={state.trails}
                            pass_entries={state.pass_entries} onForm={() => transition(FORM)}
                          />
                        )}
                        
                         <Entry 
                          trails={state.trails}
                          date={selectedDate}
                          vistor={selectedVisitor}
                          />
                        
                        {/* {mode === FORM && (
                         <Entry />
                        )} */}

                    <MyBookings 
                      vistor={selectedVisitor}
                      // onNewBooking={() => transition(INITIAL)}
                    />
                    </div>
                  )}
                  { mode === REGISTER && (
                    <Register 
                      onSetVerify={() => transition(INITIAL)}
                    />
                  )}
                  {/* { mode === BOOKINGS && (
                    <MyBookings 
                      onNewBooking={() => transition(INITIAL)}
                    />
                  )} */}
                  {/* { mode === INITIAL && (
                    <Login 
                      visitors={state.visitors}
                      onMyBooking={() => transition(BOOKINGS)}
                    />
                  )} */}


                  {/* // <h1>{ this.state.message }</h1> */}
                  {/* // <button onClick={this.fetchData} > */}
                  {/* //   Fetch Data */}
                  {/* // </button>         */}
                </main>
              </VisitorContext.Provider>
              </TrailContext.Provider>
            </ParkContext.Provider>
          </DateContext.Provider>
  )
};