// task2.test.js
const axios = require('axios');
const makeRequest = require('./task2');

// Мокаємо axios, щоб перевірити, чи були надіслані правильні заголовки та параметри
jest.mock('axios');

describe('Testing Request Headers and Params', () => {
  it('should include custom headers and parameters in the request', async () => {
    const mockResponse = { data: [{ id: 1, title: 'Test Post' }] };
    
    // Мокаємо відповідь axios
    axios.get.mockResolvedValue(mockResponse);
    
    const result = await makeRequest();
    
    // Перевіряємо, чи правильні заголовки і параметри були надіслані
    expect(axios.get).toHaveBeenCalledWith('https://jsonplaceholder.typicode.com/posts', {
      headers: {
        'Authorization': 'Bearer my-token',
        'Content-Type': 'application/json',
      },
      params: {
        userId: 1,
        limit: 5,
      },
    });
    
    // Перевіряємо, чи результат відповідає мокованому значенню
    expect(result).toEqual(mockResponse.data);
  });
});
