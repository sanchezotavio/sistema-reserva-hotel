import React from 'react';
import ShowItem from './showItem';

const ShowList = (props) => {
  const shows = props.shows.map((show) => {
    if(show.snippet) {
      return <ShowItem show={show} key={show.id.videoId} onShowSelect={props.onShowSelect} />
    }
  });
  return (
    <div className="hotels">
      {shows}
    </div>
  );
}

export default ShowList;