// Створення масиву чисел
const numbers = [10, 20, 30, 40, 50];

// Використання методу reduce для обчислення суми всіх елементів
const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
//accumulator: змінна, яка зберігає поточний результат обчислення
//currentValue: поточний елемент масиву
//Початкове значення accumulator задається як 0


// Виведення суми на консоль
console.log(`Сума всіх елементів у масиві: ${sum}`);
