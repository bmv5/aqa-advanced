// ebook.js
const Book = require('./book'); // Імпортуємо клас Book лише один раз

class EBook extends Book {
  constructor(title, author, year, fileFormat) {
    super(title, author, year); // Викликаємо конструктор класу Book
    this._fileFormat = fileFormat; // Формат файлу
  }

  // Геттер і сеттер для властивості fileFormat
  get fileFormat() {
    return this._fileFormat;
  }

  set fileFormat(value) {
    const validFormats = ['PDF', 'EPUB', 'MOBI', 'TXT']; // Дозволені формати
    if (!validFormats.includes(value.toUpperCase())) {
      throw new Error(
        `File format must be one of: ${validFormats.join(', ')}.`,
      );
    }
    this._fileFormat = value.toUpperCase(); // Завжди зберігаємо у верхньому регістрі
  }

  // Перезаписуємо метод printInfo для виведення додаткової інформації про формат файлу
  printInfo() {
    console.log(
      `"${this.title}" by ${this.author}, published in ${this.year}. File format: ${this.fileFormat}.`,
    );
  }

  // Статичний метод для створення екземпляра EBook з Book
  static fromBook(bookInstance, fileFormat) {
    if (!(bookInstance instanceof Book)) {
      throw new Error('First argument must be an instance of Book.');
    }
    return new EBook(
      bookInstance.title,
      bookInstance.author,
      bookInstance.year,
      fileFormat,
    );
  }
}

// Створення інстансу класу EBook
const ebook1 = new EBook('The Godfather', 'Mario Puzo', 1969, 'PDF');

// Використання геттерів і сеттерів
ebook1.title = 'The Godfather 2'; // Змінюємо назву
ebook1.fileFormat = 'MOBI'; // Змінюємо формат файлу

// Виклик методу printInfo
ebook1.printInfo(); // "The Godfather 2" by Mario Puzo, published in 1969 . File format: MOBI.

module.exports = EBook;
