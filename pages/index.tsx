import Head from "next/head";
import { LinkedIn, GitHub } from "@material-ui/icons";
import styles from "../styles/Home.module.css";
import CodingTimeline from "../components/CodingTimeline";
import ExternalLink from "../components/ExternalLink";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nithin S. Sabu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Hello, I'm <a href="/">Nithin S. Sabu</a>
        </h1>

        <p className={styles.description}>
          I'm an engineer who loves everything computers.
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>
      </main>

      <CodingTimeline />

      <footer className={styles.footer}>
        <ExternalLink
          href="https://www.linkedin.com/in/90nithinsabu"
          aria-label="Github profile"
          rel="me"
        >
          <LinkedIn />
        </ExternalLink>
        <ExternalLink
          href="https://github.com/nithinssabu"
          aria-label="Github profile"
          rel="me"
        >
          <GitHub />
        </ExternalLink>
      </footer>
    </div>
  );
}
