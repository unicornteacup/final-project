import React from 'react';
import ParkContext from '../hooks/ParkContext';
import DateContext from '../hooks/DateContext';



import TrailListItem from './TrailListItem';


export default function TrailList(props) {

  console.log('initialRecord', props.pass_entries)

  const selectedDateObj = React.useContext(DateContext);
  const parkObj = React.useContext(ParkContext);

  let date = selectedDateObj.selectedDate.setHours(0, 0, 0, 0);
  date = new Date(date)

  const filteredByDateEntries = props.pass_entries
  .filter((entry) => {
    const newDate = new Date(entry.date)
    return newDate.getDate() === date.getDate()
  })
  console.log('filtered', filteredByDateEntries)
  
  const trailList = props.trails
  .filter(trail => trail.park_id === parkObj.park.id)
  .map((trail) => {
      return (
        <TrailListItem
          key={trail.id}
          id={trail.id}
          date={date.toDateString()}
          name={trail.name}
          latitude={trail.latitude}
          longitude={trail.longitude}
          description={trail.description}
          status={trail.status}
          warning={trail.warning}
          max_capacity={trail.max_capacity}
          pass_entries={filteredByDateEntries}
          onSelect={props.onSelect}
          onForm={props.onForm}
        />
      )
      
  })
  return (
    <div> 
      {trailList}
    </div>
  );
}