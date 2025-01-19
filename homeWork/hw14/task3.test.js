// task3.test.js
const axios = require('axios');
const fetchData = require('./task3');

// Мокаємо axios
jest.mock('axios');

describe('Mocking Axios in Jest', () => {

  it('should return data when the HTTP request is successful', async () => {
    // Мокаємо успішну відповідь
    const mockResponse = { data: { id: 1, name: 'John Doe' } };
    axios.get.mockResolvedValue(mockResponse);

    const result = await fetchData('https://api.example.com/user/1');

    // Перевіряємо, чи викликався axios з правильним URL
    expect(axios.get).toHaveBeenCalledWith('https://api.example.com/user/1');
    
    // Перевіряємо, чи повертається правильна інформація
    expect(result).toEqual(mockResponse.data);
  });

  it('should throw an error when the HTTP request fails with a 404 status', async () => {
    // Мокаємо відповідь на помилку
    const mockError = { response: { status: 404 } };
    axios.get.mockRejectedValue(mockError);

    try {
      await fetchData('https://api.example.com/user/999');
    } catch (error) {
      // Перевіряємо, чи помилка оброблена належним чином
      expect(error.message).toBe('Server Error: 404');
    }
  });

  it('should throw an error when no response is received from the server', async () => {
    // Мокаємо помилку без відповіді від сервера
    const mockError = { request: {} };
    axios.get.mockRejectedValue(mockError);

    try {
      await fetchData('https://api.example.com/user/1');
    } catch (error) {
      // Перевіряємо, чи помилка оброблена належним чином
      expect(error.message).toBe('No response received from server');
    }
  });

  it('should throw an error for other unexpected errors', async () => {
    // Мокаємо невідому помилку
    const mockError = { message: 'Unknown error' };
    axios.get.mockRejectedValue(mockError);

    try {
      await fetchData('https://api.example.com/user/1');
    } catch (error) {
      // Перевіряємо, чи помилка оброблена належним чином
      expect(error.message).toBe('Error: Unknown error');
    }
  });
});
