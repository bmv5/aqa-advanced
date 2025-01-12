// Створення об'єкта person
const person = {
  firstName: 'Peter',
  lastName: 'Parker',
  age: 30,
};

// Додавання властивості email
person.email = 'peter.parker@example.com';

// Видалення властивості age
delete person.age;

// Виведення оновленого об'єкта person в консоль
console.log(person);
