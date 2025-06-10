import styles from './Home.module.css';


export default function Home() {
  return (
    <main className={styles.container}>
      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.heroBox}>
          <h1>Olá, meu nome é Filipe Batista</h1>
          <p>
            Desenvolvedor web orientado a resultados:
            <br />
            <strong>
              código eficiente + design intuitivo para produtos que entregam
            </strong>
          </p>
          <a href="#sobre" className={styles.button}>Sobre mim</a>
        </div>
      </section>
    </main>
  )
}
