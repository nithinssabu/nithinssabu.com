import Head from "next/head";
import { LinkedIn, GitHub } from "@material-ui/icons";
import styles from "../styles/Home.module.css";
import ExternalLink from "../components/ExternalLink";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nithin S. Sabu</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <span className={styles.title}>
          . Engineer . Programmer . Musician .
        </span>
        <p className={styles.summary}>
          I love to write beautiful code to solve complex problems.
        </p>
        <p className={styles.description}>
          Hi, I'm <strong>Nithin S. Sabu</strong>. I am a Software Engineer.
          <br /> I have programmed a variety of computing devices starting from
          tiny microcontrollers to embedded processors to FPGAs to super
          computers. I have 6+ years professional experience as a Full Stack Web
          Developer. I love JavaScript and React.
          {/* <code className={styles.code}>pages/index.js</code> */}
        </p>
      </main>

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
