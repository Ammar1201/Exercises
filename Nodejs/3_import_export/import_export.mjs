//* Import the file system module using the import syntax.
import fs from 'fs';
import { add, subtract, divide } from './export_functions.mjs';

//* What is the difference between import and require?
// import works with ES module require works with No ES module

//* How can you enable using the import syntax using node js
// by using the extension .mjs or in the package.json file by adding type: module property.

//* Give 2 node.js environment variables that are not available when using the import syntax.
// __dirname
// __filename

//* Create 3 functions using the export/import syntax.

console.log(fs.readdirSync('./'));

console.log(add(1, 5));
console.log(subtract(10, 5));
console.log(divide(27, 3));