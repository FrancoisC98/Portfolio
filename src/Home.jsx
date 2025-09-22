import ProjectCard from './ProjectCard';
import './style.css';
import SkillCard from './SkillCard';
import MyPhoto from './assets/images/photo.png';

function Home() {
  const skillsData = [
    {
      title: "Front-end",
      skills: ["React", "Vue", "HTML", "CSS", "JavaScript"],
      icon: "</>"
    },
    {
      title: "Back-end",
      skills: ["Node.js", "Express", "MongoDB", "APIs"],
      icon: "🛠️"
    }
  ];

    const projects = [
    {
      title: "Booki",
      description: "Création d'un site de réservation d'hôtels en HTML et CSS.",
      image: "./images/booki.png"
    },
    {
      title: "Kasa",
      description: "Refonte front-end d'une application de location avec React.",
      image: "https://via.placeholder.com/300"
    },
    {
      title: "Mon Vieux Grimoire",
      description: "Developpement du back-end d'un site de notation de livres.",
      image: "https://via.placeholder.com/300"
    },
    {
      title: "Sophie Bluel",
      description: "Création d'une page web dynamique en JavaScript.",
      image: "https://via.placeholder.com/300"
    }
  ];

  return (
    <div>
      {/* Hero / Accueil */}
<section id="home" className="hero">
  <div className="hero-content">
    <div className="hero-text">
        <h1>Developpeur Full-Stack</h1>
        <p>François, développeur Full-Stack en devenir ⚡</p>
        <a href="#projects" className="hero-btn">Voir mes projets</a>
    </div>
    <div className="hero-image">
      <img src={MyPhoto} alt="François" />
    </div>
  </div>
</section>


      {/* Skills */}
      <section id="skills" className="skills">
        <h2>Mes Compétences</h2>
        <div className="skills-grid">
          {skillsData.map((skill, index) => (
            <SkillCard
              key={index}
              title={skill.title}
              skills={skill.skills}
              icon={skill.icon}
            />
          ))}
        </div>
      </section>

      {/* Projets */}
      <section id="projects">
        <h2>Mes Projets</h2>
        <div className="projects-grid">
          {projects.map((proj, index) => (
            <ProjectCard
              key={index}
              title={proj.title}
              description={proj.description}
              image={proj.image}
            />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
