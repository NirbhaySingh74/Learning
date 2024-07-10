const { Client } = require("pg");

const client = new Client({
  connectionString: "postgresql://postgres:Nirbhay@localhost/postgres",
});

async function createUsersTable() {
  await client.connect();
  const result = await client.query(`
         CREATE TABLE users (
            id SERIAL PRIMARY KEY,
            username VARCHAR(50) UNIQUE NOT NULL,
            email VARCHAR(255) UNIQUE NOT NULL,
            password VARCHAR(255) NOT NULL,
            created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP
        );
        `);
  console.log(result);
}
// createUsersTable();

//Async function to insert data into a table
async function insertData() {
  const client = new Client({
    host: "localhost",
    port: 5432,
    database: "postgres",
    user: "postgres",
    password: "Nirbhay",
  });

  try {
    await client.connect();
    const insertQuery =
      "INSERT INTO users (username, email, password) VALUES ('username2', 'user3@example.com','user_password');";
    const res = await client.query(insertQuery);
    console.log("Insertion success", res);
  } catch (error) {
    console.error("Error during insertion:", error);
    await client.end(); //close the client connection
  }
}

//Async function to fetch user data from the database given an email
async function getUser(email) {
  const client = new Client({
    host: "localhost",
    port: 5432,
    database: "postgres",
    user: "postgres",
    password: "Nirbhay",
  });

  await client.connect(); //Ensure client connection is established
  const query = "SELECT * FROM users WHERE email = $1";
  const result = await client.query(query, [email]);

  if (result.rows.length > 0) {
    console.log("User found:", result.rows[0]); //output user data
    return result.rows[0]; //Return the user data
  } else {
    console.log("No user found with the given email.");
    return null;
  }
}
// insertData();
getUser("johndoe@example.com").catch(console.error);
