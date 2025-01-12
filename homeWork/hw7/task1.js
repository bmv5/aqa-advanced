// Функція handleNum
function handleNum(num, handleEven, handleOdd) {
  if (num % 2 === 0) {
    handleEven(); // Якщо число парне, викликаємо handleEven
  } else {
    handleOdd(); // Якщо число непарне, викликаємо handleOdd
  }
}

// Колбек для парного числа
function handleEven() {
  console.log('number is even');
}

// Колбек для непарного числа
function handleOdd() {
  console.log('number is odd');
}

// Викликаємо handleNum з числом і колбеками
handleNum(4, handleEven, handleOdd); // Виведе: "number is even"
handleNum(7, handleEven, handleOdd); // Виведе: "number is odd"
