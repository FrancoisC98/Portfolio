import SkillCard from './SkillCard';
import './style.css';

function Skills() {
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

  return (
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
  );
}

export default Skills;