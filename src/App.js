import React from 'react';
import logo from './logo.svg';
import './App.css';

// importing components
import NavBar from './components/NavBar';
import TrailList from './components/TrailList';
import ParksList from './components/ParksList';
import Entry from "./components/EntryForm/Index";
import DateSelector from "./components/DateSelector";
// import useApplicationData from "../hooks/useApplicationData";
import ParkContext from "./hooks/ParkContext";
import DateContext from "./hooks/DateContext";
// import EntryForm from "components/EntryForm/Index"; 


// function App() {
//   return (
//     <div className="App">
//       <TrailList />
//     </div>
//   );
// }

// export default App;
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

  const [selectedDate, setSelectedDate] = React.useState();
  
  return (
    <main className="App">
      <nav>
        <NavBar />
      </nav>
        <div className='main-body'>
        <DateContext.Provider value={{selectedDate, setSelectedDate}}>
        <DateSelector></DateSelector>
          <ParkContext.Provider value={{park, setPark}}>
            <div>
              <ParksList/>
            { park.title && <TrailList />}
            <Entry/>
            </div>
          </ParkContext.Provider>
          </DateContext.Provider>
        </div>


      {/* // <h1>{ this.state.message }</h1> */}
      {/* // <button onClick={this.fetchData} > */}
      {/* //   Fetch Data */}
      {/* // </button>         */}
    </main>
  )
};