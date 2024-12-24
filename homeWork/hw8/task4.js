// Створення масиву чисел
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Використання методу filter для відбору парних чисел
const evenNumbers = numbers.filter(num => num % 2 === 0);

// Виведення масиву парних чисел на консоль
console.log(`Парні числа: ${evenNumbers}`);
