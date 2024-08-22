import logo from './logo.svg';
import Navbar from './components/NavBar';
import Overview from './components/Overview';
import WorkExperience from './components/WorkExperience';
import Education from './components/Education';
import Projects from './components/Project';
import Footer from './components/Footer';
import './App.css';

function App() {
  return (
    <div>
      <Navbar />
      <section id="overview" className="pt-16">
        <Overview />
      </section>
      <section id="work" className="pt-16">
        <WorkExperience />
      </section>
      <section id="education" className="pt-16">
        <Education />
      </section>
      <section id="projects" className="pt-16">
        <Projects />
      </section>
      <Footer />
    </div>
  );
}

export default App;
