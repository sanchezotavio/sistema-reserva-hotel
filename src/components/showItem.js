import React from 'react';

import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

const hiddenClass = (status) => {
  if (status) {
    return 'hidden'
  }
  else {
    return 'visible--g'
  }
}


const starRate = (rate) => {
  let stars = [];

  for (var i = 1; i <= rate; i++) {
    stars.push(<div className="icon-star"></div>)
  }

  return stars
}

const replaceJson = (data) => {

  for (var key in data) {
    if (data.hasOwnProperty(key)) {
      data[key].name = data[key].month
      data[key].price = data[key].value
    }
  }

  return data
}

class ShowItem extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      error: false,
      history: false
    }

    this.handleClick = this.handleClick.bind(this);
    this.bookHotel = this.bookHotel.bind(this);
  }


  handleError() {
    this.setState({
      error: true
    })
  }

  handleClick() {
    this.setState(prevState => ({
      history: !prevState.history
    }));
  }

  bookHotel() {    
    console.log(this.props.show)
  }

  render() {


    var test = this.props.show.price_history

    var data = replaceJson(test)

    if (this.state.error) {
      return null;
    }
    return (
      <div className={`col-1-1 ${hiddenClass(!this.props.show.v)}`}>
        <div className="hotel col-1-1" >
          <div className="col-3-12 ">
            <img className="image" src={this.props.show.image} alt={this.props.show.name} onError={() => this.handleError()} />
          </div>
          <div className={`col-6-12  ${hiddenClass(this.state.history)}`}>
            <div className="line-right">
              <div className="rate">{starRate(this.props.show.rate)}</div>
              <h4 className="title hotel__title">{this.props.show.name}</h4>
              <p className="text hotel__text">{this.props.show.description}</p>
              <div className="group">
                <button className='button button--book' onClick={this.bookHotel}> Book now </button>
                <button className='button button--price' onClick={this.handleClick}> Price history </button>
              </div>
            </div>
          </div>
          <div className={`col-3-12  ${hiddenClass(this.state.history)}`}>
            <div className="price">
              <div className="label">Total</div>
              <div className="value">$ {this.props.show.price}</div>
            </div>
          </div>
          <div className={`col-9-12  ${hiddenClass(!this.state.history)}`}>
            <div className={`col-8-12`}>
              <div className="title hotel__title">
                Price history for 2017
              </div>
            </div>
            <div className={`col-4-12`}>
              <div className="group--right">
                <button className='button button--description' onClick={this.handleClick}> Back to description </button>
              </div>
            </div>
            <div className={`col-1-1`}>
              <ResponsiveContainer>
                <BarChart width={600} height={300} data={data}
                  margin={{ top: 5, right: 15, left: 5, bottom: 5 }}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <CartesianGrid strokeDasharray="3 3" />
                  <Tooltip />
                  <Bar dataKey="price" barSize={30} fill="#F98100" />
                </BarChart>
              </ResponsiveContainer>
            </div>
          </div>
          <div className="box-edit"></div>
        </div>
      </div>
    );
  }
}

export default ShowItem;