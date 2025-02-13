// src/components/Navbar/Navbar.tsx
import Link from "next/link";
import styles from "../../styles/Navbar.module.css";

export const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div className={styles.logo}>LT Estética Vehicular</div>
      <ul className={styles.navLinks}>
        <li>
          <Link href="#about">Nosotros</Link>
        </li>
        <li>
          <Link href="#services">Servicios</Link>
        </li>
        <li>
          <Link href="#contact">Contacto</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
