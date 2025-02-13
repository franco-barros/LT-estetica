import styles from "../../styles/Services.module.css";

export const Services = () => {
  return (
    <section className={styles.services}>
      <h2>Nuestros Servicios</h2>
      <ul>
        <li>Lavado y detallado premium</li>
        <li>Encerado y protección cerámica</li>
        <li>Restauración de pintura y faros</li>
      </ul>
    </section>
  );
};

export default Services;
