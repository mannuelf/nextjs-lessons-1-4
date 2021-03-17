import Layout from "../components/Layout/Layout";
import styles from "../styles/About.module.css";
import axios from "axios";
import { BASE_URL } from "../constants/api";

export default function LatestNews({ news }) {
  return (
    <Layout>
      <div className={styles.container}>
        {news
          ? news.map((newsItem, index) => {
              return (
                <div key={index} data-id={index}>
                  <h1>{newsItem.title}</h1>
                  <p>{newsItem.description}</p>
                </div>
              );
            })
          : "loading..."}
      </div>
    </Layout>
  );
}

export async function getStaticProps() {
  let news = [];

  try {
    const res = await axios.get(BASE_URL);
    news = res.data.articles;
  } catch (e) {
    console.log(e);
  }

  return {
    props: {
      news: news,
    },
  };
}
