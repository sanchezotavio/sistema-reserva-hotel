import React from 'react';

class ShowItem extends React.Component{
  constructor(props){
    super(props);

    this.state = {
      error : false
    }
  }

  handleError() {
    this.setState({
      error: true
    })
  }

  render(){
    if(this.state.error){
      return null;
    }
    return (
      <div className="col-1-1">
        <div className="hotel col-1-1" onClick={() => this.props.onShowSelect(this.props.show)}>
          <div className="col-3-12  mobile-1-1">
          <img className="image" src={this.props.show.image} alt={this.props.show.name} onError={() => this.handleError()} />
          </div> 
          <div className="col-6-12 mobile-1-1">
            <div className="line-right">
              <h4 className="title hotel__title">{this.props.show.name}</h4>           
              <p className="text hotel__text">{this.props.show.description}</p> 
            </div>
          </div>   
          <div className="col-3-12 mobile-1-1"> 
            <div className="price">
             <div className="label">Total</div>
             <div className="value">$ {this.props.show.price}</div>
            </div>   
          </div>  
          <div className="box-edit"></div>      
        </div>       
      </div>
    );
  }
}

export default ShowItem;