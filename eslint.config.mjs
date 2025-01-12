// eslint.config.mjs
import { Linter } from 'eslint';
import globals from 'globals';
import prettier from 'eslint-plugin-prettier';  // Імпортуємо плагін Prettier

/** @type {import('eslint').Linter.Config[]} */
export default [
  {
    files: ["**/*.js"],
    languageOptions: {
      sourceType: "module",
      globals: globals.browser,
    },
    plugins: {
      prettier: prettier, // Визначаємо плагін у форматі об'єкта
    },
    rules: {
      "prettier/prettier": ["error"], // Правило для Prettier
    },
  },
];
