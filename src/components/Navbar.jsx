import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useEffect, useState } from "react";

const Navbar = ({ links }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("sobre");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 24);

      const visibleSection = links
        .map((link) => document.querySelector(link.href))
        .filter(Boolean)
        .find((section) => {
          const rect = section.getBoundingClientRect();
          return rect.top <= 140 && rect.bottom >= 140;
        });

      if (visibleSection) {
        setActiveSection(visibleSection.id);
      }
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
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
