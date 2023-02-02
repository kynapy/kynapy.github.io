import AboutMe from './AboutMe.js';
import FAQ from './FAQ.js';
import Projects from './Projects';
//import './App.css';


function App() {
  return (
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
  );
}

export default App;
