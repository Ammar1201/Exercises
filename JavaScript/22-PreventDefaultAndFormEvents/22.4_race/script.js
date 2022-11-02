const player1 = document.querySelector("#player1-race");
let player1Active = player1.firstElementChild;
const player2 = document.querySelector("#player2-race");
let player2Active = player2.firstElementChild;
const winner = document.querySelector("#winner");

window.addEventListener('keyup', (event) => {
  const key = event.key;
  if (key === "w") {
    if(player1Active.nextElementSibling != null) {
      player1Active.nextElementSibling.classList.add("active");
      player1Active.classList.remove("active");
      player1Active = player1Active.nextElementSibling;
    }
    if(player1Active.classList.contains("finish")) {
      if(winner.textContent === '' && winner.textContent !== 'Player2 Wins') {
        winner.textContent = 'Player1 Wins';
      }
    }
  }

  if (key === "ArrowUp" || key === "Up") {
    if(player2Active.nextElementSibling != null) {
      player2Active.nextElementSibling.classList.add("active");
      player2Active.classList.remove("active");
      player2Active = player2Active.nextElementSibling;
    }
    if(player2Active.classList.contains("finish")) {
      if(winner.textContent === '' && winner.textContent !== 'Player1 Wins') {
        winner.textContent = 'Player2 Wins';
      }
    }
  }
});

const reset = document.querySelector('#reset');

reset.addEventListener('click', () => {
  winner.textContent = '';
  player1Active.classList.remove("active");
  player2Active.classList.remove("active");
  player1Active = player1.firstElementChild;
  player2Active = player2.firstElementChild;
  player1Active.classList.add('active');
  player2Active.classList.add('active');
});