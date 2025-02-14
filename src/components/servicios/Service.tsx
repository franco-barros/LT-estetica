import styles from "../../styles/Services.module.css";

export const Services = () => {
  const serviceList = [
    {
      name: "PARA GRANIZO",
      description: "",
    },
    { name: "SACABOLLOS", description: "" },
    { name: "TRATAMIENTO CERÁMICO", description: "" },
    { name: "TRATAMIENTO ACRÍLICO", description: "" },
    { name: "PULIDO DE ÓPTICAS", description: "" },
    { name: "LAVADO DE MOTOR", description: "" },
    { name: "ABRILLANTADO", description: "" },
    { name: "LIMPIEZA DE TAPIZADO", description: "" },
    { name: "SERVICIO PRE-VENTA", description: "" },
  ];

  return (
    <section className={styles.services}>
      <h2>Nuestros Servicios</h2>
      <ul>
        {serviceList.map((service, index) => (
          <li key={index}>
            <h3>{service.name}</h3>
            {service.description && <p>{service.description}</p>}
            {/* Espacio reservado para imágenes o videos futuros */}
            <div className={styles.mediaPlaceholder}>
              <p>Espacio para imagen o video</p>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Services;
