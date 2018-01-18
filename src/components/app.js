import React, { Component } from 'react'

import ReactDOM from 'react-dom'

import SearchBar from './search'

import Detail from './detail'

import ShowList from './showList'

import Header from './header'

import Footer from './footer'

import axios from 'axios'

class App extends Component {

  constructor (props) {
    super(props)
    
    this.state = {
      shows: [],
      selectedShow: null,
      error: null
    }
    this.search = this.search.bind(this)
  }

  search (checkin, checkout) {   
    axios.get(`https://www.raphaelfabeni.com.br/rv/hotels.json`).then((response) => {  
      console.log(response.data.hotels)  
      this.setState({
        shows: response.data.hotels,
        in: checkin,
        out: checkout,
        error: null
      })
    }).catch((error) => {
      this.setState({
        error: error.response
      })
    })
  }

  render () {
    if (this.state.error) {
      return (
        <div class="app">
          <Header />
          <div className='grid box'>
            <SearchBar onSearch={this.search} />
            <h1 style={{color: 'red'}}>{this.state.error}</h1>
          </div>
          <Footer text={`© 2004-${(new Date()).getFullYear()} Visit Charlotte. All Rights Reserved. 500 S. College Street, Suite 300, Charlotte, NC 28202`} />
        </div>
      )
    }

    return (
      <div class="app">
        <Header />
        <div className='grid box'>
          <SearchBar onSearch={this.search} />          
        </div>

        <div className='grid--header box'>

          <div className="col-1-1">
            <Detail checkin={this.state.in} checkout={this.state.out} />
          </div>
          
          <div className="col-3-12 mobile-1-1">
            filter
          </div>

          <div className="col-9-12 mobile-1-1">
            <ShowList shows={this.state.shows} onShowSelect={(selectedShow) => this.setState({selectedShow})} />
          </div>
         
        </div>

        <Footer text={`© 2004-${(new Date()).getFullYear()} Visit Charlotte. All Rights Reserved. 500 S. College Street, Suite 300, Charlotte, NC 28202`} />
      </div>
    )
  }
  
}

export default App
