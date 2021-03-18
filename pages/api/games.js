export default async function games(req, res) {
  const game = {
    // call to tbe database
    id: 3498,
    slug: "grand-theft-auto-v",
    name: "Grand Theft Auto V",
    released: "2013-09-17",
  };
  res.json(game);
}
