import styles from './About.module.css';

export default function Sobre() {
  return (
    <main className={styles.container}>
      <div className={styles.wrapper}>
        {/* Coluna Esquerda */}
        <section className={styles.leftBox}>
          <h2>Sobre mim</h2>
          <p>
            Se popularizou na década de 60, quando a Letraset lançou decalques contendo passagens de Lorem Ipsum...
          </p>
          <p>
            Mais recentemente quando passou a ser integrado a softwares de editoração eletrônica como Aldus PageMaker...
          </p>
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
              <div className={styles.skillIcon}>JS</div>
              <div className={styles.skillIcon}>HTML</div>
              <div className={styles.skillIcon}>CSS</div>
              <div className={styles.skillIcon}>React</div>
              <div className={styles.skillIcon}>PHP</div>
            </div>
          </section>
        </div>
      </div>
    </main>
  );
}
