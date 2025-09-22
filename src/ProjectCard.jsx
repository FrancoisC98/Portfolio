import { Link } from "react-router-dom";

function ProjectCard({ title, description, image, slug }) {
  return (
    <div className="project-card">
      <img src={image} alt={title} className="project-image" />
      <h3>{title}</h3>
      <p>{description}</p>
      <Link to={`/projects/${slug}`}>
        <button>Voir plus</button>
      </Link>
    </div>
  );
}

export default ProjectCard;
