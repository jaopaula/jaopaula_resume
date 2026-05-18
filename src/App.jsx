import About from "./components/About";
import Cases from "./components/Cases";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SpectraNoiseBackground from "./components/SpectraNoiseBackground";
import TechStack from "./components/TechStack";
import Timeline from "./components/Timeline";
import {
  cases,
  contactLinks,
  impactMetrics,
  navLinks,
  projects,
  technologyGroups,
  timeline,
} from "./data/portfolio";
import "./styles/components/app.sass";

function App() {
  return (
    <div className="portfolio-page">
      <SpectraNoiseBackground />
      <Navbar links={navLinks} />
      <main>
        <Hero metrics={impactMetrics} />
        <About />
        <Cases cases={cases} />
        <Projects projects={projects} />
        <TechStack groups={technologyGroups} />
        <Timeline items={timeline} />
        <Contact links={contactLinks} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
