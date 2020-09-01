import React from 'react';
// import axios from 'axios';
import './App.css';
import ParksList from "./ParksList";
// import DateSelector from "./DateSelector";
// import useApplicationData from "../hooks/useApplicationData";
import ParkContext from "../hooks/ParkContext";
// import EntryForm from "components/EntryForm/Index"; 

export default function App(props) {


  // const {
  //   // state,
  //   // setPark,
  //   ParkContext
  // } = useApplicationData();
  console.log('context:', ParkContext)

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
  
  const [park, setPark] = React.useState({});
  
  return (
    <main className="App">
      <nav>
        {/* placegolder for nav bar */}
      </nav>
        <div className='main-body'>
          {/* <DateSelector></DateSelector> */}
          <ParkContext.Provider value={{park, setPark}}>
            <ParksList
              // park={state.park} 
              // setPark={setPark}
              >
              {/* parks={state.parks}  */}
              
            </ParksList>
          </ParkContext.Provider>

        </div>






      {/* // <h1>{ this.state.message }</h1> */}
      {/* // <button onClick={this.fetchData} > */}
      {/* //   Fetch Data */}
      {/* // </button>         */}
    </main>
  )
};
