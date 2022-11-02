
const jokeBtn = document.querySelector('button');

jokeBtn.addEventListener('click', (event) => {
  event.preventDefault();
  fetch('https://api.jokes.one/jod')
    .then((res) => {
      if(!res.ok) {
        throw Error('Error fetching');
      }
      return res.json()
    })
    .then((data) => {
      const label = document.createElement('label');
      label.innerHTML = `<br>${data.contents.jokes[0].joke.title}<br>${data.contents.jokes[0].joke.text}`;
      document.body.appendChild(label);
    })
    .catch((err) => {
      console.log(err);
    });
});