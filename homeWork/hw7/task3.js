function divide(numerator, denominator) {
  // Валідація: перевірка, чи є обидва аргументи числами
  if (typeof numerator !== 'number' || typeof denominator !== 'number') {
    throw new Error('Both arguments must be numbers.');
  }

  // Валідація: перевірка, чи не є denominator нулем
  if (denominator === 0) {
    throw new Error('Denominator cannot be zero.');
  }

  // Виконання ділення
  return numerator / denominator;
}

// Виклики функції з різними значеннями
try {
  console.log(divide(10, 2)); // 5
} catch (error) {
  console.log(error.message);
} finally {
  console.log('Робота завершена.');
}

try {
  console.log(divide(10, 0)); // Викине помилку
} catch (error) {
  console.log(error.message); // "Denominator cannot be zero."
} finally {
  console.log('Робота завершена.');
}

try {
  console.log(divide(10, 'a')); // Викине помилку
} catch (error) {
  console.log(error.message); // "Both arguments must be numbers."
} finally {
  console.log('Робота завершена.');
}

try {
  console.log(divide('10', 2)); // Викине помилку
} catch (error) {
  console.log(error.message); // "Both arguments must be numbers."
} finally {
  console.log('Робота завершена.');
}
