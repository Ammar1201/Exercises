import React, {useEffect, useState} from 'react';
import AvatarsMap from "./components/utils/AvatarsMap";
import Button from "./components/Button";
import SearchInput from "./components/SearchInput";
import './App.css';

const App = () => {
  const [avatars, setAvatars] = useState([]);
  const [filteredSearch, setFilteredSearch] = useState(null);
  const [show, setShow]  = useState(null);
  const [message, setMessage] = useState(null);

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
      setMessage(null);
    }
    if(filteredSearch.length === 0) {
      setShow(false);
      if(show !== null) { // first load show sets to null to prevent 'No Match Found' from appearing and show the avatars
        setMessage('No Match Found'); // for some reason when the page loads sets the message to 'No Match Found' so the avatars doesn't appear
      }
    }
  };

  return (
    <div>
      <div>
        <SearchInput avatars={avatars} getFilteredSearch={getFilteredSearch} />
        <Button />
      </div>
      {filteredSearch && show && <AvatarsMap avatars={filteredSearch} />}
      {console.log(message)}
      {filteredSearch && !show && !message &&<AvatarsMap avatars={avatars} />}
      {message && <div className='message'>{message}</div>}
    </div>
  );
}

export default App;
