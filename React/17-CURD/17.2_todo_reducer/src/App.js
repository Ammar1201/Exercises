import React, { useState, useEffect, useReducer } from 'react';

function App() {
  // const [taskArr, setTaskArr] = useState(JSON.parse(localStorage.taskArr));
  const [inputVal, setInputVal] = useState('');

  const [tasksState, dispatchTasks] = useReducer(tasksReducer, [...JSON.parse(localStorage.taskArr)]);

  const tasksReducer = (state, action) => {
    if(action.type === 'ADD_TASK') {
      return [[...state, { value: inputVal, done: false }]]
    }
    if(action.type === 'UPDATE_TASK') {
      return state.map((task, mapIndex) => {
        mapIndex !== index ? task : { ...task, done: !task.done }
      });
    }
    if(action.type === 'DELETE_TASK') {
      state.filter((task, mapIndex) => {
        return mapIndex !== index;
      })
    }
    return [...JSON.parse(localStorage.taskArr)];
  };

  useEffect(() => {
    const dataToLS = JSON.stringify(tasksState);
    localStorage.setItem('taskArr', dataToLS);
  }, [tasksState]);
  //! read localStorage and update the state

  const handleInput = ({ target: { value } }) => {
    setInputVal(value);
  };

  //! update localStorage
  //? Create
  const handleAddTask = () => {
    //! ↓↓↓↓↓↓↓ state is Async!!!!!
    //! no so very good practice ↓
    // const tempState = [...taskArr, { value: inputVal, done: false }];
    //* setTaskArr((prev) => [...prev, { value: inputVal, done: false }]);
    dispatchTasks({type: 'ADD_TASK'});
    setInputVal('');
  };

  //! update localStorage
  //? Update
  const handleUpdate = (index) => {
    //?
    //* setTaskArr((prev) => {
    //*   return prev.map((task, mapIndex) => {
          //* mapIndex !== index ? task : { ...task, done: !task.done }
    //     if (mapIndex !== index) {
    //       return task;
    //     } else {
    //       task.done = !task.done;
    //       return task;
    //     }
    //*   });
    //* });
    dispatchTasks({type: 'UPDATE_TASK'});
  };

  //! update localStorage
  //? Delete
  const handleDelete = (index) => {
    //* setTaskArr((prevState) =>
    //*   prevState.filter((task, mapIndex) => {
    //*     return mapIndex !== index;
    //*   })
    //* );
    dispatchTasks({type: 'DELETE_TASK'});
  };

  return (
    <div>
      <h1>Todo</h1>
      <input value={inputVal} onChange={handleInput} />
      <button onClick={handleAddTask}>Add Task</button>
      {/* //? Read */}
      {tasksState.map((task, mapIndex) => (
        <div key={task.value + mapIndex}>
          <h3
            onClick={() => {
              handleUpdate(mapIndex);
            }}
          >
            {task.value} - {task.done ? 'V' : 'X'}
          </h3>
          <button
            onClick={() => {
              handleDelete(mapIndex);
            }}
          >
            Delete
          </button>
        </div>
      ))}
    </div>
  );
}

export default App;
