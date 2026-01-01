const title = prompt("Enter book title:");
const author = prompt("Enter book author:");
const hasRead = confirm("Have you read this book? (OK = Yes, Cancel = No)");

const book = {
  title: title,
  author: author,
  readingStatus: hasRead,

  getStatus: function () {
    if (this.readingStatus) {
      return `Already read '${this.title}' by ${this.author}.`;
    } else {
      return `You still need to read '${this.title}' by ${this.author}.`;
    }
  },
};

console.log(book.getStatus());
