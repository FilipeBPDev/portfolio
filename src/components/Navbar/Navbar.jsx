import { useEffect, useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const [activeSection, setActiveSection] = useState("home");
  const [menuOpen, setMenuOpen] = useState(false);

  // Alternar tema
  const toggleTheme = () => {
    const current = document.documentElement.getAttribute("data-theme");
    const newTheme = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
  };

  // Carregar tema salvo
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || "light";
    document.documentElement.setAttribute("data-theme", savedTheme);
  }, []);

  // Detectar seção ativa ao rolar
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "sobre", "projetos", "contato"];
      const scrollPosition = window.scrollY + 100;
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Scroll suave
  const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault();
    setMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.leftSection}>
        <div className={styles.profilePhoto}>
          <img src="/caminho/para/sua-foto.jpg" alt="Foto de perfil" />
        </div>
        <div className={styles.name}>Filipe Batista</div>
      </div>

      <div className={styles.mobileToggle} onClick={() => setMenuOpen(!menuOpen)}>
        {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
      </div>

      <div className={`${styles.rightSection} ${menuOpen ? styles.showMenu : ""}`}>
        <div className={styles.navLinks}>
          <a
            href="#home"
            onClick={(e) => handleSmoothScroll(e, "home")}
            className={activeSection === "home" ? styles.active : undefined}
          >
            Home
          </a>
          <a
            href="#sobre"
            onClick={(e) => handleSmoothScroll(e, "sobre")}
            className={activeSection === "sobre" ? styles.active : undefined}
          >
            Sobre
          </a>
          <a
            href="#projetos"
            onClick={(e) => handleSmoothScroll(e, "projetos")}
            className={activeSection === "projetos" ? styles.active : undefined}
          >
            Projetos
          </a>
          <a
            href="#contato"
            onClick={(e) => handleSmoothScroll(e, "contato")}
            className={activeSection === "contato" ? styles.active : undefined}
          >
            Contato
          </a>
        </div>

        <button onClick={toggleTheme} className={styles.themeToggle}>
          Alternar Tema
        </button>
      </div>
    </nav>
  );
}
