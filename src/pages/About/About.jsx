import { motion } from 'framer-motion';
import {
  SiJavascript, SiHtml5, SiCss3, SiReact,
  SiPhp, SiLaravel, SiMysql, SiGit
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
        <section className={`${styles.leftBox} fade-in`}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h2>Sobre mim</h2>
            <p>
              Sou um desenvolvedor apaixonado por tecnologia e criação de soluções digitais.
            </p>
            <p>
              Tenho foco em eficiência e usabilidade, buscando sempre entregar projetos que conectam pessoas e ideias.
            </p>
          </motion.div>
        </section>

        <div className={styles.rightColumn}>
          <section className={`${styles.rightBox} fade-in`}>
            <h2>Experiência</h2>
            <p><strong>2023 - Presente:</strong> Freelancer em projetos web com foco em React e Laravel.</p>
            <p><strong>2021 - 2023:</strong> Estágio em desenvolvimento front-end, criando interfaces modernas.</p>
          </section>

          <section className={`${styles.rightBox} fade-in`}>
            <h2>Skills</h2>
            <div className={styles.skills}>
              {[SiJavascript, SiReact, SiPhp, SiLaravel, SiMysql, SiGit, SiHtml5, SiCss3].map((Icon, index) => (
                <div className={styles.skillIcon} key={index}>
                  <Icon size="1.5rem" />
                </div>
              ))}
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
