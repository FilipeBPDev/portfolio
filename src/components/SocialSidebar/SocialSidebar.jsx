import styles from './SocialSidebar.module.css';
import { FaGithub, FaLinkedin, FaInstagram, FaWhatsapp, FaShareAlt } from 'react-icons/fa';
import { useState } from 'react';

export default function SocialSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.sidebar} ${open ? styles.open : ''}`}>
      <button className={styles.toggleButton} onClick={() => setOpen(prev => !prev)}>
        <FaShareAlt />
      </button>

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
          <a href="https://wa.me/seunumerodetelefone" target="_blank" rel="noopener noreferrer">
            <FaWhatsapp />
          </a>
        </li>
      </ul>
    </div>
  );
}
