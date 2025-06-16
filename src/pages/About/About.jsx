import { motion } from 'framer-motion';
import { 
  SiJavascript, 
  SiHtml5, 
  SiCss3, 
  SiReact, 
  SiPhp,
  SiLaravel,
  SiMysql,
  SiGit
} from 'react-icons/si';
import styles from './About.module.css';
import { useEffect } from 'react';

export default function Sobre() {

    useEffect(() => {
  const elements = document.querySelectorAll('.fade-in');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) entry.target.classList.add('visible');
    });
  });
  elements.forEach(el => observer.observe(el));
}, []);

  
  return (
    <main id="sobre" className={`${styles.container} ${styles.sobreSection}`}>
      <div className={styles.wrapper}>
        {/* Coluna Esquerda */}
        <section className={styles.leftBox}>
          <motion
            initial={{ opacity: 0, y: 30 }}   
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Sobre mim</h2>
            <p>
              Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum...
            </p>
            <p>
              Mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker...
            </p>
          </motion>
        </section>

        {/* Coluna Direita */}
        <div className={styles.rightColumn}>
          <section className={styles.rightBox}>
            <h2>Experiência</h2>
            <p><strong>xx/xx - xx/xx:</strong> Texto da experiência...</p>
            <p><strong>xx/xx - xx/xx:</strong> Texto da experiência...</p>
          </section>

          <section className={styles.rightBox}>
            <h2>Skills</h2>
            <div className={styles.skills}>
              <div className={styles.skillIcon} title="JavaScript">
                <SiJavascript size="1.5rem" />
              </div>
              <div className={styles.skillIcon} title="React">
                <SiReact size="1.5rem" />
              </div>
              <div className={styles.skillIcon} title="PHP">
                <SiPhp size="1.5rem" />
              </div>
              <div className={styles.skillIcon} title="Laravel">
                <SiLaravel size="1.5rem" />
              </div>
              <div className={styles.skillIcon} title="MySQL">
                <SiMysql size="1.5rem" />
              </div>
              <div className={styles.skillIcon} title="Git">
                <SiGit size="1.5rem" />
              </div>
                <div className={styles.skillIcon} title="HTML5">
                <SiHtml5 size="1.5rem" />
              </div>
              <div className={styles.skillIcon} title="CSS3">
                <SiCss3 size="1.5rem" />
              </div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
