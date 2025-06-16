import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
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

const [activeSection, setActiveSection] = useState("home");

// Função para detectar a seção visível
useEffect(() => {
const handleScroll = () => {
const sections = ['home', 'sobre', 'projetos', 'contato'];
const scrollPosition = window.scrollY + 100;

for (const section of sections) {
const element = document.getElementById(section);
if (element) {
const offsetTop = element.offsetTop;
const offsetHeight = element.offsetHeight;

if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) { setActiveSection(section); break; } } }
    }; window.addEventListener('scroll', handleScroll); return ()=> window.removeEventListener('scroll', handleScroll);
    }, []);

    // ... (mantenha seu toggleTheme e useEffect do tema)
    const handleSmoothScroll = (e, sectionId) => {
    e.preventDefault(); // Importante para evitar o "salto"
    document.getElementById(sectionId)?.scrollIntoView({
    behavior: 'smooth'
    });
    };



    return (
    <nav className={styles.navbar}>
        {/* Lado esquerdo - Logo/Nome */}
        <div className={styles.leftSection}>
            <div className={styles.profilePhoto}>
                <img src="/caminho/para/sua-foto.jpg" alt="Foto de perfil" />
            </div>
            <div className={styles.name}>Filipe Batista</div>
        </div>

        <div className={styles.rightSection}>
            <div className={styles.navLinks}>
                <a href="#sobre" onClick={(e)=> handleSmoothScroll(e, 'home')}
                    className={activeSection === 'home' ? styles.active : undefined}
                    >
                    Home
                </a>
                <a href="#sobre" onClick={(e)=> handleSmoothScroll(e, 'sobre')}
                    className={activeSection === 'sobre' ? styles.active : undefined}
                    >
                    Sobre
                </a>
                <a href="#projetos" onClick={(e)=> handleSmoothScroll(e, 'projetos')}
                    className={activeSection === 'projetos' ? styles.active : undefined}
                    >
                    Projetos
                </a>
                <a href="#contato" onClick={(e)=> handleSmoothScroll(e, 'contatos')}
                    className={activeSection === 'contato' ? styles.active : undefined}
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
