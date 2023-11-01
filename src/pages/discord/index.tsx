import { useEffect } from 'react';
import { useRouter } from 'next/router';
import styles from "@/styles/Home.module.scss";

import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });


const DiscordRedirect = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to your Discord link after a short delay (e.g., 2 seconds)
    const redirectTimer = setTimeout(() => {
      router.push('https://discord.gg/2WDHDnbQvx');
    }, 1000);

    // Clean up the timer when the component unmounts
    return () => clearTimeout(redirectTimer);
  }, []);

  return (
    <main className={styles.main}>
    <div>
      <p>Redirecting to Discord...</p>
      {/* You can add a loading message or spinner here if you want */}
    </div>
    </main>
  );
};

export default DiscordRedirect;
