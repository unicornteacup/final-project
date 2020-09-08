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

  // updateEntry = (entry) => {
  //   axios.post('/update', { status: 'success', id: entry.id })
  // }

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
        // updateEntry(oldArray[randomIndex])

        newArray.push(oldArray[randomIndex]);


        oldArray.splice(randomIndex, 1)
        count++;
      }
    }
    return newArray;
  }

  const all = trailEntries.map((entries) => {
    return winners(entries, maxCapacity[trailEntries.indexOf(entries)])
  })

  // updateEntry = (entries) => {
  //   entries.forEach((entry) => {
  //     axios.post('/update', { status: 'success', id: entry.id })
  //   })
  // }

  return { nextDayEntries, trailEntries, maxCapacity, all }

  
}
