import React, {useState, useEffect} from 'react';
import TODOList from './TODOList';
import { baseUrl } from '../api';
import axios from 'axios';
import './TODOForm.css';
import Spinner from './utils/Spinner';

const TODOForm = () => {
  const [todoList, setTodoList] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await axios.get(baseUrl);
        setTodoList(res.data);
      }
      catch(error) {
        console.log(error);
      }
    };
    fetchTodos();
  }, []);

  const addTaskReq = async () => {
    try {
      const res = await axios({
        method: 'post',
        url: baseUrl,
        data: {
          content: inputValue,
          completed: false
        }
      })
      setTodoList(prev => [...prev, res.data]);
      return res.data;
    }
    catch (error) {
      console.log(error);
    }
  };

  const addTaskHandler = () => {
    if(!inputValue.trim()) {
      setInputValue('');
      return;
    }
    setIsLoading(true);
    addTaskReq();
    setIsLoading(false);
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
        <button onClick={addTaskHandler} disabled={isLoading}>Add</button>
      </div>
      {isLoading && <Spinner />}
      <TODOList todoList={todoList} />
    </div>
  );
}
 
export default TODOForm;