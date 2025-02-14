"use client";
import { motion } from "framer-motion";
import styles from "../../styles/About.module.css";

// Usamos motion.section directamente
const MotionSection = motion.section;

const About = () => {
  return (
    <MotionSection
      className={styles.about}
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1, ease: "easeOut" }}
    >
      <h2>Sobre Nosotros</h2>
      <p>
        En <strong>LT Estética Vehicular</strong> nos dedicamos a cuidar y
        preservar la estética de tu vehículo, prolongando la vida útil de cada
        componente mediante selladores de alta calidad.
      </p>
      <p>
        Con <strong>SACABOLLOS</strong> realizamos reparaciones artesanales,
        evitando métodos invasivos como masillas o soldaduras, y dejando tu auto
        en condiciones óptimas.
      </p>
      <p>
        Nuestro taller, liderado por <strong>LAUTARO TELLO</strong>, un joven
        apasionado que inició en 2019 y ya ha tratado más de 150 vehículos,
        combina formación continua y experiencia para brindar el mejor servicio.
      </p>
      <p>
        Además, en esta temporada de <strong>granizo</strong> implementamos
        soluciones especializadas para restaurar y proteger tu auto de los
        daños, asegurando un cuidado integral.
      </p>
    </MotionSection>
  );
};

export default About;
