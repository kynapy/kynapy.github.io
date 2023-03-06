import AboutMe from './AboutMe.js';
import FAQ from './FAQ.js';
import Projects from './Projects';
import WorkExperience from './WorkExperience.js';
import Navbar from './components/Navbar';
import './App.css';


function App() {
  return (
    <div className="App">
      <Navbar />
      <header>
        <div>
          <AboutMe /><br></br>
        </div>
      </header>
      <hr></hr>
      <main>
        <Projects />
        <hr></hr>
        <WorkExperience />
        <hr></hr>
        <FAQ />
      </main>
      <footer>

      </footer>
    </div>
  );
}

export default App;
