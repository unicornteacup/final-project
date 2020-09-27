import React from 'react';
import logo from './images/logo.png';
import './App.css';

//importing hooks
import useVisualMode from './hooks/UseVisualMode';
import useApplicationData from "./hooks/useApplicationData";
import ParkContext from "./hooks/ParkContext";
import DateContext from "./hooks/DateContext";
import VisitorContext from "./hooks/VisitorContext";
import TrailContext from "./hooks/TrailContext";

// import Lottery from "./hooks/Lottery";

// importing components
import NavBar from './components/NavBar';
import TrailList from './components/TrailList';
import ParksList from './components/ParksList';
import MyBookings from './components/MyBookings';
import Entry from "./components/EntryForm/Index";
import DateSelector from "./components/DateSelector";
import Register from "./components/Register";
import Confirm from './components/Confirm';
import Slider from './components/Slider';
// import EntryForm from "components/EntryForm/Index"; 

const INITIAL = "INITIAL";
const REGISTER = "REGISTER";
const CONFIRM = "CONFIRM";
const ENTRY_CONFIRM = "ENTRY_CONFIRM";
const BOOKINGS = "BOOKINGS";
const FORM = "FORM";

export default function App() {

  const { state, sendConfirmCode, codeValidation, cancelPass, newPass, newVisitor } = useApplicationData();

  const { mode, transition, back } = useVisualMode(INITIAL
    // onRegister ? REGISTER : INITIAL
  );
  
  const [park, setPark] = React.useState({});
  console.log('app park:', park)

  const [selectedDate, setSelectedDate] = React.useState(new Date());
  const [selectedTrail, setSelectedTrail] = React.useState({});
  const [selectedVisitor, setSelectedVisitor] = React.useState({});

  const home = () => {
    transition(INITIAL);
  };   

  const onMyBookings = () => {
    transition(BOOKINGS);
  };

  const newVisitorValidation = () => {
    newVisitor(selectedVisitor);
    transition(INITIAL);
  }
  const newFormValidation = () => {
    transition(INITIAL);
  }

  const img = <img style={{marginTop: 10}}src={logo}/>

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
                onMyBookings={onMyBookings}
                home={home}
                />
            </nav>
            { mode === INITIAL && (
              
            <div class="text">

            <Slider/>

            <div class='block'>

              <h2>Welcome to BC Parks and Recreation</h2>

              <h4> Some of our most popular parks regularly experience high visitor volumes, resulting in crowding of facilities, packed parking lots, and safety issues. To ensure the health and safety of our visitors and staff, to meet health and safety guidelines, and as part of a pilot project, free day-use passes are required to access the trails/parks below.</h4>
              </div>

              <div class='block'>
              <h2>Rules of the Lottery</h2>

              <h4>The Day-Pass will be assigned on a lottery-based system whereby visitors can apply.</h4>
              <h4>The deadline for each pass will be 2 days before the date for the hike at 12pm.</h4>
              <h4>(eg. For Saturday hike, the deadline is Thursday 12 pm) </h4>
              <h4> The visitor can sign-up for up to 7 guests with their names and phone numbers.</h4>
              <h4> Each pass will be entered into a random lottery system. An SMS text will notify the winners at 6:00 am 24 hours before the day of the hike with a link to QR codes to be shown to Park Rangers.</h4>
              </div>

              <div class='block'>
              <div class='how_to'>
              <h2>How to apply for a Hiking Day-Pass</h2>

              <h4> Step 1: Choose a date for your hike. </h4>
              <h4> Step 2: Choose a mountain. </h4>
              <h4> Step 3: Chose a trail. </h4>
              <h4> Step 4: To book for a pass, insert the information of your guests.  </h4>
              <h4> Step 5: Check My bookings to see the status of the pass. </h4>
              </div>
              </div>

              </div>
            )}
            { mode === INITIAL && (
              <div className='main-body'>
                <h2>Date Selector</h2>
                  <DateSelector></DateSelector>
                  <h2>Parks</h2>
                  <ParksList
                    parks={state.parks} 
                    // setPark={setPark}
                    >
                    {/* parks={state.parks}  */}
                    {/* {selectedVisitor.email &&(  */}

                    {/* )} */}
                  </ParksList>
                  { park.name && (
                    <TrailList 
                      trails={state.trails}
                      pass_entries={state.pass_entries} onForm={() => transition(FORM)}
                    />
                  )}
                  { selectedTrail.name && (
                    
                    <Entry 
                    visitors={state.visitors}
                    trails={state.trails}
                    date={selectedDate}
                    vistor={selectedVisitor}
                    park={setPark}
                    newPass={newPass}
                    back={back}
                    onMyBookings={onMyBookings}
                    />
                  )}
              </div>
            )}
            { mode === REGISTER && (
              <Register 
                visitors={state.visitors}
                onSetVerify={() => transition(CONFIRM)}
              />
            )}
            { mode === FORM && (
              <Entry 
              visitors={state.visitors}
              trails={state.trails}
              date={selectedDate}
              visitor={selectedVisitor}
              newPass={newPass}
              onSetVerify={() => transition(ENTRY_CONFIRM)}
              back={back}
              />
            )}
            { mode === CONFIRM && (
              <Confirm 
                sendConfirmCode={sendConfirmCode(selectedVisitor.phone)}
                codeValidation={codeValidation}
                onSuccess={() => newVisitorValidation()}
              />
            )}
            { mode === ENTRY_CONFIRM && (
              <Confirm 
                sendConfirmCode={sendConfirmCode(selectedVisitor.phone)}
                codeValidation={codeValidation}
                onSuccess={() => newFormValidation()}
              />
            )}
            { mode === BOOKINGS && (
              <MyBookings
                visitor={selectedVisitor}
                visitors={state.visitors}
                mybookings={state.mybookings}
                trails={state.trails}
                cancelPass={cancelPass} 
                onNewBooking={() => transition(INITIAL)}
                back={back}
                onMyBookings={onMyBookings}
              />
            )}
            <div class="closing">
            {img}
            </div>
            
          </main>
        </VisitorContext.Provider>
        </TrailContext.Provider>
      </ParkContext.Provider>
    </DateContext.Provider>
  )       
};