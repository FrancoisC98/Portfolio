import { useParams } from "react-router-dom";

function ProjectDetails({ projects }) {
  const { id } = useParams();
  const project = projects.find((proj) => proj.id.toString() === id);

  if (!project) {
    return <h2>Projet introuvable</h2>;
  }

  return (
    <div className="project-details">
      <h1>{project.title}</h1>
      <img src={project.image} alt={project.title} />
      <p>{project.description}</p>
      <p>{project.details}</p>
    </div>
  );
}

export default ProjectDetails;
