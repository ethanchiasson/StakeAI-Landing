import { useEffect } from 'react';
import { useRouter } from 'next/router';

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
    <div>
      <p>Redirecting to Discord...</p>
      {/* You can add a loading message or spinner here if you want */}
    </div>
  );
};

export default DiscordRedirect;
