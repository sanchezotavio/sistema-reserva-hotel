import React, { Component } from 'react'

import ReactDOM from 'react-dom'

import Header from './header'

import Footer from './footer'

class App extends Component {

  constructor(props) {
    super(props)

    this.state = {
      error: ''
    }  
  }

  render() {  
    return (
      <div class="app">
        <Header />
        {this.props.children}
        <Footer text={`© 2004-${(new Date()).getFullYear()} Visit Charlotte. All Rights Reserved. 500 S. College Street, Suite 300, Charlotte, NC 28202`} />
      </div>
    )
  }

}

export default App
