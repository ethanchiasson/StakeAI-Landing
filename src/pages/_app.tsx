import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "@/styles/Globals.scss";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Navbar />
      <Component {...pageProps} />
      <Footer/>
    </>
  );
}
