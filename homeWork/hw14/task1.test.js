const axios = require('axios');
const task1 = require('../hw14/task1'); // Імпортуємо функцію з іншого файлу

jest.mock('axios');

describe('task1', () => {
  it('should handle network error and return appropriate message', async () => {
    // Налаштовуємо mock для axios, щоб він викликав помилку
    axios.get.mockRejectedValueOnce(new Error('Network error'));

    // Перевіряємо, чи правильно обробляється помилка
    await expect(task1()).rejects.toThrow('Request error: Network error');
  });

  it('should handle error response from the server and return appropriate message', async () => {
    // Налаштовуємо mock для axios, щоб він повертав помилку з кодом
    axios.get.mockRejectedValueOnce({
      response: {
        status: 404,
      },
    });

    // Перевіряємо, чи правильно обробляється помилка
    await expect(task1()).rejects.toThrow('Error response from server: 404');
  });

  it('should handle no response from the server and return appropriate message', async () => {
    // Налаштовуємо mock для axios, щоб він повертав помилку без відповіді
    axios.get.mockRejectedValueOnce({
      request: {},
    });

    // Перевіряємо, чи правильно обробляється помилка
    await expect(task1()).rejects.toThrow('No response received from server');
  });
});
