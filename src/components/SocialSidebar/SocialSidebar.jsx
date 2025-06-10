// src/components/SocialSidebar/SocialSidebar.jsx
import styles from './SocialSidebar.module.css';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp } from 'react-icons/fa';

export default function SocialSidebar() {
return (
<div className={styles.sidebar}>
    <ul>
        <li>
            <a href="https://github.com/seuusuario" target="_blank" rel="noopener noreferrer">
                <FaGithub />
            </a>
        </li>
        <li>
            <a href="https://linkedin.com/in/seuusuario" target="_blank" rel="noopener noreferrer">
                <FaLinkedin />
            </a>
        </li>
        <li>
            <a href="https://instagram.com/seuusuario" target="_blank" rel="noopener noreferrer">
                <FaInstagram />
            </a>
        </li>
        <li>
            <a href="https://instagram.com/seuusuario" target="_blank" rel="noopener noreferrer">
                <FaWhatsapp />
            </a>
        </li>
    </ul>
</div>
);
}
