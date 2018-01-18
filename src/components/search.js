import React from 'react'

import InfiniteCalendar, {Calendar,withRange} from 'react-infinite-calendar';


const   formatDate = (date) => {
  
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

  return  `${monthNames[monthIndex]} ${day}, ${year}`;

}


const   formatCalendar = (date) => {
  
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

  return  `${monthNames[monthIndex]} / ${year}`;

}

  
class Search extends React.Component {

  constructor (props) {
    super(props)
    this.state = { 
      term: '',
      checkin: '',
      checkout: ''
   }
  }

  onSubmit (event) {
    event.preventDefault()
    this.props.onSearch(this.state.checkin, this.state.checkout)
  }

  onChange (value) {
    this.setState({term: value})
  }

  componentDidMount() {
    var today = new Date();
    this.setState({checkin: today.toString()})  
    this.setState({checkout: today.toString()})    
}

  render () {

    var today = new Date();

    var next = new Date(2018, 2, 1)

    var lastWeek = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  
    var refreshDate = (date) => {

      var checkinDate = date.start
      var checkoutDate =  date.end

      this.setState({checkin: checkinDate.toString()})
      this.setState({checkout: checkoutDate.toString()})

    }

    return (
      <section className="filter"> 

        <header className="header"><h4 className="title title--normal filter__title">Select the dates to stay in Charlotte</h4></header>

        <div className="col-1-2 mobile-col-1-1">
        <div className="search__check">
           CHECK-IN
          <div className="search__label">
            {formatDate(this.state.checkin)}
          </div>
        </div>
        <div className="search__check">
           CHECK-OUT
          <div className="search__label">
           {formatDate(this.state.checkout)}
          </div>
        </div>
        <form className='search' onSubmit={this.onSubmit.bind(this)}>         
         <button className='button' type='submit'> Search hotel </button>
        </form>
        </div>
        <div className="col-1-2 mobile-col-1-1">
        <div className="calendar__header">
          {formatCalendar(this.state.checkin)} -  {formatCalendar(this.state.checkout)}
        </div>
        <InfiniteCalendar 
          minDate={lastWeek}
          Component={withRange(Calendar)}         
            onSelect={function(date) {
              if(date.eventType == 3){
                refreshDate(date)                        
              }                      
          }} 
          height={350}
          displayOptions={{
            showHeader: false
          }}
          theme={{
            selectionColor: '#79BD1A',
            textColor: {
              default: '#333',
              active: '#FFF'
            },
            weekdayColor: '#fff',
            headerColor: '#fff',
            floatingNav: {
              background: '#79BD1A',
              color: '#FFF',
              chevron: '#79BD1A'
            },
            
            
         }}           
        />
        </div>
      </section>
    )
  }
}

export default Search
