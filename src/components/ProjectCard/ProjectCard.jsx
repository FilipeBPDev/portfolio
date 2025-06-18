import styles from './ProjectCard.module.css';

export default function ProjectCard({ title, description, image, link }) {
  return (
    <div className={styles.card}>
      <img src={image} alt={title} className={styles.image} />
      <div className={styles.content}>
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} target="_blank" className={styles.button}>Ver projeto</a>
      </div>
    </div>
  );
}
