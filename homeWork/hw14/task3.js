// task3.js
const axios = require('axios');

const fetchData = async (url) => {
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    if (error.response) {
      // Сервер повернув помилку
      throw new Error(`Server Error: ${error.response.status}`);
    } else if (error.request) {
      // Запит був відправлений, але відповіді не отримано
      throw new Error('No response received from server');
    } else {
      // Виникла інша помилка
      throw new Error(`Error: ${error.message}`);
    }
  }
};

module.exports = fetchData;
