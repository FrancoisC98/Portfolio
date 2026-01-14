import bookImg from './assets/images/booki.png';
import bookImg18 from './assets/images/booki2.jpg';
import bookImg19 from './assets/images/booki3.jpg';
import bookImg1 from './assets/images/kasa1.1.png';
import bookImg2 from './assets/images/kasa1.2.png';
import bookImg3 from './assets/images/kasa1.3.png';
import bookImg4 from './assets/images/sophiebluel1.png';
import bookImg5 from './assets/images/sophiebluel2.png';
import bookImg6 from './assets/images/sophiebluel3.png';
import bookImg7 from './assets/images/mvg1.1.png';
import bookImg8 from './assets/images/mvg1.2.png';
import bookImg9 from './assets/images/mvg1.3.png';
import bookImg10 from './assets/images/ninacarducci1.png';
import bookImg11 from './assets/images/ninacarducci1.2.PNG';
import bookImg17 from './assets/images/ninacarducci1.1.PNG';
import bookImg12 from './assets/images/menumaker.png';
import bookImg13 from './assets/images/menumaker1.png';
import bookImg14 from './assets/images/menumaker2.png';
import bookImg15 from './assets/images/menumaker3.png';
import bookImg16 from './assets/images/menumaker4.png';
import bookImg20 from './assets/images/guess1.png';
import bookImg21 from './assets/images/guess2.png';
import bookImg22 from './assets/images/guess3.png'; 
import bookImg23 from './assets/images/or1.png';
import bookImg24 from './assets/images/or2.png';
import bookImg25 from './assets/images/or3.png';
import bookImg26 from './assets/images/or4.png';



const projects = [
  {
    id: 1,
    title: "Booki",
    description: "Création d'un site de réservation d'hôtels en HTML et CSS.",
    image: [bookImg, bookImg18, bookImg19],
    details: "Projet réalisé en HTML/CSS à partir d'une maquette Figma, 100% responsive."
  },
  {
    id: 2,
    title: "Kasa",
    description: "Refonte front-end d'une application de location avec React.",
    image: [bookImg1, bookImg2, bookImg3],
    details: "Projet avec React, React Router et gestion dynamique des composants."
  },
  {
    id: 3,
    title: "Mon Vieux Grimoire",
    description: "Développement du back-end d'un site de notation de livres.",
    image: [bookImg7, bookImg8, bookImg9],
    details: "API avec Node.js, Express et MongoDB (CRUD complet).",
  },
  {
    id: 4,
    title: "Sophie Bluel",
    description: "Création d'une page web dynamique en JavaScript.",
    image: [bookImg4, bookImg5, bookImg6],
    details: "Gestion dynamique du DOM et interactions utilisateurs."
  },
  {
    id: 5,
    title: "Nina Carducci",
    description: "Debuggez et optimisez un site de photographe.",
    image: [bookImg10, bookImg11, bookImg17],
    details: "Optimisation des performances, accessibilité, SEO et bonne pratique de code."
  },
  {
    id: 6,
    title: "MenuMaker",
    description: "Planifier le développement du site de votre client",
    image: [bookImg12, bookImg13, bookImg14, bookImg15, bookImg16],
    details: "Création de de document technique, kanban ainsi qu'une veille technologique pour un site de restaurant."
  }  
  ,{
    id: 7,
    title: "Guess The Flag",
    description: "Application de quiz sur les drapeaux du monde.",
    image: [bookImg20, bookImg21, bookImg22],
    details: "Conception d'une application interactive pour tester les connaissances géographiques des utilisateurs."
  }

  ,{
    id: 8,
    title: "Dragon D'or",
    description: "Site vitrine pour un restaurant asiatique.",
    image: [bookImg23, bookImg24, bookImg25, bookImg26],
    details: "Développement d'un site web attrayant pour promouvoir les services et le menu d'un restaurant asiatique."
  }
];

export default projects;
