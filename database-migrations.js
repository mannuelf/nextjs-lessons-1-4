const sqlite = require("sqlite");
const sqlite3 = require("sqlite3");

async function setup() {
  try {
    const db = await sqlite.open({
      filename: "./games.sqlite",
      driver: sqlite3.Database,
    });
    await db.migrate();
  } catch (error) {
    throw new Error(error);
  }
}

setup();
