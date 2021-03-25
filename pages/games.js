import Layout from "../components/Layout/Layout";
import styles from "../styles/About.module.scss";
import axios from "axios";
import { REACT_APP_BASE_URL, API_KEY } from "../constants/api";
import Image from "next/image";

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
                    <Image
                      width="400"
                      height="auto"
                      src={game.background_image}
                    />
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
  const url = `${REACT_APP_BASE_URL}games?key=${API_KEY}`;
  let games = [];

  try {
    const res = await axios.get(url);
    games = res.data.results;
  } catch (error) {
    throw new Error(error);
  }

  return {
    props: {
      games: games,
    },
  };
}
