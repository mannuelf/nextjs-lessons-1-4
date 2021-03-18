const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

export default async function users(req, res) {
  if (req.method === "GET") {
    let allUsers = [];
    try {
      const db = await sqlite.open({
        filename: "./games.sqlite",
        driver: sqlite3.Database,
      });
      allUsers = await db.all("SELECT * FROM users");
    } catch (error) {
      console.log(error);
    }
    res.json(allUsers);
  }
  /* GET, PUT, DELETE, PATCH */

  if (req.method === "PUT") {
    // do stuff
  }
  if (req.method === "PATCH") {
    // do stuff
  }
}
