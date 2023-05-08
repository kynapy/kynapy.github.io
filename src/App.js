import { ChakraProvider } from '@chakra-ui/react';
import Navbar from './components/Navbar';
import './App.css';
import ProjectSection from './components/ProjectSection.js';
import AboutSection from './components/AboutSection.js';

function App() {
  return (
    <ChakraProvider resetCSS={true}>
      <div className="App">
        <body>
          <Navbar />
          <AboutSection />
          <ProjectSection />
        </body>
      </div>
    </ChakraProvider>
  );
}

export default App;
