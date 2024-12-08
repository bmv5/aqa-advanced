import chalk from 'chalk';

// Використовуємо chalk
console.log(chalk.green('This is a green text!'));
console.log(chalk.red('This is a red text!'));
// Виведення тексту з фоновим кольором
console.log(chalk.bgYellow.black('This is a yellow background with black text!'));

// Виведення тексту з кількома стилями
console.log(chalk.blue.bold.underline('This is blue, bold, and underlined text!'));