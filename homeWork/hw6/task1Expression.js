//Function Expression створює функцію як вираз і прив'язує її до змінної, тож її можна використовувати лише після оголошення.

const calculateArea = function (width, height) {
  return width * height;
};

console.log(`Площа прямокутника = ${calculateArea(5, 10)}`); // Виведе "Площа прямокутника = 50"
