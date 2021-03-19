const openDB = require("../db");

export default async function users(req, res) {
  if (req.method === "GET") {
    let allUsers = [];
    try {
      const db = await openDB();
      allUsers = await db.all("SELECT * FROM users");
      db.close();
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
