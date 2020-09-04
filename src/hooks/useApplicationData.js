import { useState, useEffect, React } from 'react';

import axios from "axios";

//Function to run axios calls, book, edit or cancel an interview

export default function useApplicationData(initial){

  const [state, setState] = useState({
    trails: "Hollyburn Trail",
  });


  // const setPark = park => setState({ ...state, park });

  useEffect(() => {

    Promise.all([
      Promise.resolve(axios.get('http://localhost:8080/api/home')),
      Promise.resolve(axios.get('http://localhost:8080/api/parks')),
      Promise.resolve(axios.get('http://localhost:8080/api/trails')),
      Promise.resolve(axios.get('http://localhost:8080/api/visitors')),
      Promise.resolve(axios.get('http://localhost:8080/api/pass')),
      Promise.resolve(axios.get('http://localhost:8080/api/mybookings'))
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
  return {state};
}