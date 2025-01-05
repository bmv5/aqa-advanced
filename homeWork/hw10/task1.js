const Book = require('./book');
const EBook = require('./ebook');

// Створення екземплярів класів
const book1 = new Book("Three Comrades", "Erich Maria Remarque", 1936);
const book2 = new Book("The Old Man and the Sea", "Ernest Hemingway", 1952);
const book3 = new Book("The Great Gatsby", "F. Scott Fitzgerald", 1925);
const ebook1 = new EBook("The Godfather", "Mario Puzo", 1969, "PDF")


// Масив об'єктів (екземплярів) книг
const books = [book1, book2, book3, ebook1];

// Виклик статичного методу для пошуку найдавнішої книги
const oldestBook = Book.findOldestBook(books);

// Виведення інформації про найдавнішу книгу
console.log("Oldest Book:");
oldestBook.printInfo();

// Створення екземпляра класу Book
const book = new Book("The Old Man and the Sea", "Ernest Hemingway", 1952);

// Використання статичного методу для створення EBook
const ebook = EBook.fromBook(book, "EPUB");

// Виведення інформації про створений екземпляр EBook
ebook.printInfo(); // "The Old Man and the Sea" by Ernest Hemingway, published in 1952. File format: EPUB.
