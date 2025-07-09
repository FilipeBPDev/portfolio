import styles from "./SocialSidebar.module.css";
import {
  FaGithub,
  FaLinkedin,
  FaInstagram,
  FaWhatsapp,
  FaShareAlt,
} from "react-icons/fa";
import { useState } from "react";

export default function SocialSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <div className={`${styles.sidebar} ${open ? styles.open : ""}`}>
      <button
        className={styles.toggleButton}
        onClick={() => setOpen((prev) => !prev)}
      >
        <FaShareAlt />
      </button>

      <ul>
        <li>
          <a
            aria-label="Github"
            href="https://github.com/FilipeBPDev"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
        </li>
        <li>
          <a
            aria-label="LinkedIn"
            href="https://www.linkedin.com/in/filipe-batista-832332276/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
        </li>
        <li>
          <a
            aria-label="Instagram"
            href="https://instagram.com/seuusuario"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaInstagram />
          </a>
        </li>
        <li>
          <a
            aria-label="WhatsApp"
            href="https://wa.me/11949155219"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp />
          </a>
        </li>
      </ul>
    </div>
  );
}
