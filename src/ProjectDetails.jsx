import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

function ProjectDetails({ projects }) {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((proj) => proj.id.toString() === id);

  if (!project) {
    return <h2>Projet introuvable</h2>;
  }

  return (
    <div className="project-details">
      <button className="back-arrow" onClick={() => navigate("/")} aria-label="Retour à l'accueil">&#8592; Accueil</button>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
      <p>{project.details}</p>
      {Array.isArray(project.image)
        ? project.image.map((img, idx) => (
            <img
              key={idx}
              src={img}
              alt={`${project.title} screenshot ${idx + 1}`}
              className="project-image-large"
            />
          ))
        : (
            <img
              src={project.image}
              alt={project.title}
              className="project-image-large"
            />
          )
      }
    </div>
  );
}

export default ProjectDetails;