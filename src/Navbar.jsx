import Logo from './assets/images/LOGO.png';

function Navbar() {
  return (
    <nav className="navbar">
      <div className="name">
        <h1>François</h1>
      </div>
      <ul className="nav-links">
        <li><a href="#home">Accueil</a></li>
        <li><a href="#skills">Compétences</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
