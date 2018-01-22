import React from 'react';
import ShowItem from './showItem';

const ShowList = (props) => {
  var hotel = 0
  const shows = props.shows.map((show) => {
    if (show.name) {
      hotel++
      return <ShowItem show={show} key={`hotel-${hotel}`} onShowSelect={props.onShowSelect} />
    }
  });
  return (
    <div className="hotels">
      {shows}
    </div>
  );
}

export default ShowList;