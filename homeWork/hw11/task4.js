// Клас для роботи з todo
class TodoService {
  async fetchTodo() {
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
}

// Клас для роботи з user
class UserService {
  async fetchUser() {
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
}

// Основний клас для виконання запитів
class RequestHandler {
  constructor(todoService, userService) {
    this.todoService = todoService;
    this.userService = userService;
  }

  // Виконання Promise.all
  async handleAllRequests() {
    try {
      const results = await Promise.all([
        this.todoService.fetchTodo(),
        this.userService.fetchUser(),
      ]);
      const [todo, user] = results;
      console.log('Promise.all results:');
      console.log('Todo:', todo);
      console.log('User:', user);
    } catch (error) {
      console.error('Error in Promise.all:', error);
    }
  }

  // Виконання Promise.race
  async handleRaceRequest() {
    try {
      const result = await Promise.race([
        this.todoService.fetchTodo(),
        this.userService.fetchUser(),
      ]);
      console.log('Promise.race result:', result);
    } catch (error) {
      console.error('Error in Promise.race:', error);
    }
  }
}

// Використання класів
const todoService = new TodoService();
const userService = new UserService();
const requestHandler = new RequestHandler(todoService, userService);

// Виконуємо запити
requestHandler.handleAllRequests();
requestHandler.handleRaceRequest();
