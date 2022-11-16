import React, {useState} from 'react';
import './TODOForm.css';
import TODOList from './TODOList';

const TODOForm = () => {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('todoList')) || []);
  const [inputValue, setInputValue] = useState('');

  const clickHandler = () => {
    if(!inputValue.trim()) {
      return;
    }
    
    if(todoList === null || todoList.length === 0) {
      setTodoList([{
        id: 1,
        delete: false,
        itemText: inputValue,
        completed: false
      }]);
      window.localStorage.setItem('todoList', JSON.stringify(todoList));
    }
    else {
      setTodoList(prev => [...prev, {
        id: prev[prev.length - 1].id + 1,
        delete: false,
        itemText: inputValue,
        completed: false
      }]);
      window.localStorage.setItem('todoList', JSON.stringify(todoList));
    }
    setInputValue('');
  };

  const changeHandler = ({target}) => {
    setInputValue(target.value);
  };

  return ( 
    <div>
      <div className="todo">
        <label htmlFor="todo">Add todo</label>
        <input type="text" name="todo" value={inputValue} onChange={changeHandler} />
        <button onClick={clickHandler}>Add</button>
      </div>
      <TODOList todoList={todoList} />
    </div>
  );
}
 
export default TODOForm;