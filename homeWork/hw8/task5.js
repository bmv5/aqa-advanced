// Створення двох масивів
const firstArray = [1, 2, 3];
const secondArray = [4, 5, 6];

// Об'єднання масивів за допомогою методу concat
const combinedArray = firstArray.concat(secondArray);

//альтернативний спосіб:
// Об'єднання масивів за допомогою оператора розширення
//const combinedArray = [...firstArray, ...secondArray];

// Виведення об'єднаного масиву на консоль
console.log(`Об'єднаний масив: ${combinedArray}`);
