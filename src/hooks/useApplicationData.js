import { useState, useEffect, createContext, React } from 'react';
import axios from "axios";

export default function useApplicationData(){

  const [state, setState] = useState({
    parks: [],
    trails: [],
    visitors: [],
    pass_entries: [],
    mybookings: []
  });

  useEffect(() => {

    Promise.all([
    axios.get('/api/parks'),
    axios.get('/api/trails'),
    axios.get('/api/visitors'),
    axios.get('api/pass_entries'),
    axios.get('/api/mybookings')
    ])
    .then((all) => {
      setState({
        parks: all[0].data, 
        trails: all[1].data.trails,
        visitors: all[2].data.visitors,
        pass_entries: all[3].data.pass_entries,
        mybookings: all[4].data.pass_entries
      });
    })
  }, [])

  function cancelBooking(id, booking) {
    const pass = {
      ...state.pass_entries[id],
      booking: null
      };
      const passes = {
        ...state.pass_entries,
        [id]: pass
      };
     
    return axios.delete(`/api/pass_entries/${id}`)
    .then ((res) => {
  
      return setState({...state, passes: passes});

    }
  )}

  function onSave(id, booking) {

    const pass = {
      ...state.pass_entries[id],
      booking: null
      };
      const passes = {
        ...state.pass_entries,
        [id]: pass
      };

    return axios.put(`/api/pass_entries${id}`, {booking})
    .then ((res) => {
      console.log()
      return setState({...state, passes: passes});

    })
  }
  
  return { state, cancelBooking, onSave }
}
