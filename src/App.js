import React from 'react';
import logo from './logo.svg';
import './App.css';

import useVisualMode from './hooks/UseVisualMode';


// importing components
import NavBar from './components/NavBar';
import TrailList from './components/TrailList';
import ParksList from './components/ParksList'
import DateSelector from "./components/DateSelector";
import Register from "./components/Register";
// import useApplicationData from "../hooks/useApplicationData";
import ParkContext from "./hooks/ParkContext";
import DateContext from "./hooks/DateContext";
import VisitorContext from "./hooks/VisitorContext";
// import EntryForm from "components/EntryForm/Index"; 


// function App() {
//   return (
//     <div className="App">
//       <TrailList />
//     </div>
//   );
// }


const INITIAL = "INITIAL";
const REGISTER = "REGISTER";
// export default App;
export default function App(props) {


  // const {
  //   // state,
  //   // setPark,
  //   ParkContext
  // } = useApplicationData();
  console.log('props', props)

  // fetchData = () => {
  //   axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
  //   .then((response) => {
  //     // handle success
  //     console.log(response.data) // The entire response from the Rails API

  //     console.log(response.data.message) // Just the message
  //     this.setState({
  //       message: response.data.message
  //     });
  //   }) 
  // }

  const { mode, transition, back } = useVisualMode(INITIAL
    // onRegister ? REGISTER : INITIAL
  );
  
  const [park, setPark] = React.useState({});

  const [selectedDate, setSelectedDate] = React.useState({});
  const [selectedVisitor, setSelectedVisitor] = React.useState({});
  
  return (
          <DateContext.Provider value={{selectedDate, setSelectedDate}}>
            <ParkContext.Provider value={{park, setPark}}>
              <VisitorContext.Provider value={{selectedVisitor, setSelectedVisitor}}>
                <main className="App">
                  <nav>
                    <NavBar 
                      onRegister={()=> transition(REGISTER)}
                    />
                  </nav>
                  { mode === INITIAL && (
                    <div className='main-body'>
                        <DateSelector></DateSelector>
                        <ParksList
                          // park={park} 
                          // setPark={setPark}
                          >
                          {/* parks={state.parks}  */}
                          
                        </ParksList>
                        { park.title && <TrailList />}
                    </div>
                  )}
                  { mode === REGISTER && (
                    <Register />
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