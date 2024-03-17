import mysql from "mysql2/promise";

export default async function handler(req, res) {
  const dbconnection = await mysql.createConnection({
    host: "localhost",
    database: "myblogdb",
    // port: 8889,
    user: "root",
    password: "password",
    socketPath: "/Applications/MAMP/tmp/mysql/mysql.sock",
  });
  try {
    const query = "SELECT id, title, description FROM posts";
    const values = [];
    const [data] = await dbconnection.execute(query, values);
    dbconnection.end();

    res.status(200).json({ posts: data });
  } catch (error) {
    // unhide to check error
    // res.status(500).json({ error: error.message });
  }
}
