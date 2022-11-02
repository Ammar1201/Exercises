
const btn = document.querySelector('button');
const textArea = document.querySelector('#textarea');
const label = document.querySelector('.label')
let toggled = true;

btn.addEventListener('click', (event) => {
  if(toggled && textArea.value.length <= 100) {
    if(textArea.value.length <= 100) {
      label.style.visibility = 'visible';
      event.preventDefault();
    }
  }
  else {
    label.style.visibility = 'hidden';
    document.querySelector('form').unbind('button').submit();
    toggled = !toggled;
  }
  console.log(textArea.value.length);
});


textArea.addEventListener('focus', () => {
  label.style.visibility = 'hidden';
});