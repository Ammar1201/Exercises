import {Component} from 'react';
import './Counter.css';

class Counter extends Component {
  state = {counter: 0};

  handleClick = ({target}) => {
    const addToCounter = target.id === 'inc' ? 1 : -1;
    const futureCounter = this.state.counter + addToCounter;
    if(futureCounter >= -10 && futureCounter <= 10) {
      this.setState(prevState => {
        return {counter: prevState.counter + addToCounter};
      });
    }
  };

  setColor = (num) => {
    if(num > 0) {
      return 'green';
    }
    else if(num < 0) {
      return 'red';
    }
    else {
      return '';
    }
  };

  render () {
    return (
      <div>
        <button id='dec' onClick={this.handleClick.bind(this)}>decrement</button>
        <label className={this.setColor(this.state.counter)}>{this.state.counter}</label>
        <button id='inc' onClick={this.handleClick.bind(this)}>increment</button>
      </div>
    );
  }
};

export default Counter;