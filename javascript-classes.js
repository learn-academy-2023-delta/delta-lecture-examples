// Javascript Classes 5/18/23

// Object - a way to store collections of data and methods

// Hard-coding: directly entering in values 
// Dynamic: reusable and allows for a variety of values

// Classes: a blueprint for an object

// ______________
// Anatomy of Classes
  // Class declaration: keyword of class will declare a class
  // Class name: naming syntax should be specific and using PascalCase
  // Curlies to define the scope of the class
  // constructor() - built in method that "constructs" of instantiates class variables

// class Book {
//   constructor() {
//     this.author = "Brene Brown",
//     this.title = "Dare to Lead",
//     this.pages = 272
//   }
//   showBook() {
//     return `I am reading ${this.title} by ${this.author} which has ${this.pages} pages.`
//   }
// }

// console.log(new Book) // Book { author: 'Brene Brown', title: 'Dare to Lead', pages: 272 }

// const myBook = new Book
// console.log(myBook) // Book { author: 'Brene Brown', title: 'Dare to Lead', pages: 272 }

// console.log(myBook.author) // Brene Brown
// console.log(myBook.showBook()) // I am reading Dare to Lead by Brene Brown which has 272 pages.

// const book1 = new Book
// console.log(book1) // Book { author: 'Brene Brown', title: 'Dare to Lead', pages: 272 }


// __________________
// Making the Class Dynamic
// class Book {
//   constructor(author, title, pages) {
//     this.author = author,
//     this.title = title,
//     this.pages = pages
//   }
//   showBook() {
//     return `I am reading ${this.title} by ${this.author} which has ${this.pages} pages.`
//   }
// }

// const padgesBook = new Book("Ryan Holiday", "Courage is Calling", 278)
// console.log(padgesBook)
// // Book {
// //   author: 'Ryan Holiday',
// //   title: 'Courage is Calling',
// //   pages: 278
// // }
// console.log(padgesBook.showBook()) // I am reading Courage is Calling by Ryan Holiday which has 278 pages.

// const jesusBook = new Book("Emily Vander", "Javascript for Dummies", 358)
// console.log(jesusBook)
// // Book {
// //   author: 'Emily Vander',
// //   title: 'Javascript for Dummies',
// //   pages: 358
// // }
// console.log(jesusBook.showBook()) // I am reading Javascript for Dummies by Emily Vander which has 358 pages.

// __________________
// Mix and Matching static and dynamic data

class Book {
  constructor(author, title, pages) {
    this.author = author,
    this.title = title,
    this.pages = pages,
    this.currentPage = 1
  }
  showBook() {
    return `I am reading ${this.title} by ${this.author} which has ${this.pages} pages.  I am currently on page ${this.currentPage}.`
  }
  readPages(pagesRead) {
    if(this.currentPage + pagesRead < this.pages) {
      return this.currentPage += pagesRead
    } else {
      this.currentPage = this.pages
      return "Congrats!  You finished the book!"
    }
  }
}

const padgesBook = new Book("Ryan Holiday", "Courage is Calling", 278)
console.log(padgesBook)
// Book {
//   author: 'Ryan Holiday',
//   title: 'Courage is Calling',
//   pages: 278,
//   currentPage: 1
// }

console.log(padgesBook.showBook()) // I am reading Courage is Calling by Ryan Holiday which has 278 pages.  I am currently on page 1.

console.log(padgesBook.readPages(9)) // 10
console.log(padgesBook.showBook()) // I am reading Courage is Calling by Ryan Holiday which has 278 pages.  I am currently on page 10.

padgesBook.readPages(57)
console.log(padgesBook.showBook()) // I am reading Courage is Calling by Ryan Holiday which has 278 pages.  I am currently on page 67.

console.log(padgesBook.readPages(300))
console.log(padgesBook.showBook())