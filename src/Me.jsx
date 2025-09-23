import MyPhoto from './assets/images/photo.png';

function Presentation() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>Développeur Full-Stack</h1>
          <p>François, développeur Full-Stack en devenir ⚡</p>
          <a href="#projects" className="hero-btn">Voir mes projets</a>
        </div>
        <div className="hero-image">
          <img src={MyPhoto} alt="François" />
        </div>
      </div>
    </section>
  );
}

export default Presentation;