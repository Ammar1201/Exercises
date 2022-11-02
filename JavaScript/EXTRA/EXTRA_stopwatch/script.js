
let milliseconds = 00;
let seconds = 00;
let minutes = 00;

let Interval;

const outputMilliseconds = document.querySelector('#milliseconds');
const outputSeconds = document.querySelector('#seconds');
const outputMinutes = document.querySelector('#minutes');

const btnStart = document.querySelector('#btnStart');
const btnStop = document.querySelector('#btnStop');
const btnReset = document.querySelector('#btnReset');

btnStart.addEventListener('click', () => {
  clearInterval(Interval);
  Interval = setInterval(startTime, 10);
});

btnStop.addEventListener('click', () => {
  clearInterval(Interval);
});

btnReset.addEventListener('click', () => {
  clearInterval(Interval);
  outputMilliseconds.textContent = '00';
  outputSeconds.textContent = '00';
  outputMinutes.textContent = '00';
  milliseconds = 00;
  seconds = 00;
  minutes = 00;
});

const startTime = () => {
  milliseconds++;

  if (milliseconds < 100) {
    outputMilliseconds.textContent = milliseconds;
  }

  if (milliseconds >= 100) {
    milliseconds = 0;
    seconds++;
    if(seconds >= 10) {
      outputSeconds.textContent = seconds;
    }
    else {
      outputSeconds.textContent = '0' + seconds;
    }
  }

  if (seconds > 59) {
    outputSeconds.textContent = '00';
    seconds = 0;
    minutes++;
    if(minutes >= 10) {
      outputMinutes.textContent = minutes;
    }
    else {
      outputMinutes.textContent = '0' + minutes;
    }
  }

  if (minutes >= 60) {
    outputMinutes.textContent = 60;
  }
};
