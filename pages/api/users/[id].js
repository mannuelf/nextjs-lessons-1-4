const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

export default async function getUserById(req, res) {
  try {
    let user = {};

    if (req.method === "GET") {
      const db = await sqlite.open({
        filename: "./games.sqlite",
        driver: sqlite3.Database,
      });

      // database query
      user = await db.get("SELECT * FROM users WHERE id = ?", [req.query.id]);

      // return the user
      res.json(user);
    }
  } catch (error) {
    console.log(error);
  }
}
