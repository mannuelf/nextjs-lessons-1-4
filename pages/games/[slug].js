import Layout from "../../components/Layout/Layout";
import { BASE_URL } from "../../constants/api";
import axios from "axios";

export default function Games({ game }) {
  return (
    <Layout>
      <h1>{game.name}</h1>
      <h2>Rating: {game.rating}</h2>
      <img src={game.screenshots[0].image} />
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const res = await axios.get(BASE_URL);
    const games = res.data.data;

    const paths = games.map((game) => ({
      params: { slug: game.slug },
    }));

    return { paths: paths, fallback: false };
  } catch (err) {
    console.log(err);
  }
}

export async function getStaticProps({ params }) {
  console.log("🚀", params);
  const url = `${BASE_URL}/${params.slug}`;
  let game = null;
  try {
    const res = await axios.get(url);
    game = res.data;
  } catch (err) {
    console.log(err);
  }

  return {
    props: { game: game },
  };
}
