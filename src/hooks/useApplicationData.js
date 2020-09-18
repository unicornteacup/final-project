import { useState, useEffect } from 'react';
import axios from "axios";

export default function useApplicationData(){

  const [state, setState] = useState({
    parks: [],
    trails: [],
    visitors: [],
    pass_entries: [],
    my_bookings: []
  });

  function sendConfirmCode(phone) {
    return axios.post('/confirmation', { to: phone })
  }

  function codeValidation(code) {
    return axios.post('/verification', { code: code })
    .then((res) => {
      if (res.data.success === false) {
        return false
      } else {
        return true
      }
    })
  }

  function newVisitor(visitor) {
    return axios.post('api/visitors', ( visitor ));
  }

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
        mybookings: all[4].data
      });
    })
  }, [])

  function cancelPass(passId, guestsId) {
    // const pass = {
    //   ...state.pass_entries[id],
    //   booking: null
    //   };

    //   const passes = {
    //     ...state.pass_entries,
    //     [id]: pass
    //   };
     
    return Promise.all([
      axios.delete(`/api/guests/${guestsId}`),
      axios.delete(`/api/pass_entries/${passId}`)
    ])
    .then((all) => {
      // setState({
      //   parks: all[0].data, 
      //   trails: all[1].data.trails,
      //   visitors: all[2].data.visitors,
      //   pass_entries: all[3].data.pass_entries,
      //   mybookings: all[4].data
      // });
    })
  }

  function newPass(passentry) {
    const { visitorId, trailId, date, guests } = passentry
    console.log('.......', visitorId)
    return axios.post(`/api/pass_entries`, { visitorId, trailId, date, guests })
    .then ((res) => {
      let id = res.data.id
      let newBooking = {...state.bookings, [id]: passentry}
      // return setState({...state, passes: passes});
      setState(prev => {
        let mybookings = {...prev.mybookings, [id]: newBooking};
        let passentries = {...prev.passentries, [id]: newBooking};
        return {...prev, mybookings, ...prev, passentries}
      });
    })
  }
  
  return { state, cancelPass, newPass, sendConfirmCode, codeValidation, newVisitor }
}
