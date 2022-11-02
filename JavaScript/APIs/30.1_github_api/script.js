
const searchInput = document.querySelector('input');
const searchBtn = document.querySelector('button');
const errorMsg = document.querySelector('#errorMsg');

const users = [];

//* Async - fetching Data
const fetchData = async (user) => {
  if(users.includes(user)) {
    return;
  }

  try {
    const url = 'https://api.github.com/users/' + user;
    const res = await fetch(url);
    if(!res.ok) {
      throw new Error('Error fetching');
    }
  
    const data = await res.json();

    const transformedData = {avatar_url: data.avatar_url, login: data.login, public_repos: data.public_repos};

    users.push(user);
    displayUser(transformedData);
  }
  catch(error) {
    errorMsg.textContent = `username "${user}" not found`;
  }
}

//* displaying user information
const displayUser = (user) => {
  const div = document.createElement('div');
  div.id = 'card';
  const avatar_img = document.createElement('img');
  const login = document.createElement('a');
  const repos = document.createElement('a');

  avatar_img.src = user.avatar_url;

  login.innerText = user.login;
  login.href = `https://github.com/${user.login}`;
  login.target = '_blank';

  repos.innerText = user.public_repos;
  repos.href = `https://github.com/${user.login}?tab=repositories`;
  repos.target = '_blank';

  div.appendChild(avatar_img);
  div.appendChild(login);
  div.appendChild(repos);

  document.body.append(div);
}

//* error handling
const handleError = (user = '') => {
  if(user === '') {
    errorMsg.textContent = `*you must provide a username`;
    return;
  }
  errorMsg.textContent = `*user "${user}" is already displayed`;
}

//*  Events ----------------------------
const addEvents = () => {
  window.addEventListener('load', () => {
    searchInput.focus();
  })
  
  searchInput.addEventListener('keydown', (event) => {
    const key = event.key;
    const user = event.target.value;
  
    if(key === 'Enter') {
      if(user === '') {
        handleError(user);
        return;
      }
  
      if(users.includes(user)){
        handleError(user);
        event.target.value = '';
        return;
      }

      fetchData(user);
      event.target.value = '';
      searchInput.focus();
    }
  });
  
  searchBtn.addEventListener('click', (event) => {
    event.preventDefault();
    const user = searchInput.value;
  
    if(user === '') {
      handleError(user, 'Empty search');
      return;
    }
  
    if(users.includes(user)){
      handleError(user);
      searchInput.value = '';
      return;
    }
  
    fetchData(user);
    searchInput.value = '';
    searchInput.focus();
  });
  
  searchInput.addEventListener('focus', () => {
    errorMsg.textContent = '';
  });
};

//* main function - starting app
const startApp = () => {
  addEvents();
};

startApp();