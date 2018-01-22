import React from 'react';
import ReactDOM from 'react-dom';
import Slider, { Range } from 'rc-slider';
import { goToAnchor ,removeHash  } from 'react-scrollable-anchor'

const style = { width: 400, margin: 50 };

class Filter extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      rate: 0,
      min: 100,
      max: 1000
    }


    this.filterRate = this.filterRate.bind(this);
    this.onSliderChange = this.onSliderChange.bind(this);
    this.onAfterChange = this.onAfterChange.bind(this);
  }

  onAfterChange(value) {
    this.setState({ min: value[0], max: value[1] })
    this.props.onFilter(value[1], value[0], this.state.rate)
  }

  onSliderChange(value) {
    this.setState({ min: value[0], max: value[1] })
  }

  filterRate(rateN, event) {
    event.preventDefault()
    this.setState({ rate: rateN })
    this.props.onFilter(this.state.max, this.state.min, rateN)
  }

  cssStar(newRate, rate) {
    if (rate <= newRate) {
      return 'icon-rate--null'
    }
    else {
      return 'icon-rate'
    }
  }

  render() {
    if (this.props.load) {
      return (
        <div className="col-1-1">
          <h3 className="title title--normal left">Filters</h3>
          <div className="filter filter--hotel">
            <div className="title filter__title">Price Range</div>
            <div>
              <Range defaultValue={[100, 1000]} min={100} max={1000}
                onChange={this.onSliderChange} onAfterChange={this.onAfterChange}
              />
            </div>
            <div className="col-1-2  mobile-col-1-2">
              <div className="title filter__title">
                Min:
              </div>
              <div className="count filter__count left">
                $ {this.state.min}
              </div>
            </div>
            <div className="col-1-2 mobile-col-1-2">
              <div className="title filter__title right">
                Max:
              </div>
              <div className="count filter__count right">
                $ {this.state.max}
              </div>
            </div>
          </div>
          <div className="filter  filter--hotel">
            <div className="line-hr"></div>
            <div className="title filter__title">Stars</div>
            <button className={this.cssStar(0, this.state.rate)} onClick={(e) => this.filterRate(1, e)}> 1 </button>
            <button className={this.cssStar(1, this.state.rate)} onClick={(e) => this.filterRate(2, e)}> 2 </button>
            <button className={this.cssStar(2, this.state.rate)} onClick={(e) => this.filterRate(3, e)}> 3 </button>
            <button className={this.cssStar(3, this.state.rate)} onClick={(e) => this.filterRate(4, e)}> 4 </button>
            <button className={this.cssStar(4, this.state.rate)} onClick={(e) => this.filterRate(5, e)}> 5 </button>
          </div>
        </div>)
    }
    else {
      return (
        <div></div>
      )
    }
  }
}

export default Filter;



