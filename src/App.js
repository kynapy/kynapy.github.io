import { ChakraProvider } from '@chakra-ui/react';

import AboutMe from './AboutMe.js';
import FAQ from './FAQ.js';
import Projects from './Projects';
import WorkExperience from './WorkExperience.js';
import Navbar from './components/Navbar';
import './App.css';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <Navbar />
        <header>
          <div>
            <AboutMe /><br></br>
          </div>
        </header>
        <hr></hr>
        <main>
          <br></br>
          <Projects />
          <hr></hr>
          <br></br>
          <WorkExperience />
          <br></br>
          <hr></hr>
          <br></br>
          <FAQ />
        </main>
        <footer></footer>
      </div>
    </ChakraProvider>
  );
}

export default App;
