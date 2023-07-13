import Head from "next/head";
import { Inter} from "next/font/google";
import styles from "@/styles/Home.module.scss";
import { motion } from "framer-motion";
import { useRef } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const saveEmail = () => {

  }

  const ref = useRef(null);

  
  return (
    <>
      <Head>
        <title>Stake.gg</title>
        <meta name="description" content="A.I. Powered Investing" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />

  <meta property="og:url" content="https://stake.gg"/>
  <meta property="og:type" content="website"/>
  <meta property="og:title" content="Stake"/>
  <meta property="og:description" content="A.I. Powered Investing"/>
  <meta property="og:image" content="og.png"/>


  <meta name="twitter:card" content="og.png"/>
  <meta property="twitter:domain" content="stake.gg"/>
  <meta property="twitter:url" content="https://stake.gg"/>
  <meta name="twitter:title" content="Stake"/>
  <meta name="twitter:description" content="A.I. Powered Investing"/>
  <meta name="twitter:image" content="og.png"/>
      </Head>
      <main className={styles.main}>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
          className={styles.center}
        >

          {/* <span className={styles.keyword}>AI</span> */}
          <h1>Making investing simple with A.I.</h1>


        </motion.div>

        <div className={styles.testGrid}>
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.75 }}
            className={styles.top}
          >
            <div className={styles.card}>
              <h4 className={inter.className}>Get Early Access</h4>
              {/* <h4 className={inter.className}>Learn More</h4> */}
              <p className={inter.className}>
                Be the one of the first to try Stake.
              </p>
              <a href="https://discord.com" className={styles.connect}>
              Read Primer
              </a>
            </div>
          </motion.div>
        </div>
      </main>
    </>
  );
}
