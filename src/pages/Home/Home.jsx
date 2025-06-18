import Typewriter from 'typewriter-effect';
import styles from './Home.module.css';
import { motion } from 'framer-motion'; 

export default function Home() {

return (
<main id="home" className={styles.container}>
    <section className={styles.hero}>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
         transition={{ duration: 0.8, ease: 'easeOut' }}
          className={styles.heroBox}
          >           
            <h1>
              <Typewriter
                options={{
                  strings: ['Olá, meu nome é Filipe Batista', 'Desenvolvedor apaixonado por tecnologia.'],
                  autoStart: true,
                  loop: true,
                  cursor: '<span style="color: var(--color-primary)">|</span>'
                }}
              />
            </h1>
            <p>
                Orientado a resultados com 
                <br />
                <strong>
                    código eficiente + design intuitivo para produtos que entregam
                </strong>
            </p>
            <motion.a
              href="/sobre"
              className={styles.button}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Sobre mim <span className={styles.arrow}>↓</span>
            </motion.a>
        </motion.div>
    </section>
</main>
)
}
