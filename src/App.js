import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import './App.css';
import ProjectSection from './components/ProjectSection.js';
import AboutSection from './components/AboutSection.js';
import "@fontsource/league-spartan";

function App() {
  return (
    <ChakraProvider resetCSS={true}>
      <div className="App">
        <body style={{fontFamily:"League Spartan"}}>
          <Navbar />
          <AboutSection />
          <ProjectSection />
        </body>
      </div>
    </ChakraProvider>
  );
}

export default App;
