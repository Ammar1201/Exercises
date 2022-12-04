const fs = require('fs');

//? 1- Create a new txt file using the same fs module method we have learned before.
fs.writeFileSync('textFile.txt', 'hello world!');

//? 2-Create a copy of the newly created txt file using a method from the fs module.
fs.copyFileSync('textFile.txt', './textFileCopy.txt');

//? 3-Rename one of the files using a method from the fs module.
fs.renameSync('textFileCopy.txt', 'textFileCopyRenamed.txt');

//? 4-Get a list of all the file names of the current directory using a method from the fs module.
console.log(fs.readdirSync('./'));

//? 5-Find out and implement another method for the fs module.
fs.appendFileSync('textFileCopyRenamed.txt', ' This a copied and renamed text file using fs methods!');