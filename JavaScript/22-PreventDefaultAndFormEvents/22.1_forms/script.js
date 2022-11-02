const nameInput = document.querySelector('input[type="text"]');
const ageInput = document.querySelector('input[type="number"]');
const emailInput = document.querySelector('input[type="email"]');
const form = document.querySelector('#form');
const submit = document.querySelector('#submit');
const confirm = document.querySelector('#confirm-information');
let toggled = false;
const nameLabel = document.querySelector('#name');
const ageLabel = document.querySelector('#age');
const emailLabel = document.querySelector('#email');
const btnCancel = document.querySelector('#btnCancel');
const btnConfirm = document.querySelector('#btnConfirm');

const formData = {};
for(let input of [nameInput, ageInput, emailInput]) {
  input.addEventListener('input', (event) => {
    formData[event.target.name] = event.target.value;
  });
}

submit.addEventListener('click', (event) => {
  event.preventDefault();

  if(formData.name === undefined || formData.age === undefined || formData.email === undefined) { return;}

  if(toggled) { return; }


  nameLabel.innerHTML = `Name: <span style="color: red;">${formData.name}</span>`;
  ageLabel.innerHTML = `Age: <span style="color: red;">${formData.age}</span>`;
  emailLabel.innerHTML = `Email: <span style="color: red;">${formData.email}</span>`;
  confirm.style.visibility = 'visible';

  nameInput.setAttribute('class', 'none-editable');
  ageInput.setAttribute('class', 'none-editable');
  emailInput.setAttribute('class', 'none-editable');

  toggled = true;
})

btnCancel.addEventListener('click', () => {
  confirm.style.visibility = 'hidden';

  nameInput.setAttribute('class', 'editable');
  ageInput.setAttribute('class', 'editable');
  emailInput.setAttribute('class', 'editable');

  toggled = false;
});