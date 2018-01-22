import React from 'react';

import {Link} from 'react-router'

class Header extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false
    }
  }

  handleError() {
    this.setState({
      error: true
    })
  }

  render() {
    return (
      <header className="header">
        <div className="bg"></div>
        <nav className="nav grid--header">
          <ul className="menu">       
            <li className="item"><Link to={`/about`} className="link">The Queen city</Link></li>
            <li className="item"><Link to={`/reservations`} className="link">My Reservations</Link></li>
            <li className="item"><Link to={`/guide`} className="link">Guide</Link></li>
          </ul>
        </nav>
        <div className="header__title grid">
          <span className="icon-crown"></span>
          <h2 className="title title--welcome">WELCOME TO</h2>
          <h1 className="title title--main lines">CHARLOTTE</h1>
          <h3 className="title title--sub">THE QUEEN CITY</h3>
        </div>
      </header>
    );
  }
}

export default Header;