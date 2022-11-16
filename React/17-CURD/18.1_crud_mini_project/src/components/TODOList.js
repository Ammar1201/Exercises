import React, {useEffect, useState} from 'react';
import TODOItem from './TODOItem';
import { baseUrl } from '../api';
import axios from 'axios';
import './TODOList.css';

const TODOList = ({todoList}) => {
  const [filteredList, setFilteredList] = useState(todoList);

  useEffect(() => {
    filterList();
  }, [todoList]);

  const filterList = () => {
    const filter = todoList.filter(item => item.delete === false);
    setFilteredList(filter);
  };

  const deleteTaskReq = async (toDeleteId) => {
    try {
      const res = await axios({
        method: 'delete',
        url: `${baseUrl}${toDeleteId}`,
      })
      return res.data;
    }
    catch (error) {
      console.log(error);
    }
  };

  const updateTaskReq = async (toUpdateId) => {
    try {
      const res = await axios({
        method: 'put',
        url: `${baseUrl}${toUpdateId}`,
        data: {
          completed: todoList[toUpdateId - 1].completed
        }
      })
      return res.data;
    }
    catch (error) {
      console.log(error);
    }
  };

  const findIdIndex = (id) => {
    return filteredList.findIndex(task => task.id === id);
  };

  const getDeleteId = (toDeleteId) => {
    const idIndex = findIdIndex(toDeleteId);
    todoList[idIndex].delete = true;
    deleteTaskReq(toDeleteId);
    filterList();
  };

  const getUpdateId = (toUpdateId) => {
    const idIndex = findIdIndex(toUpdateId);
    todoList[idIndex].completed = !todoList[idIndex].completed;
    updateTaskReq(toUpdateId);
    filterList();
  };

  return ( 
    <div className='todoList'>
      {filteredList.map(item => <TODOItem todoItem={item} key={item.id} getDeleteId={getDeleteId} getUpdateId={getUpdateId} />)}
    </div> 
  );
}
 
export default TODOList;