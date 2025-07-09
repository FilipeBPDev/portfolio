import { motion } from "framer-motion";
import {
  SiJavascript,
  SiHtml5,
  SiCss3,
  SiReact,
  SiPhp,
  SiLaravel,
  SiMysql,
  SiGit,
} from "react-icons/si";
import styles from "./About.module.css";

export default function Sobre() {
  return (
    <main id="sobre" className={`${styles.container} ${styles.sobreSection}`}>
      <div className={styles.wrapper}>
        <section className={styles.leftBox}>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2>Sobre mim</h2>
            <p className={styles.experience}>
              Sou desenvolvedor web focado em criar interfaces modernas e
              funcionais, combinando design com código limpo e bem estruturado.
              Habituado ao desenvolvimento com React, PHP, MySQL e CSS modular,
              desenvolvendo soluções necessárias, desde landing pages até
              sistemas completos.
            </p>
            <p className={styles.experience}>
              Tenho experiência prática com integrações front/back-end,
              otimização para SEO, responsividade e ambientes remotos. Trabalho
              com organização e comunicação clara, sempre buscando entregar
              resultados que atendam às necessidades com agilidade e qualidade.
            </p>
            <p className={styles.experience}>
              Gosto de manter uma comunicação próxima durante todo o projeto,
              ajustando com base em feedbacks e garantindo que cada etapa siga
              alinhada com os objetivos reais.
            </p>
            <div className={styles.divBtn}>
              <a
                onClick={() =>
                  window.open("/docs/curriculo-Filipe.pdf", "_blank")
                }
                target="_blank"
                rel="noopener noreferrer"
                className={styles.cvButton}
              >
                Ver Currículo
              </a>
            </div>
          </motion.div>
        </section>

        <div className={styles.rightColumn}>
          <motion.section
            className={styles.rightBox}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <h2>Experiência</h2>
            <p className={styles.experience}>
              <strong>Talentum Tecnologia (2021 - Atual)</strong> Suporte
              técnico remoto em contato direto com clientes e desenvolvedores,
              testes no sistema, abertura de chamados, pequenos ajustes no
              código e consultas básicas no banco com MySQL.
            </p>
            <p className={styles.experience}>
              <strong>Empreendimento Próprio (2025)</strong> Venda direta de
              fotos polaroides com abordagem presencial em pontos turísticos,
              negociação com clientes e foco em entregar uma experiência
              positiva e personalizada.
            </p>
          </motion.section>

          <motion.section
            className={styles.rightBox}
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            viewport={{ once: true }}
          >
            <div className={styles.skillsHeader}>
              <h1>Skills</h1>
            </div>
            <div className={styles.skills}>
              {[
                SiJavascript,
                SiReact,
                SiPhp,
                SiLaravel,
                SiMysql,
                SiGit,
                SiHtml5,
                SiCss3,
              ].map((Icon, index) => (
                <div className={styles.skillIcon} key={index}>
                  <Icon size="1.2rem" />
                </div>
              ))}
            </div>
          </motion.section>
        </div>
      </div>
    </main>
  );
}
