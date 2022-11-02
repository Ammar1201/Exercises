const alphabet = 'abcdefghijklmnopqrstuvwxyz';
const wrongInputs = '0123456789!@#$%^&*()*+,-./=-_';
let guessedLetters = [];
const input = document.querySelector('input');
const guessedLettersH2 = document.querySelector('#guessedLetters');
const guess = document.querySelector('#guess');
const playAgain = document.querySelector('#playAgain');
const yesBtn = document.querySelector('button');
let firstTime = true;
let guessed = false;

const randomLetter = () => {
  return alphabet[Math.floor(Math.random() * alphabet.length)];
};

let randomLetterToGuess = randomLetter();

const printGuessedLetters = (value) => {
  if(firstTime) {
    guessedLettersH2.innerText += `${value}`;
    firstTime = false;
  }
  else {
    guessedLettersH2.innerText += `,${value}`;
  }
};

const checkGuessedBefore = (value) => {
  return guessedLetters.includes(value);
};

const checkCorrectInput = (value) => {
  return wrongInputs.includes(value);
};

input.addEventListener('input', (event) => {
  const value = event.target.value;

  if(value === '' || guessed) { return; }

  if(checkCorrectInput(value)) {
    guess.innerText = 'ONLY LETTERS ALLOWED';
    event.target.value = '';
    return;
  } 

  if(value == randomLetterToGuess) {
    guess.innerText = `Right letter!`;
    guess.style.color = 'green';
    playAgain.setAttribute('class', 'block');
    input.setAttribute('class', 'non-editable');
    guessed = true;
  }
  else {
    guess.style.color = 'red';
    if(checkGuessedBefore(value)) {
      guess.innerText = `Letter Guessed Before!`;
    }
    else {
      guess.innerText = `Nope, Wrong letter`;
      guessedLetters.push(value);
      printGuessedLetters(value);
    }
    event.target.value = '';
  }
});

yesBtn.addEventListener('click', () => {
  playAgain.setAttribute('class', 'none');
  input.setAttribute('class', 'editable');
  guess.innerText = 'Guess a key';
  guess.style.color = 'black';
  input.value = '';
  randomLetterToGuess = randomLetter();
  firstTime = true;
  guessedLettersH2.innerText = '';
  guessedLetters = [];
  guessed = false;
});