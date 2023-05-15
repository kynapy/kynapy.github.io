import { ChakraProvider, useMediaQuery } from '@chakra-ui/react';
import './App.css';
import "@fontsource/league-spartan";

import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection.js';
import ProjectSection from './components/ProjectSection.js';
import Footer from './components/Footer';
import { useRef } from 'react';
import ContactMeSection from './components/ContactMeSection';

function App() {
  const projectSection = useRef(null);
  const experienceSection = useRef(null);
  const contactSection = useRef(null);
  const [isMobile] = useMediaQuery("(max-width: 768px)");

  return (
    <ChakraProvider resetCSS={true}>
      <div className="App" >
        <Navbar
          projectRef={ projectSection }
          contactRef={ contactSection }
          experienceRef={ experienceSection }
        />
        <AboutSection className="about" isMobile={ isMobile } />
        <ProjectSection ref={ projectSection } className="projectSection" isMobile={ isMobile }/>
        <ContactMeSection ref={ contactSection } />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
