import React from 'react'

const formatDate = (date) => {

  date = new Date(date)

  var monthNames = [
    "January", "February", "March",
    "April", "May", "June", "July",
    "August", "September", "October",
    "November", "December"
  ];

  var day = date.getDate();
  var monthIndex = date.getMonth();
  var year = date.getFullYear();

  return `${monthNames[monthIndex]} ${day}, ${year}`;

}


const Detail = (props) => {


  if (props.checkin && props.checkout) {
    return (
      <div className='description col-1-1'>
        <div className='title title--normal'>
          Best choices between {formatDate(props.checkin)} and {formatDate(props.checkout)}
        </div>
      </div>)
  }
  else {
    return (
      <div></div>
    )
  }


}

export default Detail
