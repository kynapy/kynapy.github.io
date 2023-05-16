import { ChakraProvider, useMediaQuery } from '@chakra-ui/react';
import './App.css';
import "@fontsource/league-spartan";
import Aos from "aos";
import "aos/dist/aos.css";

import Navbar from './components/Navbar';
import AboutSection from './components/AboutSection.js';
import ProjectSection from './components/ProjectSection.js';
import Footer from './components/Footer';
import { useEffect, useRef } from 'react';
import ContactMeSection from './components/ContactMeSection';

function App() {
  useEffect(() => {
    Aos.init({ duration: 1000 });
    }, []);

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
        <ProjectSection
          ref={ projectSection }
          className="projectSection"
          isMobile={ isMobile }
        />
        <ContactMeSection ref={ contactSection } />
        <Footer />
      </div>
    </ChakraProvider>
  );
}

export default App;
