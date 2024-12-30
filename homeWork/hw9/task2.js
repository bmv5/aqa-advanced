// Створення об'єкта book
const book = {
    title: "Great Gatsby",
    author: "Francis Scott-F-Fedzhiralad",
    year: 1925
};

// Деструктуризація властивостей title та author
const { title, author, year } = book;

// Виведення деструктуризованих змінних у консоль
console.log(`Name of the book: ${title}`);
console.log(`Autor of the book: ${author}`);
console.log(`Year: ${year}`);

