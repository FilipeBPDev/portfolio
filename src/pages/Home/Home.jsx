import Typewriter from 'typewriter-effect';
import styles from './Home.module.css';

export default function Home() {

return (
<main id="home" className={styles.container}>
    <section className={styles.hero}>
        <div className={styles.heroBox}>
            <h1>
              <Typewriter
                options={{
                  strings: ['Olá, meu nome é Filipe Batista', 'Dev web, apaixonado por tecnologia.'],
                  autoStart: true,
                  loop: true,
                  cursor: '<span style="color: var(--color-primary)">|</span>'
                }}
              />
            </h1>
            <p>
                Desenvolvedor orientado a resultados com 
                <br />
                <strong>
                    código eficiente + design intuitivo para produtos que entregam
                </strong>
            </p>
            <a href="/sobre" className={styles.button}>
                Sobre mim <span className={styles.arrow}>↓</span>
            </a>
        </div>
    </section>
</main>
)
}
