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
    axios.post('/confirmation', { to: phone })
  }

  function codeValidation(code) {
    axios.post('/verification', { code: code })
    .then((res) => {
      console.log(res.data.success)
      console.log(code)
      if (res.data.success === 'false') {
        return false
      } else {
        return true
      }
    })
  }

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
        my_bookings: all[4].data
      });
    })
  }, [])

  
  return { state,  sendConfirmCode, codeValidation }
}
