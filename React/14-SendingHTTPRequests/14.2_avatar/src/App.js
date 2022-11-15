import React, {useEffect, useState} from 'react';
import AvatarsMap from "./components/utils/AvatarsMap";
import Button from "./components/Button";
import SearchInput from "./components/SearchInput";
import './App.css';

const App = () => {
  const [avatars, setAvatars] = useState([]);
  const [message, setMessage] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

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

  const getSearchQuery = (query) => {
    setSearchQuery(query);
  };

  return (
    <div>
      <div>
        <SearchInput avatars={avatars} getSearchQuery={getSearchQuery} />
        <Button />
      </div>
      <AvatarsMap avatars={avatars} searchQuery={searchQuery} />
      {message && <div className='message'>{message}</div>}
    </div>
  );
}

export default App;
