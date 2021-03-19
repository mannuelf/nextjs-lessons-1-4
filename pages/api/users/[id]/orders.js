const openDB = require("../../db");

export default async function getOrdersByUserId(req, res) {
  console.log(req.query);
  if (req.method === "GET") {
    try {
      const db = await openDB();
      const usersOrders = await db.all(
        "SELECT * FROM orders WHERE userID = ?",
        [req.query.id]
      );
      db.close();
      res.json(usersOrders);
    } catch (error) {
      console.log(error);
    }
  }
}
