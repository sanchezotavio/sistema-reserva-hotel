import React, { Component } from 'react'

import ReactDOM from 'react-dom'

import SearchBar from '../components/search'

import Detail from '../components/detail'

import ShowList from '../components/showList'

import Filter from '../components/filter'

import axios from 'axios'

class Home extends Component {

  constructor(props) {
    super(props)

    this.state = {
      shows: [],
      selectedShow: null,
      error: null,
      load: false
    }
    this.search = this.search.bind(this)
    this.filter = this.filter.bind(this)
  }

  search(checkin, checkout) {

    axios.get(`https://www.raphaelfabeni.com.br/rv/hotels.json`).then((response) => {

      var hotels = response.data.hotels

      console.log(hotels)

      for (var key in hotels) {
        if (hotels.hasOwnProperty(key)) {
          hotels[key].v = true
        }
      }

      this.setState({
        shows: hotels,
        in: checkin,
        out: checkout,
        error: null,
        load: true
      })

    }).catch((error) => {
      this.setState({
        error: error.response
      })
    })

  }

  filter(maxPrice, minPrice, starsRate) {      
    var newHotels = this.state.shows

    for (var data in newHotels) {
      if (newHotels[data].price <= maxPrice && newHotels[data].price >= minPrice) {
        if (starsRate > 0) {
          if (newHotels[data].rate == starsRate) {
            newHotels[data].v = true
          }
          else {
            newHotels[data].v = false
          }
        }
        else {
          newHotels[data].v = true
        }
      }
      else {
        newHotels[data].v = false
      }
    }

    this.setState({ shows: newHotels })

  }


  render() {
    if (this.state.error) {
      return (
        <div>  
          <div className='grid box'>
            <SearchBar onSearch={this.search} />
            <h1 style={{ color: 'red' }}>{this.state.error}</h1>
          </div>          
        </div>
      )
    }

    return (
      <div>     
        <div className='grid box'>
          <SearchBar onSearch={this.search} />
        </div>
        <div className='grid--header box'>
          <div className="col-1-1">
            <Detail checkin={this.state.in} checkout={this.state.out} />
          </div>
          <div className="col-3-12 mobile-col-1-1">
            <Filter load={this.state.load} onFilter={this.filter} />
          </div>
          <div className="col-9-12 mobile-col-1-1">
            <ShowList shows={this.state.shows} onShowSelect={(selectedShow) => this.setState({ selectedShow })} />
          </div>
        </div>        
      </div>
    )
  }

}

export default Home
