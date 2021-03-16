import Layout from "../components/Layout/Layout";
import styles from "../styles/About.module.css";

export default function LatestNews() {
  return (
    <Layout>
      <div className={styles.container}>
        <h1>Latest News</h1>
        <p>News page yay.</p>
        <h2>Headline blah blah</h2>
      </div>
    </Layout>
  );
}
