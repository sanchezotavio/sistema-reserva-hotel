import React from 'react'

import ScrollableAnchor from 'react-scrollable-anchor'

const formatDate = (date) => {

  date = new Date(date)

  let monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  let day = date.getDate();
  let monthIndex = date.getMonth();
  let year = date.getFullYear();

  return `${monthNames[monthIndex]} ${day}, ${year}`;

}


const Detail = (props) => {
  if (props.checkin && props.checkout) {
    return (
      <ScrollableAnchor id={'detail'}>
        <div className='description col-1-1'>
          <div className='title title--normal'>
            Best choices between {formatDate(props.checkin)} and {formatDate(props.checkout)}
          </div>
        </div>
      </ScrollableAnchor>  
      )
  }
  else {
    return (
      <div></div>
    )
  }
}

export default Detail
