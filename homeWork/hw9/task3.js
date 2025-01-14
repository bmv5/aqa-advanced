// Створення об'єкта car1
const car1 = {
  brand: 'Toyota',
  model: 'Corolla',
  year: 2018,
};

// Створення об'єкта car2
const car2 = {
  brand: 'Honda',
  model: 'Civic',
  owner: 'Peter Parker',
};

// Створення об'єкта car3 з використанням оператора spread
const car3 = {
  ...car1,
  ...car2,
};

// Виведення об'єкта car3 в консоль
console.log(car3);
