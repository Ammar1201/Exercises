// import { carMarket } from "../carAgObj";

// export const namesTransform = () => {
//   const names = [];
//   for(let key in carMarket) {
//     let tmp = key.split('_');
//     let str = '';
//     for(let name of tmp) {
//       str += name.slice(0,1).toUpperCase() + name.slice(1);
//       str += ' ';
//     }
//     names.push(str);
//   }
//   return names;
// };

export const getFirstToUpper = (word) => {
  // We did it at the css
  //  word = word[0].toUpperCase() + word.slice(1);
  if (word.includes('_')) {
    return word.split('_').join(' ');
  }
  return word;
};
