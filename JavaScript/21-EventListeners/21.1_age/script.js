
document.querySelector('button').addEventListener('click', () => {
  const input = document.querySelector('input');
  const label = document.querySelector('label');
  if(input.value >= 18) {
    label.textContent = 'you can drink';
    label.style.visibility = 'visible';
  }
  else {
    label.textContent = "you're too young";
    label.style.visibility = 'visible';
  }
});