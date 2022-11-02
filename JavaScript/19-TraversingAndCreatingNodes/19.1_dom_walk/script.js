
const startHere = document.querySelector('.start-here');

//* 1. Change the text from “title 2” to “main title”
startHere.textContent = 'main title';


//* 2. Add another subtitle with the text “subtitle 4”
// const subtitle4 = document.createElement('li');
// subtitle4.textContent = 'subtitle 4';
// document.querySelectorAll('ul')[1].appendChild(subtitle4);

const ul = startHere.nextElementSibling.firstElementChild;
const subtitle4 = document.createElement('li');
subtitle4.textContent = 'subtitle 4';
ul.appendChild(subtitle4);


//* 3. Delete the last <li> element from the list.
// const lastLI = document.querySelectorAll('li')[7];
// lastLI.remove();

startHere.parentElement.lastElementChild.remove();


//* 4. Change the <title> element text to “Master Of The Dom”.
// document.querySelector('title').text = 'Master Of The Dom';

// document.head.lastElementChild.textContent = 'Master Of The Dom';

startHere.parentElement.parentElement.parentElement.firstChild.lastElementChild.textContent = 'Master Of The Dom';

//* 5. Change the text of the <p> element ot something else of your
// document.querySelector('div p').textContent = 'The DOM is annoying';

startHere.parentElement.nextElementSibling.firstElementChild.textContent = 'Traverse is annoying';
