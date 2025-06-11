import { NavLink } from "react-router-dom";
import { useEffect } from "react";
import styles from "./Navbar.module.css";

export default function Navbar() {
  // Função para alternar tema
  const toggleTheme = () => {
    const current = document.documentElement.getAttribute("data-theme");
    const newTheme = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Carrega tema salvo ao iniciar
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  return (
    <nav className={styles.navbar}>
      {/* Lado esquerdo - Logo/Nome */}
      <div className={styles.leftSection}>
        <div className={styles.profilePhoto}>
          <img src="/caminho/para/sua-foto.jpg" alt="Foto de perfil" />
        </div>
        <div className={styles.name}>Filipe Batista</div>
      </div>

      {/* Lado direito - Links e botão */}
      <div className={styles.rightSection}>
        <div className={styles.navLinks}>
          <NavLink 
            to="#home" 
            className={({ isActive }) => isActive ? styles.active : undefined}
          >
            Home
          </NavLink>
          <NavLink 
            to="#sobre" 
            className={({ isActive }) => isActive ? styles.active : undefined}
          >
            Sobre
          </NavLink>
          <NavLink 
            to="#projetos" 
            className={({ isActive }) => isActive ? styles.active : undefined}
          >
            Projetos
          </NavLink>
          <NavLink 
            to="#contato" 
            className={({ isActive }) => isActive ? styles.active : undefined}
          >
            Contato
          </NavLink>
        </div>

        <button onClick={toggleTheme} className={styles.themeToggle}>
          Alternar Tema
        </button>
      </div>
    </nav>
  );
}