const book1 = {
  name : '',
  author : '',
  year : 2001
}

const book2 = {
  name : '',
  author : '',
  year : 1990
}

const bookUtils = {
  getFirstPublished : function(book1, book2) {
    return book1.year < book2.year ? book1 : book2;
  },

  setNewEdition : function(book, editionYear) {
    book.editionYear = editionYear
  },

  setLanguage : function(book, language) {
    book.language = language;
  },

  setTranslation : function(book, language, translator) {
    book.translation = {language, translator};
  },

  setPublisher : function(book, name, location) {
    book.publisher = {name, location}; 
  },

  isSamePublisher : function(book1, book2) {
    return book1.publisher.name === book2.publisher.name && book1.publisher.location === book2.publisher.location ? true : false;
  }
}

console.log(bookUtils.getFirstPublished(book1,book2));

bookUtils.setNewEdition(book1,2015)
console.log(book1);
bookUtils.setNewEdition(book1,2010)
console.log(book1);

bookUtils.setTranslation(book2, `English`, `Arabic`);
console.log(book2);

bookUtils.setPublisher(book1, `Ammar`, `Kusiefe`);
bookUtils.setPublisher(book2, `Ammar`, `Kusiefe`);
console.log(bookUtils.isSamePublisher(book1, book2));

bookUtils.setPublisher(book1, `Ammar`, `Kusiefe`);
bookUtils.setPublisher(book2, `Mordi`, `Kusiefe`);
console.log(bookUtils.isSamePublisher(book1, book2));

bookUtils.setPublisher(book1, `Ammar`, `Kusiefe`);
bookUtils.setPublisher(book2, `Ammar`, `Arad`);
console.log(bookUtils.isSamePublisher(book1, book2));