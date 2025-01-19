const axios = require('axios');

async function task1() {
  try {
    const response = await axios.get('https://invalidurl.com');
    return response.data;
  } catch (error) {
    if (error.response) {
      // Сервер повернув помилку з кодом
      throw new Error(`Error response from server: ${error.response.status}`);
    } else if (error.request) {
      // Запит був надісланий, але немає відповіді
      throw new Error('No response received from server');
    } else {
      // Помилка при налаштуванні запиту
      throw new Error(`Request error: ${error.message}`);
    }
  }
}

module.exports = task1;
