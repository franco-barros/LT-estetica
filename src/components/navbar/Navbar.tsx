"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Settings, X } from "lucide-react";
import styles from "../../styles/Navbar.module.css";

export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className={styles.navbar}>
      {/* Contenedor del logo a la izquierda */}
      <div className={styles.logoContainer}>
        <img src="/Lt.logo.png" alt="Logo LT" className={styles.logo} />
      </div>

      {/* Menú de escritorio */}
      <ul className={styles.desktopMenu}>
        <li>
          <a href="#hero">Inicio</a>
        </li>
        <li>
          <a href="#about">Nosotros</a>
        </li>
        <li>
          <a href="#services">Servicios</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>

      {/* Botón de menú móvil con animación */}
      <motion.button
        className={styles.menuButton}
        onClick={() => setIsOpen(!isOpen)}
        animate={{ rotate: isOpen ? 180 : 0 }}
        transition={{ duration: 0.5 }}
      >
        {isOpen ? (
          <X size={24} color="#fff" />
        ) : (
          <Settings size={24} color="#fff" />
        )}
      </motion.button>

      {/* Menú móvil desplegable */}
      <AnimatePresence>
        {isOpen && (
          <motion.ul
            className={styles.mobileMenu}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
          >
            <li>
              <a href="#hero">Inicio</a>
            </li>
            <li>
              <a href="#about">Nosotros</a>
            </li>
            <li>
              <a href="#services">Servicios</a>
            </li>
            <li>
              <a href="#contact">Contacto</a>
            </li>
          </motion.ul>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
