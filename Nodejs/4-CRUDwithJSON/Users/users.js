import fs from 'fs';
import chalk from 'chalk';
import uniqid from 'uniqid';

const saveUsersData = (notes) => {
  fs.writeFileSync('users.json', JSON.stringify(notes));
};

const loadUsersData = () => {
  try {
    return JSON.parse(fs.readFileSync('users.json').toString());
  }
  catch (err) {
    return [];
  };
};

export const addUser = (name, email, password) => {
  const users = loadUsersData();
  const id = uniqid();
  users.push({id, name, email, password});
  saveUsersData(users);
  console.log(chalk.green('User added successfully!'));
};

export const removeUser = (id) => {
  const users = loadUsersData();
  const usersToKeep = users.filter(user => user.id !== id);
  if(users.length > usersToKeep.length) {
    saveUsersData(usersToKeep);
    console.log(chalk.green('User removed successfully!'));
  }
  else {
    console.log(chalk.red('User ID Not Found!'));
  }
};

export const updateUser = (id, name, email, password) => {
  const users = loadUsersData();
  const userToUpdateIndex = users.findIndex(user => user.id === id);
  if(userToUpdateIndex !== -1) {
    const userToUpdate = users[userToUpdateIndex];
    const updatedData = {
      id,
      name: name || userToUpdate.name,
      email: email || userToUpdate.email,
      password: password || userToUpdate.password
    };
    users.splice(userToUpdateIndex, 1, updatedData);
    saveUsersData(users);
    console.log(chalk.green('User updated successfully!'));
  }  
  else {
    console.log(chalk.red('User ID Not Found!'));
  }
};

export const readUser = (id) => {
  const users = loadUsersData();
  const userToReadIndex = users.findIndex(user => user.id === id);
  if(userToReadIndex !== -1) {
    console.log(users[userToReadIndex]);
  }
  else {
    console.log(chalk.red('User ID Not Found!'));
  }
};