import Head from "next/head";
import { Hero } from "../components/hero/Hero";
import About from "../components/about/About";
import { Services } from "../components/servicios/Service";
import WhatsappButton from "../components/whatsappbutton/WhatsappButton";
import InstagramFeed from "../components/instagramprofile/InstagramProfile";
import InstagramReel from "../components/instagramreel/InstagramReel"; // Asegúrate de que la ruta es correcta

export default function Home() {
  const instagramImages = [
    "/images/insta1.jpg",
    "/images/insta2.jpg",
    "/images/insta3.jpg",
    "/images/insta4.jpg",
    "/images/insta5.jpg",
    "/images/insta6.jpg",
  ];

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
          message="Hola, me gustaría más información sobre tus servicios."
        />
        <InstagramFeed
          username="lt.esteticavehicular"
          profileUrl="https://www.instagram.com/lt.esteticavehicular"
          images={instagramImages}
        />
        <InstagramReel
          url="https://www.instagram.com/reel/DFiwIGAPuat/?igsh=aDA3cG5jZ25haTE0"
          width="500px"
        />
      </div>
    </>
  );
}
