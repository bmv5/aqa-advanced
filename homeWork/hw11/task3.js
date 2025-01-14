// Функція для запиту до ендпоінту todos/1
async function fetchTodo() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/todos/1',
    );
    if (!response.ok) {
      throw new Error('Failed to fetch todo');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching todo:', error);
    throw error; // Прокидаємо помилку далі
  }
}

// Функція для запиту до ендпоінту users/1
async function fetchUser() {
  try {
    const response = await fetch(
      'https://jsonplaceholder.typicode.com/users/1',
    );
    if (!response.ok) {
      throw new Error('Failed to fetch user');
    }
    return await response.json();
  } catch (error) {
    console.error('Error fetching user:', error);
    throw error; // Прокидаємо помилку далі
  }
}

// Функція для виконання Promise.all і Promise.race
async function executeRequests() {
  try {
    // Виконання Promise.all
    const allResults = await Promise.all([fetchTodo(), fetchUser()]);
    const [todo, user] = allResults;
    console.log('Promise.all results:');
    console.log('Todo:', todo);
    console.log('User:', user);
  } catch (error) {
    console.error('Error in Promise.all:', error);
  }

  try {
    // Виконання Promise.race
    const raceResult = await Promise.race([fetchTodo(), fetchUser()]);
    console.log('Promise.race result:', raceResult);
  } catch (error) {
    console.error('Error in Promise.race:', error);
  }
}

// Викликаємо функцію
executeRequests();
