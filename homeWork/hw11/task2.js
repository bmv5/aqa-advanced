// Функція для запиту до ендпоінту todos/1
function fetchTodo() {
  return fetch('https://jsonplaceholder.typicode.com/todos/1')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch todo');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching todo:', error);
      throw error;
    });
}

// Функція для запиту до ендпоінту users/1
function fetchUser() {
  return fetch('https://jsonplaceholder.typicode.com/users/1')
    .then((response) => {
      if (!response.ok) {
        throw new Error('Failed to fetch user');
      }
      return response.json();
    })
    .catch((error) => {
      console.error('Error fetching user:', error);
      throw error;
    });
}

// Використання Promise.all
Promise.all([fetchTodo(), fetchUser()])
  .then((results) => {
    const [todo, user] = results;
    console.log('Promise.all results:');
    console.log('Todo:', todo);
    console.log('User:', user);
  })
  .catch((error) => {
    console.error('Error in Promise.all:', error);
  });

// Використання Promise.race
Promise.race([fetchTodo(), fetchUser()])
  .then((firstResult) => {
    console.log('Promise.race result:', firstResult);
  })
  .catch((error) => {
    console.error('Error in Promise.race:', error);
  });
