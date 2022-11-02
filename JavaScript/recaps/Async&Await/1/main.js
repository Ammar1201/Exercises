/** 1)
  Create an input field and a button when the button is clicked 
  call  function that receives 'number' as a parameter (from input field) 
  and returns a new promise after 2 sec
  If the number is above 17 display on the screen 'You can drive' 
  and if it's smaller throw error and display on the screen 'You're too young to drive'
 */
//! Check yourself once with .then .catch and once with async await
//! DRY
//! Small functions

const input = document.querySelector('input');
const btn = document.querySelector('button');
const h1 = document.querySelector('h1');

function handleClick(number) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if(number > 17) {
        resolve('You can drive');
      }
      else {
        reject(`You're too young to drive`);
      }
    }, 2000)
  })
  .then(message => h1.textContent = message)
  .catch(error => h1.textContent = error)
}

btn.addEventListener('click', () => {
  handleClick(input.value);
});