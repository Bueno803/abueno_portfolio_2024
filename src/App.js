// import UnderConstruction from "./components/UnderConstruction";
import "./App.css";

// TODO: Restore full site after updates are complete
import Navbar from "./components/NavBar";
import SwipeCards from "./components/Overview";
import WorkExperience from "./components/WorkExperience";
import Education from "./components/Education";
import Projects from "./components/Project";
import Footer from "./components/Footer";
import StarCanvas from "./components/Starcanvas";

function App() {
  // return <UnderConstruction />;
  return (
     <div className="bg-primary w-screen max-w-full">
      <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
        <Navbar />
        <section id="overview" className="pt-16">
          <SwipeCards />
        </section>
      </div>
      <section id="work" className="pt-16">
        <WorkExperience />
      </section>
      <section id="education" className="pt-16">
        <StarCanvas />
        <Education />
      </section>
      <section id="projects" className="pt-16">
        <Projects />
      </section>

      <Footer />
    </div>
  )
}

export default App;
