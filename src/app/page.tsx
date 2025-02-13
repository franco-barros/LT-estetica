// src/pages/index.tsx
import Head from "next/head";
import { Hero } from "../components/hero/Hero";
import { About } from "../components/about/About";
import { Services } from "../components/servicios/Service";

export default function Home() {
  return (
    <>
      <Head>
        <title>LT Estética Vehicular</title>
        <meta
          name="description"
          content="Especialistas en estética vehicular."
        />
      </Head>
      <div>
        <Hero />
        <About />
        <Services />
      </div>
    </>
  );
}
