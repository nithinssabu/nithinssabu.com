import Head from "next/head";
import { LinkedIn, GitHub } from "@material-ui/icons";
import { Grid, Container, Box } from "@material-ui/core";
import Timeline from "../components/Timeline/Timeline";
import styles from "../styles/Home.module.css";
import ExternalLink from "../components/ExternalLink";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Nithin S. Sabu</title>
        <link rel="icon" href="/logo.svg" />
      </Head>

      <nav className={styles.nav}>
        <Container className={styles.menu}>
          <img src="logo.svg" alt="logo" width="50" color="lightblue" />
        </Container>
      </nav>

      <main className={styles.main}>
        <Container className={styles.title}>
          <Grid container spacing={1}>
            <Grid item>. Engineer</Grid>
            <Grid item>. Programmer</Grid>
            <Grid item>. Musician .</Grid>
          </Grid>
        </Container>
        <p className={styles.summary}>
          I love to write beautiful code to solve complex problems.
        </p>
        <Container className={styles.mainImage}>
          <img src="coding.svg" width="260px" />
        </Container>
        <Box className={styles.descriptionBox}>
          <Container className={styles.description}>
            <p>
              Hi, I'm{" "}
              <span className={styles.primary}>
                <strong>Nithin S. Sabu</strong>
              </span>
              . <br />
              <br />I am a Software Engineer.
              <br /> I have programmed different types of computing devices
              starting from tiny microcontrollers to embedded processors to
              FPGAs to super computers &amp; have 6+ years professional
              experience as a Full Stack Web Developer. I love JavaScript and
              React.
            </p>
            {/* </Paper> */}
          </Container>
        </Box>
      </main>

      <Container className={styles.timeline}>
        <Timeline />
      </Container>

      <footer className={styles.footer}>
        <ExternalLink
          href="https://www.linkedin.com/in/90nithinsabu"
          aria-label="Github profile"
          rel="me"
        >
          <span className={styles.footerIcon}>
            <LinkedIn />
          </span>
        </ExternalLink>
        <ExternalLink
          href="https://github.com/nithinssabu"
          aria-label="Github profile"
          rel="me"
        >
          <span className={styles.footerIcon}>
            <GitHub />
          </span>
        </ExternalLink>
      </footer>
    </div>
  );
}
