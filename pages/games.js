import Layout from "../components/Layout/Layout";
import styles from "../styles/About.module.css";
import axios from "axios";
import { BASE_URL } from "../constants/api";

export default function Games({ games }) {
  return (
    <Layout>
      <div className={styles.container}>
        {games
          ? games.map((game, index) => {
              return (
                <div key={index} data-id={index}>
                  <a key={game.slug} href={`games/${game.slug}`}>
                    <h1>{game.name}</h1>
                    <img src={game.screenshots[0].image} />
                  </a>
                </div>
              );
            })
          : "loading..."}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  let games = [];

  try {
    const res = await axios.get(BASE_URL);
    games = res.data.data;
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      games: games,
    },
  };
}
