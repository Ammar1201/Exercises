const top5languages = (language) => {
  switch (language) {
    case `mandarin`:
      console.log(`MOST number of native speakers!`);
      break;
    case `Spanish`:
      console.log(`2nd place in a number of native speakers'`);
      break;
    case `English`:
      console.log(`3rd place`);
      break;
    case `Hindi`:
      console.log(`Number 4`);
      break;
    case `Arabic`:
      console.log(`5th most spoken language`);
      break;
    default:
      console.log(`Not in the top 5`);
      break;
  }
}

top5languages(`mandarin`);
top5languages(`Spanish`);
top5languages(`English`);
top5languages(`Hindi`);
top5languages(`Arabic`);
top5languages(`Hebrew`);