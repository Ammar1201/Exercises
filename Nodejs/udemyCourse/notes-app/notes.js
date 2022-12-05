import fs from 'fs';
import chalk from 'chalk';

const saveNotes = (notes) => {
  fs.writeFileSync('notes.json', JSON.stringify(notes));
};

const loadNotes = () => {
  try {
    return JSON.parse(fs.readFileSync('notes.json').toString());
  }
  catch (err) {
    return [];
  };
};

export const getNotes = () => {
  return 'Your Notes...';
};

export const addNote = (title, body) => {
  const notes = loadNotes();
  const duplicateNotes = notes.filter(note => note.title === title);
  if(duplicateNotes.length === 0) {
    notes.push({title, body});
    saveNotes(notes);
    console.log(chalk.green('Note added successfully!'));
  }
  else {
    console.log(chalk.red('Note Title Taken!'));
  }
};

export const removeNote = (title) => {
  const notes = loadNotes();
  const notesToKeep = notes.filter(note => note.title !== title);
  if(notesToKeep.length !== notes.length) {
    saveNotes(notesToKeep);
    console.log(chalk.green('Note removed successfully!'));
  }
  else {
    console.log(chalk.red('No Note Found!'));
  }
};