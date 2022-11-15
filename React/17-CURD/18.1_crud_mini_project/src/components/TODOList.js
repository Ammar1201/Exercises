import React, {useEffect, useState} from 'react';
import TODOItem from './TODOItem';
import './TODOList.css';

const TODOList = ({todoList}) => {
  const [filteredList, setFilteredList] = useState(todoList);

  const filterList = () => {
    const filter = todoList.filter(item => item.delete === false);
    const map = filter.map((item, index) => {
      const obj = {...item, id: index + 1};
      return obj;
    });
    // if(map.length !== 0) {
    //   window.localStorage.setItem('todoList', JSON.stringify(map));
    // }
    setFilteredList(map);
  };

  useEffect(() => {
    filterList();
  }, [todoList]);

  const getDeleteId = (toDeleteId) => {
    todoList[toDeleteId - 1].delete = true;
    filterList();
  };

  const getUpdateId = (toUpdateId) => {
    todoList[toUpdateId - 1].completed = !todoList[toUpdateId - 1].completed;
    filterList();
  };

  return ( 
    <div className='todoList'>
      {filteredList.map(item => <TODOItem todoItem={item} key={item.id} getDeleteId={getDeleteId} getUpdateId={getUpdateId} />)}
    </div> 
  );
}
 
export default TODOList;