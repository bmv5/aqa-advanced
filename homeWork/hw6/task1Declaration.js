//Function Declaration дозволяє використовувати функцію до її оголошення завдяки механізму hoisting.

function calculateArea(width, height) {
    return width * height;
  }
  
  console.log(`Площа прямокутника = ${calculateArea(5, 10)}`); // Виведе "Площа прямокутника = 50"