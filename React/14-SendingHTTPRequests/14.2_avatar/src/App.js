import React, {useEffect, useState} from 'react';
import AvatarsMap from "./components/utils/AvatarsMap";
import Button from "./components/Button";
import SearchInput from "./components/SearchInput";

const App = () => {
  const [avatars, setAvatars] = useState([]);
  const [filteredSearch, setFilteredSearch] = useState(null);
  const [show, setShow]  = useState(false);

  useEffect(() => {
    const fetchAvatars = async () => {
      try {
        const res = await fetch('https://randomuser.me/api/?results=10');
        if(!res.ok) {
          throw Error('Couldn\'t fetch avatars');
        }
        const data = await res.json();
        setAvatars(data.results);
      }
      catch (err) {
        console.log(err);
      }
    };
    fetchAvatars();
  }, []);

  const getFilteredSearch = (filteredSearch) => {
    setFilteredSearch(filteredSearch);
    if(filteredSearch.length > 0) {
      setShow(true);
    }
    if(filteredSearch.length === 0) {
      setShow(false);
    }
  };

  return (
    <div>
      <div>
        <SearchInput avatars={avatars} getFilteredSearch={getFilteredSearch} />
        <Button />
      </div>
      {filteredSearch && show && <AvatarsMap avatars={filteredSearch} />}
      {filteredSearch && !show && <AvatarsMap avatars={avatars} />}
    </div>
  );
}

export default App;
