import React, { useState, useEffect } from 'react';
import ListItem from '../ListItem/ListItem';
import ListItems from '../../assets/data.json';

const ListMap = () => {
  const [list, setList] = useState(null);

  useEffect(() => {
    const interval = setTimeout(() => {
      setList(ListItems);
    }, 1000);

    return (
      () => {
        clearTimeout(interval);
      }
    )
  }, []);

  const ascSort = (event) => {
    event.preventDefault();
    const tmp = list.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA < nameB) {
        return -1;
      }
      if (nameA > nameB) {
        return 1;
      }
      return 0;
    });
    setList(tmp);
  };

  const desSort = (event) => {
    event.preventDefault();
    const tmp = list.sort((a, b) => {
      const nameA = a.name.toUpperCase();
      const nameB = b.name.toUpperCase();
      if (nameA > nameB) {
        return -1;
      }
      if (nameA < nameB) {
        return 1;
      }
      return 0;
    });
    setList(tmp);
  };

  return ( 
    <div>
      <button onClick={ascSort}>Asc</button>
      <button onClick={desSort}>Des</button>
      {list && list.map(item => {
        return <ListItem key={item.uuid} itemData={item.name} />;
      })}
    </div> 
  );
}
 
export default ListMap;