import React, { Component } from 'react';
import './Box.css';

class Box extends Component {
  state = {showBox: false};

  componentDidMount() {
    setTimeout(() => {
      this.setState({showBox: true});
    }, 1000);
  };

  componentDidUpdate() {
    setTimeout(() => {
      this.setState({showBox: false});
    }, 4000);
  }

  render() { 
    return (     
      <div>
        {this.state.showBox && <div className='box' style={{width: this.props.width, height: this.props.height}} ></div>}
      </div>
    );
  }
}
 
export default Box;