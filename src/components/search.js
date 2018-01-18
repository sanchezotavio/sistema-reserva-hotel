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
        <header className="header"><h4 className="title filter__title">Select the dates to stay in Charlotte</h4></header>

        <div className="col-1-2 mobile-col-1-1">
        <div>
           CHECK-IN
          <div>
            {formatDate(this.state.checkin)}
          </div>
        </div>
        <div>
           CHECK-OUT
          <div>
           {formatDate(this.state.checkout)}
          </div>
        </div>
        <form className='search' onSubmit={this.onSubmit.bind(this)}>
         
          <span className='search__group'><button className='search__button' type='submit'> Buscar </button></span>
        </form>
        </div>
        <div className="col-1-2 mobile-col-1-1">
        <InfiniteCalendar         
          minDate={lastWeek}
          Component={withRange(Calendar)}         
            onSelect={function(date) {
              if(date.eventType == 3){
                refreshDate(date)                        
              }                      
          }}      
          displayOptions={{
            showHeader: false
          }}           
        />
        </div>
      </section>
    )
  }
}

export default Search
