const book = {
  bookName : `Ulysses`,
  authorName : `James Joyce`,
  publishingYear : 2012,
  binding : 'Kindle Edition',
  price : 0.99
};

const func = (book) => {
  return `The book ${book.bookName} was written by ${book.authorName} in the year ${book.publishingYear}`;
}

console.log(func(book));