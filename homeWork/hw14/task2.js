// task2.js
const axios = require('axios');

const makeRequest = async () => {
  try {
    const response = await axios.get('https://jsonplaceholder.typicode.com/posts', {
      headers: {
        'Authorization': 'Bearer my-token',
        'Content-Type': 'application/json',
      },
      params: {
        userId: 1,
        limit: 5,
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error);
  }
};

module.exports = makeRequest;
