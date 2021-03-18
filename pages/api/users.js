export default async function users(req, res) {
  /*
  GET
  PUT
  DELETE
  PATCH
  */
  if (req.method === "GET") {
    const user = {
      id: 1,
      username: "Mannuel",
      age: 39,
    };
    res.json(user);
  }
  if (req.method === "PUT") {
    // do stuff
  }
  if (req.method === "PATCH") {
    // do stuff
  }
}
