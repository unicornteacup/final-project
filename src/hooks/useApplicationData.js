import { useState, useEffect, createContext, React } from 'react';

import axios from "axios";

//Function to run axios calls, book, edit or cancel an interview

export default function useApplicationData(initial){

  const [state, setState] = useState({
    trails: "Hollyburn Trail",
  });

  const ParkContext = React.createContext("Cypress");

  // const setPark = park => setState({ ...state, park });

  React.useEffect(() => {

    Promise.all([
      Promise.resolve(axios.get('/api/home')),
      Promise.resolve(axios.get('/api/parks')),
      Promise.resolve(axios.get('/api/trails')),
      Promise.resolve(axios.get('/api/visitors')),
      Promise.resolve(axios.get('/api/pass')),
      Promise.resolve(axios.get('/api/mybookings'))
    ])
    .then((all) => {
      setState((prev) => ({
        ...prev, 
        home: all[0].data,
        parks: all[1].data, 
        trails: all[2].data,
        visitors: all[3].data,
        pass: all[4].data,
        mybooking: all[5].data,
      }))
    });
  }, [])
  return {state, ParkContext};
}