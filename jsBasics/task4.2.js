//Завдання 4.2
//Створіть змінну length і присвойте їй числове значення довжини прямокутника.
//Створіть змінну width і присвойте їй числове значення ширини прямокутника.
//Обчисліть площу прямокутника за формулою length * width і виведіть результат.

/// Оголошення змінних для довжини та ширини прямокутника
let length = 8; // Наприклад, довжина прямокутника 
let width = 5;  // Наприклад, ширина прямокутника 

// Обчислення площі прямокутника за формулою length * width
let area = length * width;

// Виведення результату в консоль
console.log("Площа прямокутника з довжиною", length, "і шириною", width, "дорівнює", area);

//Виведення результату із застосуванням шаблонного рядка
console.log(`Площа прямокутника з довжиною ${length} і шириною ${width} дорівнює ${area}`);