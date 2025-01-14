const axios = require("axios");

const baseURL = "https://jsonplaceholder.typicode.com";

describe("JSONPlaceholder API Tests", () => {
  test("GET /posts/1 - should return a post with correct structure", async () => {
    const response = await axios.get(`${baseURL}/posts/1`);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("id", 1);
    expect(response.data).toHaveProperty("userId");
    expect(response.data).toHaveProperty("title");
    expect(response.data).toHaveProperty("body");
  });

  test("POST /posts - should create a new post and return it", async () => {
    const newPost = {
      title: "Test Post",
      body: "This is a test post.",
      userId: 1,
    };

    const response = await axios.post(`${baseURL}/posts`, newPost);

    expect(response.status).toBe(201);
    expect(response.data).toMatchObject(newPost);
    expect(response.data).toHaveProperty("id");
  });

  test("GET /users/1 - should return a user with correct structure", async () => {
    const response = await axios.get(`${baseURL}/users/1`);

    expect(response.status).toBe(200);
    expect(response.data).toHaveProperty("id", 1);
    expect(response.data).toHaveProperty("name");
    expect(response.data).toHaveProperty("username");
    expect(response.data).toHaveProperty("email");
  });

  test("GET /comments?postId=1 - should return comments for a specific post", async () => {
    const response = await axios.get(`${baseURL}/comments`, {
      params: { postId: 1 },
    });

    expect(response.status).toBe(200);
    expect(response.data).toBeInstanceOf(Array);
    expect(response.data.length).toBeGreaterThan(0);

    response.data.forEach((comment) => {
      expect(comment).toHaveProperty("postId", 1);
      expect(comment).toHaveProperty("id");
      expect(comment).toHaveProperty("name");
      expect(comment).toHaveProperty("email");
      expect(comment).toHaveProperty("body");
    });
  });

  test("POST /comments - should create a new comment and return it", async () => {
    const newComment = {
      postId: 1,
      name: "Test Comment",
      email: "test@example.com",
      body: "This is a test comment.",
    };

    const response = await axios.post(`${baseURL}/comments`, newComment);

    expect(response.status).toBe(201);
    expect(response.data).toMatchObject(newComment);
    expect(response.data).toHaveProperty("id");
  });
});
