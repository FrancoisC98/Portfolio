import Logo from './assets/images/LOGO.png';
import { Link } from 'react-router-dom';


function Navbar() {
  return (
    <nav className="navbar">
      <div className="name">
        <h1>François</h1>
      </div>
      <ul className="nav-links">
      <li><Link to="/">Accueil</Link></li>
      <li><a href="#skills">Compétences</a></li>
      <li><a href="#projects">Projets</a></li>
      <li><a href="#contact">Contact</a></li>
      <li><a href="#cv.pdf" download="CV.pdf">Mon CV</a></li>
     </ul>
    </nav>
  );
}

export default Navbar;
