import { useState, useEffect, createContext  } from 'react';

import axios from "axios";

//Function to run axios calls, book, edit or cancel an interview

export default function useApplicationData(initial){

  // const [state, setState] = useState({
  //   park: "Cypress",
  // });

  const ParkContext = React.createContext("Cypress");


  // const setPark = park => setState({ ...state, park });

  // useEffect(() => {

  //   Promise.all([
  //     Promise.resolve(axios.get('/api/days')),
  //     Promise.resolve(axios.get('/api/appointments')),
  //     Promise.resolve(axios.get('/api/interviewers'))
  //   ])
  //   .then((all) => {
  //     setState((prev) => ({...prev, days: all[0].data,
  //     appointments: all[1].data, interviewers: all[2].data}))
  //   });
  // }, [])
  return { ParkContext};
}