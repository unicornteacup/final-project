import { useState, useEffect, createContext, React } from 'react';
import axios from "axios";


<<<<<<< HEAD
export default function useApplicationData(initial){

  // const [state, setState] = useState({
  //   park: "Cypress",
  //   trails: [],
  //   visitors: {},
  //   pass: {},
    
  // });

  const ParkContext = React.createContext("Cypress");

  // const setPark = park => setState({ ...state, park });

  React.useEffect(() => {

    Promise.all([
      Promise.resolve(axios.get('/api/parks')),
      Promise.resolve(axios.get('/api/trails')),
      Promise.resolve(axios.get('/api/visitors')),
      Promise.resolve(axios.get('/api/pass_entries')),
      Promise.resolve(axios.get('/api/mybookings'))
      Promise.resolve(axios.get('/api/guests'))
      // Promise.resolve(axios.get('/api/guests?id'))
    ])
    .then((all) => {
      setState((prev) => ({
        ...prev, 
        parks: all[0].data, 
        trails: all[1].data,
        visitors: all[2].data,
        pass_entries: all[3].data,
        mybookings: all[4].data,
        guests: all[4].data,

      }))
    });
  }, [])
  return { ParkContext};
}
=======
export default function useApplicationData(){

  const [state, setState] = useState({
    parks: [],
    trails: [],
    visitors: []
  });

  useEffect(() => {

    Promise.all([
     axios.get('/api/parks'),
     axios.get('/api/trails'),
     axios.get('/api/visitors')
    ])
    .then((all) => {
      setState({
        parks: all[0].data, 
        trails: all[1].data.trails,
        visitors: all[2].data.visitors
      });
    })
  }, [])

  
  return { state }
}
>>>>>>> ad6907f019ca57ea778e5a723b1ce01ea461ec1f
