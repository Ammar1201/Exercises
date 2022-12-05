// import chalk from 'chalk';
import yargs from 'yargs/yargs';
import { getNotes, addNote, removeNote } from './notes.js';

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
  handler: (argv) => {
    addNote(argv.title, argv.body);
  }
});

argv.command({
  command: 'remove',
  describe: 'Remove a note',
  builder: {
    title: {
      describe: 'Note title',
      demandOption: true,
      type: 'string'
    }
  },
  handler: (argv) => {
    removeNote(argv.title);
  }
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