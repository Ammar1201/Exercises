import React, {Fragment, useEffect, useState} from 'react';

const SearchInput = ({avatars, getFilteredSearch}) => {
  const [searchQuery, setSearchQuery] = useState([]);

  const filterBySearchQuery = () => {
    const tmp = avatars.filter(avatar => {
      const {name} = avatar;
      const str = name.title + name.first + name.last;
      if(str.includes(searchQuery)) {
        return avatar;
      }
    });

    getFilteredSearch(tmp);
  };

  useEffect(() => {
    const timeOutId = setTimeout(() => {
      filterBySearchQuery();
    }, 500);

    return () => {
      clearTimeout(timeOutId);
    };
  }, [searchQuery]);

  const changeHandler = ({target}) => {
    setSearchQuery(target.value);
  }

  return ( 
    <Fragment>
      <input type="text" onChange={changeHandler} />
    </Fragment>
  );
}
 
export default SearchInput;