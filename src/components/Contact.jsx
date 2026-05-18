import { motion } from "framer-motion";
import { Code2, ExternalLink, Mail } from "lucide-react";
import SectionHeader from "./SectionHeader";

const icons = {
  Email: <Mail size={22} />,
  LinkedIn: <ExternalLink size={22} />,
  GitHub: <Code2 size={22} />,
};

const Contact = ({ links }) => (
  <section className="content-section contact-section" id="contato">
    <div className="section-shell contact-grid">
      <SectionHeader
        eyebrow="Contato"
        title="Vamos conversar sobre dados, automação e impacto."
        description="Use um dos canais abaixo para falar sobre projetos, oportunidades ou colaborações."
        light
      />

      <div className="contact-list">
        {links.map((link, index) => (
          <motion.a
            href={link.href}
            className="contact-card"
            key={link.label}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.4, delay: index * 0.08 }}
            whileHover={{ y: -4 }}
          >
            <span className="icon-badge">{icons[link.label]}</span>
            <div>
              <strong>{link.label}</strong>
              <p>{link.value}</p>
            </div>
          </motion.a>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
