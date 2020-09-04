import { useState, useEffect, createContext, React } from 'react';

import axios from "axios";

import ParkContext from "./ParkContext";



export default function useApplicationData(){

  const [state, setState] = useState({
    parks: [],
    trails: [],
  });

  // getTrails = (id) => {
  //   useEffect(() => {
  //      axios.get('/api/parks'),
  //      axios.get(`/api/trails/${id}`)
  //     ])
  //     .then((all) => {
  //       setState({parks: all[0].data, trails: all[1].data});
  //     })
  //   }, [])
  // }
  

  useEffect(() => {

    Promise.all([
     axios.get('/api/parks'),
     axios.get('/api/trails')
    ])
    .then((all) => {
      setState({parks: all[0].data, trails: all[1].data});
    })
  }, [])

  
  return { state }
}
