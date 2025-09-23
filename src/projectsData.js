import bookImg from './assets/images/booki.png';
import bookImg1 from './assets/images/Kasa1.png';
import bookImg2 from './assets/images/Kasa2.png';
import bookImg3 from './assets/images/Kasa3.png';
import bookImg4 from './assets/images/sophiebluel1.png';
import bookImg5 from './assets/images/sophiebluel2.png';
import bookImg6 from './assets/images/sophiebluel3.png';
import bookImg7 from './assets/images/mvg1.png';
import bookImg8 from './assets/images/mvg2.png';
import bookImg9 from './assets/images/mvg2.png';



const projects = [
  {
    id: 1,
    title: "Booki",
    description: "Création d'un site de réservation d'hôtels en HTML et CSS.",
    image: bookImg,
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
    details: "API avec Node.js, Express et MongoDB (CRUD complet)."
  },
  {
    id: 4,
    title: "Sophie Bluel",
    description: "Création d'une page web dynamique en JavaScript.",
    image: [bookImg4, bookImg5, bookImg6],
    details: "Gestion dynamique du DOM et interactions utilisateurs."
  }
];

export default projects;
