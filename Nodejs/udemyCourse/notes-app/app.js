// import chalk from 'chalk';
import yargs from 'yargs/yargs';
// import { getNotes } from './notes.js';

const argv = yargs(process.argv.splice(2));

argv.command({
  command: 'add',
  describe: 'Add a new note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    },
    body: {
      describe: 'Note body',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => console.log(`Title: ${argv.title}, body: ${argv.body}`)
});

argv.command({
  command: 'remove',
  describe: 'Remove a note',
  handler: () => console.log('Removing the note')
});

argv.command({
  command: 'list',
  describe: 'list all notes',
  handler: () => console.log('listing all notes')
});

argv.command({
  command: 'read',
  describe: 'Read a note',
  handler: () => console.log('Reading the note')
});
 
argv.parse();