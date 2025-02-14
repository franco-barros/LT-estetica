import Head from "next/head";
import { Hero } from "../components/hero/Hero";
import About from "../components/about/About";
import { Services } from "../components/servicios/Service";
import WhatsappButton from "../components/whatsappbutton/whatsappbutton";

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
        <WhatsappButton
          phoneNumber="2645279792"
          message="Hola, me gustaría más información."
        />
      </div>
    </>
  );
}
