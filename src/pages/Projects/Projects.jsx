import styles from "./Projects.module.css";
import ProjectCard from "../../components/ProjectCard/ProjectCard";
import projects from "../../data/projects";

export default function Projects() {
  console.log(projects);
  return (
    <section id="projetos" className={styles.container}>
      <div className={styles.grid}>
        {projects.map((project) => (
          <ProjectCard key={project.id} {...project} />
        ))}
      </div>
    </section>
  );
}
