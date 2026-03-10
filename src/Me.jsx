import MyPhoto from './assets/images/photo.png';

function Presentation() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <div className="hero-text">
          <h1>François Combaud Développeur Web </h1>
          <p>
            Je suis François Combaud, développeur web freelance spécialisé dans la
            création de sites internet modernes, performants et adaptés aux besoins
            des professionnels.
          </p>
          <p>
            Je conçois des interfaces claires, efficaces et responsive, avec une
            attention particulière portée à l’expérience utilisateur et à la visibilité
            en ligne.
          </p>
          <a href="#projects" className="hero-btn">Voir mes projets</a>
        </div>
        <div className="hero-image">
          <img
            src={MyPhoto}
            alt="François Combaud, développeur web freelance"
          />
        </div>
      </div>
    </section>
  );
}

export default Presentation;