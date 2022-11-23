import React, { Component } from 'react';
import Countries from './Countries';

class Toggler extends Component {
  state = {toggle: false}

  showCountries() {
    this.setState(prev => {
      return {toggle:!prev.toggle};
    });
  }

  render() {
    return ( 
      <div>
        <button onClick={this.showCountries.bind(this)}>Toggle</button>
        <label>*check console for request canceling.</label>
        {this.state.toggle && <Countries />}
      </div> 
    );
  }
}
 
export default Toggler;