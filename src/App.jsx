import { useEffect } from "react";
import About from "./components/About";
import Cases from "./components/Cases";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import SpectraNoiseBackground from "./components/SpectraNoiseBackground";
import TechStack from "./components/TechStack";
import Timeline from "./components/Timeline";
import {
  cases,
  contactLinks,
  navLinks,
  technologyGroups,
  timeline,
} from "./data/portfolio";
import "./styles/components/app.sass";

function App() {
  useEffect(() => {
    const id = window.location.hash.slice(1);
    if (!id) return undefined;

    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (!target) return;

      const contentTarget = target.querySelector(".section-shell") || target;
      const root = document.documentElement;
      const previousScrollBehavior = root.style.scrollBehavior;
      root.style.scrollBehavior = "auto";
      window.scrollTo({
        top: Math.max(0, window.scrollY + contentTarget.getBoundingClientRect().top - 112),
        left: 0,
        behavior: "auto",
      });
      root.style.scrollBehavior = previousScrollBehavior;
    });

    return () => window.cancelAnimationFrame(frame);
  }, []);

  return (
    <div className="portfolio-page">
      <SpectraNoiseBackground />
      <Navbar links={navLinks} />
      <main>
        <Hero />
        <About />
        <Cases cases={cases} />
        <TechStack groups={technologyGroups} />
        <Timeline items={timeline} />
        <Contact links={contactLinks} />
      </main>
      <Footer />
    </div>
  );
}

export default App;
