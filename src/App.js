import React, { useEffect, useState } from 'react';

import './App.css';
//importing hooks
import useVisualMode from './hooks/UseVisualMode';
import useApplicationData from "./hooks/useApplicationData";
import ParkContext from "./hooks/ParkContext";
import DateContext from "./hooks/DateContext";
import VisitorContext from "./hooks/VisitorContext";

// importing components
import NavBar from './components/NavBar';
import TrailList from './components/TrailList';
import ParksList from './components/ParksList';
import Entry from "./components/EntryForm/Index";
import DateSelector from "./components/DateSelector";
import Register from "./components/Register";
import Confirm from './components/Confirm';
import Slider from './components/Slider';
// import EntryForm from "components/EntryForm/Index"; 

import "./components/NavBar.scss";

const INITIAL = "INITIAL";
const REGISTER = "REGISTER";

// export default App;
export default function App() {

  const { state } = useApplicationData();

  const { mode, transition, back } = useVisualMode(INITIAL
    // onRegister ? REGISTER : INITIAL
  );
  
  const [park, setPark] = React.useState({});

  const [selectedDate, setSelectedDate] = React.useState(new Date());

  const [selectedVisitor, setSelectedVisitor] = React.useState({});
  
  
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

            <Slider/>
            <h2>Welcome to Hiking Day-Pass Program for BC Parks</h2>
            <h5> Some of our most popular parks regularly experience high visitor volumes, resulting in crowding of facilities, packed parking lots, and safety issues.To ensure the health and safety of our visitors and staff, to meet health and safety guidelines, and as part of a pilot project, free day-use passes are required to access the trails/parks below.</h5>
            
            <h4>Step 1: Choose a date for your hike. </h4>
            <h4> Step 2: Choose a mountain.</h4>
            <h4>Step 3: Chose a trail.</h4>
            <h4>Step 4: To book for a pass, insert your guests' information.</h4>
           
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
                      pass_entries={state.pass_entries}
                    />
                  )}
                  {/* <Entry/> */}
              </div>
            )}
            { mode === REGISTER && (
              <Register 
                onSetVerify={() => transition(INITIAL)}
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