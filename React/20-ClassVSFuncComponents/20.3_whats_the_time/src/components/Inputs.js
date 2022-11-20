import React, { Component } from 'react';

class Inputs extends Component {
  state = {seconds: '', minutes: '', hours: ''}; 

  handleChange({target}) {
    const time = {};
    switch(target.id) {
      case'seconds':
        time.seconds = target.value;
        time.minutes = target.value / 60 || '';
        time.hours = target.value / 60 / 60 || '';
        break;
      case 'minutes':
        time.seconds = target.value * 60 || '';
        time.minutes = target.value;
        time.hours = target.value / 60 || '';
        break;
      case 'hours':
        time.seconds = target.value * 60 * 60 || '';
        time.minutes = target.value * 60 || '';
        time.hours = target.value;
        break;
      default:
        break;
    }
    this.setState(time);
  }

  render() { 
    return (
      <div>
        <div>
          <label>Seconds:</label>
          <input id='seconds' type="text" value={this.state.seconds} onChange={this.handleChange.bind(this)} />
        </div>
        <div>
          <label>Minutes:</label>
          <input id='minutes' type="text" value={this.state.minutes} onChange={this.handleChange.bind(this)} />
        </div>
        <div>
          <label>Hours:</label>
          <input id='hours' type="text" value={this.state.hours} onChange={this.handleChange.bind(this)} />
        </div>
      </div>
    );
  }
}
 
export default Inputs;