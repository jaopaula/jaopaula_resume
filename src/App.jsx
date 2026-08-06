import { useEffect, useLayoutEffect } from "react";
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
  useLayoutEffect(() => {
    if ("scrollRestoration" in window.history) {
      window.history.scrollRestoration = "manual";
    }

    const id = window.location.hash.slice(1);
    const root = document.documentElement;
    const previousScrollBehavior = root.style.scrollBehavior;
    root.style.scrollBehavior = "auto";

    if (!id || id === "hero") {
      window.scrollTo({ top: 0, left: 0, behavior: "auto" });
      root.style.scrollBehavior = previousScrollBehavior;
      return undefined;
    }

    const frame = window.requestAnimationFrame(() => {
      const target = document.getElementById(id);
      if (!target) {
        root.style.scrollBehavior = previousScrollBehavior;
        return;
      }

      const contentTarget = target.querySelector(".section-shell") || target;
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
