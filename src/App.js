import { ChakraProvider } from '@chakra-ui/react';

import AboutMe from './AboutMe.js';
import FAQ from './FAQ.js';
import Projects from './Projects';
//import './App.css';

function App() {
  return (
    <ChakraProvider>
      <div className="App">
        <nav></nav>
        <header>
          <div>
            <AboutMe /><br></br>
          </div>
        </header>
        <main>
          <hr></hr>
          <Projects />
          <hr></hr>
          <FAQ />
        </main>
        <footer>

        </footer>
      </div>
    </ChakraProvider>
  );
}

export default App;
