import yargs from 'yargs/yargs';
import validator from 'validator';
import chalk from 'chalk';
import { addUser, updateUser, removeUser, readUser } from './users.js';

const argv = yargs(process.argv.splice(2));

argv.command({
  command: 'add',
  describe: 'Add a new user',
  builder: {
    name: {
      describe: 'user name',
      demandOption: true,
      type: 'string'
    },
    email: {
      describe: 'user email',
      demandOption: true,
      type: 'string'
    },
    password: {
      describe: 'user password',
      demandOption: true,
      type: 'string'
    }
  },
  handler: ({name, email, password}) => {
    if(validator.isEmail(email)) {
      addUser(name, email, password);
    }
    else {
      console.log(chalk.red('Please enter a valid Email!'));
    }
  }
});

argv.command({
  command: 'remove',
  describe: 'Remove a user',
  builder: {
    id: {
      describe: 'user id',
      demandOption: true,
      type: 'string'
    }
  },
  handler: ({id}) => removeUser(id)
});

argv.command({
  command: 'read',
  describe: 'read user data',
  builder: {
    id: {
      describe: 'user id',
      demandOption: true,
      type: 'string'
    }
  },
  handler: ({id}) => readUser(id)
});

argv.command({
  command: 'update',
  describe: 'update user data',
  builder: {
    id: {
      describe: 'user id',
      demandOption: true,
      type: 'string'
    },
    name: {
      describe: 'user name',
      type: 'string'
    },
    email: {
      describe: 'user email',
      type: 'string'
    },
    password: {
      describe: 'user password',
      type: 'string'
    }
  },
  handler: ({id, name, email, password}) => {
    if(email === undefined) {
      updateUser(id, name, email, password);
    }
    else if(validator.isEmail(email)) {
      updateUser(id, name, email, password);
    }
    else {
      console.log(chalk.red('Please enter a valid Email!'));
    }
  }
});
 
argv.parse();