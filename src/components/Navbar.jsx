import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const Navbar = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("sobre");
  const activeSectionRef = useRef("sobre");
  const isScrolledRef = useRef(false);
  const scrollFrameRef = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollFrameRef.current) return;

      scrollFrameRef.current = window.requestAnimationFrame(() => {
        scrollFrameRef.current = 0;
        const nextIsScrolled = window.scrollY > 24;

        if (nextIsScrolled !== isScrolledRef.current) {
          isScrolledRef.current = nextIsScrolled;
          setIsScrolled(nextIsScrolled);
        }
      });
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);

      if (scrollFrameRef.current) {
        window.cancelAnimationFrame(scrollFrameRef.current);
      }
    };
  }, []);

  useEffect(() => {
    const sections = links
      .map((link) => document.querySelector(link.href))
      .filter(Boolean);

    if (!sections.length) return undefined;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visibleEntry && visibleEntry.target.id !== activeSectionRef.current) {
          activeSectionRef.current = visibleEntry.target.id;
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        root: null,
        rootMargin: "-120px 0px -48% 0px",
        threshold: [0.1, 0.35, 0.65],
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [links]);

  const renderLinks = (className = "") =>
    links.map((link) => {
      const id = link.href.replace("#", "");
      return (
        <a
          className={activeSection === id ? "active" : ""}
          href={link.href}
          key={link.href}
          onClick={() => setIsOpen(false)}
        >
          {link.label}
        </a>
      );
    });

  return (
    <header className={`site-navbar ${isScrolled ? "scrolled" : ""}`}>
      <nav aria-label="Navegacao principal" className="navbar-inner">
        <a className="brand" href="#hero" aria-label="Voltar para o inicio">
          <span className="brand-mark">JP</span>
          <span>João de Paula</span>
        </a>

        <div className="desktop-nav">{renderLinks("desktop-nav")}</div>

        <button
          className="mobile-menu-button"
          type="button"
          aria-label={isOpen ? "Fechar menu" : "Abrir menu"}
          aria-expanded={isOpen}
          onClick={() => setIsOpen((current) => !current)}
        >
          {isOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </nav>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="mobile-nav"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
          >
            {renderLinks("mobile-nav")}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
