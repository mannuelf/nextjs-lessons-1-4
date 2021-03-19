const openDB = require("../../db");
// users/{id}/orders/{id}
export default async function getUserById(req, res) {
  console.log(req.query);
  try {
    let user = {};

    if (req.method === "GET") {
      const db = await openDB();
      // database query
      user = await db.get("SELECT * FROM users WHERE id = ?", [req.query.id]);
      db.close();
      // return the user
      res.json(user);
    }
  } catch (error) {
    console.log(error);
  }
}
