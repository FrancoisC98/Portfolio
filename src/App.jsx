import './style.css';
import Navbar from './Navbar';
import Contact from './Contact';
import QuoteSection from './QuoteSection';
import ProjectDetails from './ProjectDetails';
import projects from './projectsData';  
import { Routes, Route } from 'react-router-dom';
import Skills from './Skills';
import ScrollToTop from './ScrollToTop';
import Presentation from './Me';
import Projects from './Projects';


function App() {
  return (
    <>
      <Navbar />
      <ScrollToTop />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Presentation />
              <Skills />
              <Projects />
              <QuoteSection />
              <Contact />
            </>
          }
        />
        <Route
          path="/projects/:id"
          element={<ProjectDetails projects={projects} />}
        />
      </Routes>
    </>
  );
}

export default App;
