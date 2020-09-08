import { useState, useEffect } from 'react';
import axios from "axios";

import useApplicationData from "./useApplicationData";

export default function Lottery() {

  const { state } = useApplicationData();

  // tomorrow Date
  let tomorrowDate = new Date;
  tomorrowDate.setDate(tomorrowDate .getDate() + 1);

  const nextDayEntries = state.pass_entries.filter(entry => entry.date = tomorrowDate);

  const trailEntries = state.trails.map((trail) => {
    return nextDayEntries.filter(({trail_id}) => trail_id === trail.id)
  })

  const maxCapacity = state.trails.map((trail) => {
    return trail.max_capacity
  })

  const updateWinners = (entry) => {
    axios.post('/update', { status: 'Success', id: entry.id })
  }

  const updateLosers = (entry) => {
    axios.post('/update', { status: 'Declined', id: entry.id })
  }

  const winners = (entries, resultEntries) => {
    //lottery is true if we have more users then resultUsers
    if (entries < resultEntries) return entries;
  
    let count = 0;
    //defining oldArray, because of splice, it will mutate initial state
    let oldArray = entries;
    let newArray = [];
    while (count < resultEntries) {
      //lottery itself :)
      const randomIndex = Math.floor(Math.random() * Math.floor(resultEntries));
      // because of mutation we can get undefined
      if (oldArray[randomIndex] !== undefined) {
        updateWinners(oldArray[randomIndex])

        newArray.push(oldArray[randomIndex]);


        oldArray.splice(randomIndex, 1)
        count++;
      }
    }
    oldArray.map((entry) => {
      updateLosers(entry);
    })
    return newArray;
  }
   

  return { trailEntries, maxCapacity, winners }
}
