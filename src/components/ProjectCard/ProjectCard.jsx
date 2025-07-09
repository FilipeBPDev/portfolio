import styles from "./ProjectCard.module.css";
import { motion } from "framer-motion";

export default function ProjectCard({
  title,
  description,
  image,
  code,
  demo,
  stacks,
}) {
  return (
    <motion.div
      className={styles.card}
      initial={{ opacity: 0, y: 90 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      <img src={image} alt={title} className={styles.image} />

      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        {stacks && stacks.length > 0 && (
          <div className={styles.stacks}>
            {stacks.map((Icon, index) => (
              <div key={index} className={styles.stackIcon}>
                <Icon size="1.2rem" />
              </div>
            ))}
          </div>
        )}
        <div className={styles.buttons}>
          {demo && (
            <a
              href={demo}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Ver site
            </a>
          )}
          {code && (
            <a
              href={code}
              target="_blank"
              rel="noopener noreferrer"
              className={styles.button}
            >
              Ver código
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
