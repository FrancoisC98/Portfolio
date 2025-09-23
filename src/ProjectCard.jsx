import { Link } from "react-router-dom";

function ProjectCard({ id, title, description }) {
  return (
    <div className="project-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={`/projects/${id}`}>
        <button>Voir plus</button>
      </Link>
    </div>
  );
}

export default ProjectCard;
