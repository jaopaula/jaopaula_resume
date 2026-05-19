import { Mail } from "lucide-react";
import SectionHeader from "./SectionHeader";

const LinkedInIcon = ({ size = 22 }) => (
  <svg
    aria-hidden="true"
    fill="currentColor"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.41v1.56h.05c.47-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28ZM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13Zm1.78 13.02H3.56V9h3.56v11.45ZM22.22 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.22.79 24 1.77 24h20.45c.98 0 1.78-.78 1.78-1.73V1.72C24 .77 23.2 0 22.22 0Z"
    />
  </svg>
);

const GitHubIcon = ({ size = 22 }) => (
  <svg
    aria-hidden="true"
    fill="currentColor"
    height={size}
    viewBox="0 0 24 24"
    width={size}
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M12 .3a12 12 0 0 0-3.8 23.38c.6.11.82-.26.82-.58v-2.1c-3.34.73-4.04-1.43-4.04-1.43-.55-1.39-1.33-1.76-1.33-1.76-1.09-.74.08-.73.08-.73 1.2.09 1.84 1.24 1.84 1.24 1.07 1.83 2.8 1.3 3.48.99.11-.77.42-1.3.76-1.6-2.66-.3-5.46-1.33-5.46-5.93 0-1.31.47-2.38 1.24-3.22-.12-.3-.54-1.52.12-3.18 0 0 1.01-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.29-1.55 3.3-1.23 3.3-1.23.66 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.8 5.63-5.48 5.93.43.37.81 1.1.81 2.22v3.29c0 .32.22.7.83.58A12 12 0 0 0 12 .3Z" />
  </svg>
);

const icons = {
  Email: <Mail size={22} />,
  LinkedIn: <LinkedInIcon size={22} />,
  GitHub: <GitHubIcon size={22} />,
};

const Contact = ({ links }) => (
  <section className="content-section contact-section" id="contato">
    <div className="section-shell contact-grid">
      <SectionHeader
        eyebrow="Contato"
        title="Vamos conversar sobre dados, automação e impacto."
        description="Use um dos canais para falar sobre projetos, oportunidades ou colaborações."
        light
        animated={false}
      />

      <div className="contact-list">
        {links.map((link) => (
          <a
            href={link.href}
            className="contact-card"
            key={link.label}
            target={link.href.startsWith("http") ? "_blank" : undefined}
            rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
          >
            <span className="icon-badge">{icons[link.label]}</span>
            <div>
              <strong>{link.label}</strong>
              <p>{link.value}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  </section>
);

export default Contact;
