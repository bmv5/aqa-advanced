// Створення масиву об'єктів users
const users = [
  { name: 'Alice', email: 'alice@example.com', age: 25, gender: 'female' },
  { name: 'Bob', email: 'bob@example.com', age: 30, gender: 'male' },
  { name: 'Charlie', email: 'charlie@example.com', age: 35, gender: 'male' },
];

// Перебір масиву за допомогою циклу for...of з деструктуризацією
for (const { name, email, age, gender } of users) {
  console.log(`Name: ${name}, Email: ${email}, Age: ${age}, Gender: ${gender}`);
}
