class Book {
  constructor(title, author, year) {
    this._title = title; // Приватна властивість
    this._author = author;
    this._year = year;
  }
  // Геттер і сеттер для властивості title
  get title() {
    return this._title;
  }

  set title(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Title must be a non-empty string.');
    }
    this._title = value;
  }

  // Геттер і сеттер для властивості author
  get author() {
    return this._author;
  }

  set author(value) {
    if (typeof value !== 'string' || value.trim() === '') {
      throw new Error('Author must be a non-empty string.');
    }
    this._author = value;
  }

  // Геттер і сеттер для властивості year
  get year() {
    return this._year;
  }

  set year(value) {
    if (!Number.isInteger(value) || value < 0) {
      throw new Error('Year must be a positive integer.');
    }
    this._year = value;
  }
  // Метод для виведення повного опису книги
  printInfo() {
    console.log(
      `"${this.title}" by ${this.author}, published in ${this.year}.`,
    );
  }

  // Статичний метод для пошуку найдавнішої книги
  static findOldestBook(books) {
    if (!Array.isArray(books) || books.length === 0) {
      throw new Error('Books must be a non-empty array.');
    }
    return books.reduce((oldest, current) =>
      current.year < oldest.year ? current : oldest,
    );
  }
}

// Створення кількох об'єктів класу Book
const book1 = new Book('Three Comrades', 'Erich Maria Remarque', 1936);
const book2 = new Book('The Old Man and the Sea', 'Ernest Hemingway', 1952);
const book3 = new Book('The Great Gatsby', 'F. Scott Fitzgerald', 1925);

// Виклик методу printInfo для кожного екземпляру
book1.printInfo(); // "Three Comrades" by Erich Maria Remarque, published in 1949.
book2.printInfo(); // "TThe Old Man and the Sea" by Ernest Hemingway, published in 1952.
book3.printInfo(); // "The Great Gatsby" by F. Scott Fitzgerald, published in 1925.

module.exports = Book;
