import React, {Fragment, useState} from 'react';

const SearchInput = ({getSearchQuery}) => {
  const [searchQuery, setSearchQuery] = useState([]);

  const changeHandler = ({target}) => {
    setSearchQuery(target.value);
    getSearchQuery(target.value);
  }

  return ( 
    <Fragment>
      <input type="text" value={searchQuery} onChange={changeHandler} />
    </Fragment>
  );
}
 
export default SearchInput;