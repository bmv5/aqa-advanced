// Вихідний масив
const numbersList = [1, 10, 14, 2, 4, 5, 43, 34];

// Створення копії масиву за допомогою оператора розширення
const sortedNumbers = [...numbersList];

// Сортування копії масиву за зростанням
sortedNumbers.sort((a, b) => a - b);

// Виведення обох масивів у консоль
console.log('Вихідний масив:', numbersList);
console.log('Відсортований масив:', sortedNumbers);
