
const input = document.querySelector('input[type="text"]');
const btn = document.querySelector('input[type="submit"]');
let toggled = false;

btn.addEventListener('click', (event) => {
  const inputValue = input.value;

  const imgs = document.querySelectorAll('img');
  if(imgs.length > 0) {
    imgs.forEach(img => {
      img.remove();
    });
  }

  for(let i = 0; i < inputValue; i++) {
    const img = document.createElement('img');
    img.src = './img/smiley-emoji.png';
    img.style.width = '200px';
    document.body.append(img);
  }
  event.preventDefault();
});