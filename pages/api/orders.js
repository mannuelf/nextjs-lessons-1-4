const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

export default async function orders(req, res) {
  if (req.method === "GET") {
    let allOrders = [];
    try {
      const db = await sqlite.open({
        filename: "./games.sqlite",
        driver: sqlite3.Database,
      });
      allOrders = await db.all("SELECT * FROM orders");
    } catch (error) {
      console.log(error);
    }
    res.json(allOrders);
  }
}
