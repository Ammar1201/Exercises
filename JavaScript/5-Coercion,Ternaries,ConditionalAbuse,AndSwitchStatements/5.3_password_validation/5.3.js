const password1 = (password) => {
  if(password.length > 7)
    return `Strong`;
  else
    return `Weak`;
}


const password2 = (password) => {
  return password.length > 7 ? `Strong` : `Weak`;
}


const password3 = (password) => {
  return (password.length > 7 && `Strong`) || (password.length <= 7 && `Weak`);
}


const password4 = (password) => {
  if(password.length <= 7)
    return `Weak`;
  else if(password.length > 7 && password.toLowerCase() != password)
    return `Very Strong`;
  else
    return `Strong`;
}

console.log(password4(`Hello1234`));