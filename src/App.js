import { ChakraProvider } from '@chakra-ui/react';
import './App.css';
import "@fontsource/league-spartan";

import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection.js';
import ProjectSection from './components/ProjectSection.js';
import Footer from './components/Footer';
import { useRef } from 'react';
import ContactMeSection from './components/ContactMeSection';
import ExperienceSection from './components/ExperienceSection';

function App() {
  const projectSection = useRef(null);
  const experienceSection = useRef(null);
  const contactSection = useRef(null);

  return (
    <ChakraProvider resetCSS={true}>
      <div className="App" style={{fontFamily:"League Spartan"}}>
        <Navbar projectRef={projectSection} />
        <AboutSection className="about"/>
        <ExperienceSection ref={experienceSection}/>
        <ProjectSection ref={projectSection} className="projectSection"/>
        <ContactMeSection ref={contactSection}/>
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
