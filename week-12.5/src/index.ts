// write a function to create a users table in your database.
import { Client } from "pg";

const client = new Client({
  connectionString: "postgresql://postgres:Nirbhay@localhost/postgres",
});

// async function createUsersTable() {
// await client.connect();
// const result = await client.query(`
//       CREATE TABLE users2 (
//           id SERIAL PRIMARY KEY,
//           username VARCHAR(50) UNIQUE NOT NULL,
//           email VARCHAR(255) UNIQUE NOT NULL,
//           password VARCHAR(255) NOT NULL,
//           created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
//       );
//   `);
async function insertUserData(
  username: string,
  password: string,
  email: string
) {
  await client.connect();
  //sql injection
  const result = await client.query(
    `INSERT INTO users(username, password, email)
    VALUES ($1, $2, $3)`,
    [username, password, email]
  );
  console.log(result);
}

insertUserData("user2", "123", "nirbhay12@gmail.com");
