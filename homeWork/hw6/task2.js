//Створіть функцію яка приймає один параметр: age.
//Усередині функції перевірте, чи age більше або рівне 18.
//Якщо age відповідає умові, поверніть true, інакше поверніть false.
//Викличте вашу функцію з аргументами 25 і 15, і виведіть результат (чи є особа дорослою) в консоль для кожного випадку.

function checkAdult(age) {
    if (age >= 18) {
      return true;
    } else {
      return false;
    }
  }
  
  // Виклик функції для віку 25
  console.log(checkAdult(25)); // Виведе true, оскільки 25 >= 18
  
  // Виклик функції для віку 15
  console.log(checkAdult(15)); // Виведе false, оскільки 15 < 18