import ProjectCard from './ProjectCard';
import projects from './projectsData';

function Projects() {
  return (
    <section id="projects">
      <h2>Mes Projets</h2>
      <div className="projects-grid">
        {projects.map((proj) => (
          <ProjectCard
            key={proj.id}
            id={proj.id}
            title={proj.title}
            description={proj.description}
            image={proj.image}
          />
        ))}
      </div>
    </section>
  );
}

export default Projects;