import './TODOItem.css';

const TODOItem = ({todoItem, getDeleteId, getUpdateId}) => {

  const deleteHandle = () => {
    getDeleteId(todoItem.id);
  };

  const updateHandle = () => {
    getUpdateId(todoItem.id);
  };

  return ( 
    <div className="todoItem">
      {todoItem.completed && <i className="fa-solid fa-check" onClick={updateHandle}></i>}
      {!todoItem.completed && <i className="fa-solid fa-x" onClick={updateHandle}></i>}
      <label> - {todoItem.itemText}</label>
      <button onClick={deleteHandle}>Delete</button>
    </div> 
  );
}
 
export default TODOItem;