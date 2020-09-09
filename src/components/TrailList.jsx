import React, { useEffect, useState } from 'react';
import ParkContext from '../hooks/ParkContext';
import DateContext from '../hooks/DateContext';

import axios from 'axios';


import TrailListItem from './TrailListItem';

// const trails = [
//   {
//     id: 1,
//     name: 'Black Mountain Loop',
//     latitude: 49.395863, 
//     longitude: -123.203891,
//     image: 'https://lh3.googleusercontent.com/proxy/4IYcjfJoSXUE5e6d82I5euxlgku9v7r9vdnhyMjtVcoTg8vpfIoodcXlVJRyOYa641L4axcZ2114w3gsrGfvhoKDak_AE6lfoqtusIYdnPLVOaj_Sm8',
//     description: 'Black Mountain Loop: Length: 2.5 kilometres. Suggested time: just over 90 minutes. Elevation change: 100 metres. Situated astride Black Mountain Plateau, the trail winds through sub-alpine meadows, skirting the edges of several mountain lakes. Quoted length and time include the recommended side trips to enjoy the Yew Lake viewpoint and the Vancouver look-out.',
//     status: 'Open',
//     warning: 'No Warnings',
//     park_id: 1,
//     max_capacity: 50
//   },
//   {
//     id: 4,
//     name: 'Black Mountain Loop',
//     latitude: 49.395863, 
//     longitude: -123.203891,
//     image: 'https://lh3.googleusercontent.com/proxy/4IYcjfJoSXUE5e6d82I5euxlgku9v7r9vdnhyMjtVcoTg8vpfIoodcXlVJRyOYa641L4axcZ2114w3gsrGfvhoKDak_AE6lfoqtusIYdnPLVOaj_Sm8',
//     description: 'Black Mountain Loop: Length: 2.5 kilometres. Suggested time: just over 90 minutes. Elevation change: 100 metres. Situated astride Black Mountain Plateau, the trail winds through sub-alpine meadows, skirting the edges of several mountain lakes. Quoted length and time include the recommended side trips to enjoy the Yew Lake viewpoint and the Vancouver look-out.',
//     status: 'Closed',
//     warning: 'Warning',
//     park_id: 1,
//     max_capacity: 50
//   },
//   {
//     id: 2,
//     name: 'Some other trail',
//     latitude: 43.395863, 
//     longitude: -126.203891,
//     image: 'https://lh3.googleusercontent.com/proxy/4IYcjfJoSXUE5e6d82I5euxlgku9v7r9vdnhyMjtVcoTg8vpfIoodcXlVJRyOYa641L4axcZ2114w3gsrGfvhoKDak_AE6lfoqtusIYdnPLVOaj_Sm8',
//     description: 'some description',
//     status: 'Open',
//     warning: 'No Warnings',
//     park_id: 1,
//     max_capacity: 100
//   },
//   {
//     id: 3,
//     name: 'Some other trail_2',
//     latitude: 40.395863, 
//     longitude: -116.203891,
//     image: 'https://lh3.googleusercontent.com/proxy/4IYcjfJoSXUE5e6d82I5euxlgku9v7r9vdnhyMjtVcoTg8vpfIoodcXlVJRyOYa641L4axcZ2114w3gsrGfvhoKDak_AE6lfoqtusIYdnPLVOaj_Sm8',
//     description: 'some description',
//     status: 'Closed',
//     warning: 'Warning',
//     park_id: 2,
//     max_capacity: 20
//   },
// ]

export default function TrailList(props) {

  console.log('initialRecord', props.pass_entries)

  const selectedDateObj = React.useContext(DateContext);
  const parkObj = React.useContext(ParkContext);


  const filteredByDateEntries = props.pass_entries
  .filter(entry => entry.date = selectedDateObj.selectedDate.toDateString())

  console.log('filter', filteredByDateEntries)

  
  const trailList = props.trails
  .filter(trail => trail.park_id === parkObj.park.id)
  .map((trail) => {
      return (
        <TrailListItem
          date={selectedDateObj}
          id={trail.id}
          name={trail.name}
          latitude={trail.latitude}
          longitude={trail.longitude}
          description={trail.description}
          status={trail.status}
          warning={trail.warning}
          max_capacity={trail.max_capacity}
          pass_entries={filteredByDateEntries}
        />
      )
      
  })
  return (
    <div> 
      {trailList}
    </div>
  );
}