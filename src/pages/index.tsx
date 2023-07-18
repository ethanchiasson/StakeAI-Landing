import Head from "next/head";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { motion } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Stake</title>
        <meta name="description" content="A.I. Investing Sidekick" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/star.png" />

        <meta property="og:url" content="https://stake.gg" />
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Stake" />
        <meta property="og:description" content="A.I. Investing Sidekick." />
        <meta property="og:image" content="/OGImage.png" />

        <meta name="twitter:card" content="/OGImage.png" />
        <meta property="twitter:domain" content="stake.gg" />
        <meta property="twitter:url" content="https://stake.gg" />
        <meta name="twitter:title" content="Stake" />
        <meta name="twitter:description" content="A.I. Investing Sidekick" />
        <meta name="twitter:image" content="/OGImage.png" />
      </Head>
      <main className={styles.main}>
        <motion.div
          initial={{ opacity: 0, y: -11 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={styles.center}
        >
          {/* <span className={styles.keyword}>AI</span> */}
          <h1 className={styles.title}>Your A.I. investing sidekick.</h1>
        </motion.div>

        <div className={styles.testGrid}>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.25, delay: 0.75 }}
            className={styles.top}
          >
            <div className={styles.card}>
              <h4 className={inter.className}>✦ Get early access</h4>
              {/* <h4 className={inter.className}>Learn More</h4> */}
              <p className={inter.className}>
                Learn how Stake aims to change the way people invest.
              </p>
              <a href="https://tally.so/r/3qaxDd" className={styles.connect}>
                Request a demo
              </a>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
