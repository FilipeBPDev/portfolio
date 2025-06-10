import styles from './Footer.module.css';

export default function Footer() {
return (
<footer className={styles.footer}>
    <div className={styles.footerContent}>
      

        <div className={styles.socialLinks}>
            <a href="https://github.com/seuuser" target="_blank" rel="noopener noreferrer" className={styles.socialLink}>
                GitHub
            </a>
            <a href="https://linkedin.com/in/seuuser" target="_blank" rel="noopener noreferrer"
                className={styles.socialLink}>
                LinkedIn
            </a>
            <a href="https://instagram.com/seuuser" target="_blank" rel="noopener noreferrer"
                className={styles.socialLink}>
                Instagram
            </a>
        </div>
          <p className={styles.copyright}>Desenvolvido por Filipe © {new Date().getFullYear()}</p>
    </div>
</footer>
);
}
