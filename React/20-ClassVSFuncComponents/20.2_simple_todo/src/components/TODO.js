import React, { Component } from 'react';
import './TODO.css';

class TODO extends Component {
  state = { todo: 
    [
      { name: "CSS", completed: true },
      { name: "JavaScript", completed: true },
      { name: "Learn React", completed: false },
      { name: "Learn mongoDB", completed: false },
      { name: "Learn Node JS", completed: false },
    ]
  };

  changeCheck ({target}) {
    this.setState(prev => {
      const tmp = prev.todo.map((todo, index) => {
        if(index === parseInt(target.id)) {
          return {name: todo.name, completed: !todo.completed};
        }
        return todo;
      }); 
      return {todo: [...tmp]};
    });
  };

  //&check;

  render() { 
    return (
      <div>
        {this.state.todo.map((todo, index) => {
          return (<div key={todo.name}>
            <label className={todo.completed ? 'lineThrough' : ''}>{todo.name}</label>
            <span id={index} onClick={this.changeCheck.bind(this)} >{todo.completed ? 'V' : 'X'}</span>
          </div>)
        })}
      </div>
    );
  }
}
 
export default TODO;