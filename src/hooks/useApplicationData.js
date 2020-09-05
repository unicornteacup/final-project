import { useState, useEffect, createContext, React } from 'react';
import axios from "axios";

export default function useApplicationData(){

  const [state, setState] = useState({
    parks: [],
    trails: [],
    visitors: [],
    pass_entries: []
  });

  useEffect(() => {

    Promise.all([
    axios.get('/api/parks'),
    axios.get('/api/trails'),
    axios.get('/api/visitors'),
    axios.get('api/pass_entries')
    ])
    .then((all) => {
      setState({
        parks: all[0].data, 
        trails: all[1].data.trails,
        visitors: all[2].data.visitors,
        pass_entries: all[3].data.pass_entries
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
  
  return { state, cancelBooking }
}
