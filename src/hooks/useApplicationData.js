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
    axios.get('/api/pass_entries'),
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

  function cancelPass(id, booking) {
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

  function newPass(passentry) {

    // const pass = {
    //   ...state.pass_entries[id]
    //   };
    //   const passes = {
    //     ...state.pass_entries,
    //     [id]: pass
    //   };

    return axios.post(`/api/pass_entries`, {passentry})
    .then ((res) => {
      console.log('useappdatapostres:', res)
      // return setState({...state, passes: passes});

      //need a .then to do the put request into the guest table

    })
  }
  
  return { state, cancelPass, newPass }
}
