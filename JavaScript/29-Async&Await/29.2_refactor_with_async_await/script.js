
const jokeBtn = document.querySelector('button');

// jokeBtn.addEventListener('click', (event) => {
//   event.preventDefault();
//   fetch('https://api.jokes.one/jod')
//     .then((res) => {
//       if(!res.ok) {
//         throw new Error('Error fetching');
//       }
//       return res.json()
//     })
//     .then((data) => {
//       const label = document.createElement('label');
//       label.innerHTML = `<br> Joke Title is → ${data.contents.jokes[0].joke.title}<br> The joke is → ${data.contents.jokes[0].joke.text}`;
//       document.body.appendChild(label);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// });

jokeBtn.addEventListener('click' , async function(){
  try {
    const res = await fetch('https://api.jokes.one/jod');
    if(!res.ok) {
      throw new Error('Error fetching');
    }
    const data = await res.json();
    const label = document.createElement('label');
    label.innerHTML = `<br> Joke Title is → ${data.contents.jokes[0].joke.title}<br> The joke is → ${data.contents.jokes[0].joke.text}`;
    document.body.appendChild(label);
  }
  catch(error) {
    console.log(error);
  }
});