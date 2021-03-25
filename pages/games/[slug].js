import Layout from "../../components/Layout/Layout";
import { REACT_APP_BASE_URL, REACT_APP_API_KEY } from "../../constants/api";
import axios from "axios";
const url = `${REACT_APP_BASE_URL}/games?key=${API_KEY}`;
console.log(url);

function renderMarkup(theMarkup) {
  return { __html: theMarkup };
}
export default function Games({ game }) {
  return (
    <Layout>
      <h1>{game.name}</h1>
      <div dangerouslySetInnerHTML={renderMarkup(game.description)} />
    </Layout>
  );
}

export async function getStaticPaths() {
  try {
    const res = await axios.get(`${REACT_APP_BASE_URL}/games?key=${API_KEY}`);

    const games = res.data.results;
    const paths = games.map((game) => ({
      params: { slug: game.slug },
    }));

    return { paths: paths, fallback: false };
  } catch (error) {
    throw new Error(error);
  }
}

export async function getStaticProps({ params }) {
  const url = `${REACT_APP_BASE_URL}/games/${params.slug}`;
  let game = null;
  try {
    const res = await axios.get(url);
    game = res.data;
  } catch (error) {
    throw new Error(error);
  }

  return {
    props: { game: game },
  };
}
