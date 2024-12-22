function countDown(num) {
    // Виводимо поточне значення num в консоль
    console.log(num);
  
    // Якщо num більше 0, рекурсивно викликаємо countDown зі значенням num - 1
    if (num > 0) {
      countDown(num - 1);
    }
  }
  
  // Викликаємо функцію з аргументом 5
  countDown(5);
  