import React, { Component } from 'react';
import axios from 'axios';
import './App.css';
import Parkslist from "./ParksList";
// import EntryForm from "components/EntryForm/Index"; 

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      message: 'Click the button to load data!'
    }
  }

  fetchData = () => {
    axios.get('/api/data') // You can simply make your requests to "/api/whatever you want"
    .then((response) => {
      // handle success
      console.log(response.data) // The entire response from the Rails API

      console.log(response.data.message) // Just the message
      this.setState({
        message: response.data.message
      });
    }) 
  }

  render() {
    return (
      <main className="App">
        <nav>
          {/* placegolder for nav bar */}
        </nav>
          <div class='main-body'>
            <Parkslist>
              {/* parks={state.parks} 
              park={state.park} 
              setPark={setPark} /> */}
            </Parkslist>
          </div>






        // <h1>{ this.state.message }</h1>
        // <button onClick={this.fetchData} >
        //   Fetch Data
        // </button>        
      </main>
    );
  }
}

export default App;
