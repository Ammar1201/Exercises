
const label = document.querySelector('label');

document.querySelector('#decrease').addEventListener('click', () => {
  const style = window.getComputedStyle(label).fontSize;
  const fontSize = parseFloat(style);
  if(fontSize > 6) {
    label.style.fontSize = (fontSize - 1) + 'px';
  }
});


document.querySelector('#increase').addEventListener('click', () => {
  const style = window.getComputedStyle(label).fontSize;
  const fontSize = parseFloat(style);
  if(fontSize < 100) {
    label.style.fontSize = (fontSize + 1) + 'px';
  }
});