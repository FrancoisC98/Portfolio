function SkillCard({ title, skills, icon }) {
  return (
    <div className="skill-card">
      <div className="skill-icon">{icon}</div>
      <h3>{title}</h3>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
}

export default SkillCard;
