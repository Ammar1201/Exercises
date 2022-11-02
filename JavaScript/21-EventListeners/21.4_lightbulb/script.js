
const img = document.querySelector('img');
let toggled = true;
img.addEventListener('click', () => {
  toggled = !toggled;
  if(toggled) {
    img.src = './img/light-bulb-off.jpg';
  }
  else {
    img.src = './img/light-bulb-on.jpg';
  }
});
