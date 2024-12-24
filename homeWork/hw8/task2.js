// Початковий масив
const initialArray = [1, 2, 3, 4, 5];

// Створення нового масиву за допомогою методу map
const mutatedArray = initialArray.map((value, index) => value * index);

// Виведення нового масиву на консоль
console.log(mutatedArray);