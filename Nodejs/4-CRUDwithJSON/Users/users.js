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
  users.push({id: uniqid(), name, email, password});
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
  const user = users.find(user => user.id === id);
  if(user) {
    user.name = name || user.name;
    user.email = email || user.email;
    user.password = password || user.password;
    saveUsersData(users);
    console.log(chalk.green('User updated successfully!'));
  }  
  else {
    console.log(chalk.red('User ID Not Found!'));
  }
};

export const readUser = (id) => {
  const users = loadUsersData();
  const user = users.find(user => user.id === id);
  if(user) {
    console.log(user);
  }
  else {
    console.log(chalk.red('User ID Not Found!'));
  }
};