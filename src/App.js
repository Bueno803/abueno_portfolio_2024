import logo from "./logo.svg";
import Navbar from "./components/NavBar";
import SwipeCards from "./components/Overview";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Projects from "./components/Project";
import Footer from "./components/Footer";
import StarCanvas from "./components/Starcanvas";
import "./App.css";

function App() {
  return (
    <div class="bg-primary">
      <div class="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <section id="overview" className="pt-16">
          <SwipeCards />
        </section>
      </div>
      <section id="work" className="pt-16">
        <WorkExperience />
      </section>
      <section id="education" className="pt-16">
        <Education />
        <StarCanvas />
      </section>
      <section id="projects" className="pt-16">
        <Projects />
      </section>

      <Footer />
    </div>
  );
}

export default App;
