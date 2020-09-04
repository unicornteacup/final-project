import { useState, useEffect, createContext, React } from 'react';

import axios from "axios";


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
