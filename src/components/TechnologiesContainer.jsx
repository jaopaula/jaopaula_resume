import {
  DiHtml5,
  DiCss3,
  DiJsBadge,
  DiNodejsSmall,
  DiMysql,
  DiReact,
  DiSass,
  DiPython,
  DiPhp,
} from "react-icons/di";
import { SiRedux } from "react-icons/si"; // Importando o ícone do Redux

import "../styles/components/technologiescontainer.sass";

const technologies = [
  { id: "js", name: "JavaScript", icon: <DiJsBadge />, description: "JavaScript is a widely used programming language for web development." },
  { id: "node", name: "Node.js", icon: <DiNodejsSmall />, description: "Node.js is a platform that allows developers to use JavaScript on the server side." },
  { id: "react", name: "React", icon: <DiReact />, description: "React is a JavaScript library for building user interfaces." },
  { id: "redux", name: "Redux", icon: <SiRedux style={{ color: "#764ABC" }} />, description: "Redux is a predictable state container for JavaScript apps, often used with React." }, // Estilo inline para a cor do Redux
  { id: "sass", name: "Sass", icon: <DiSass />, description: "Sass is a style sheet language that extends CSS with features like variables, nesting, and mixins." },
  { id: "mysql", name: "MySQL", icon: <DiMysql />, description: "MySQL is a widely used relational database management system." },
  { id: "python", name: "Python", icon: <DiPython />, description: "Python is a high-level interpreted programming language, known for its clear and readable syntax." },
  { id: "php", name: "PHP", icon: <DiPhp />, description: "PHP is a widely used server-side scripting language, especially suited for web development and can be embedded into HTML." },
  { id: "html", name: "HTML5", icon: <DiHtml5 />, description: "HTML5 is the latest version of the markup language used to structure and present content on the web." },
  { id: "css", name: "CSS3", icon: <DiCss3 />, description: "CSS3 is the latest version of the style sheet language used to style content on web pages." },
];

const TechnologiesContainer = () => {
  return (
    <section className="technologies-container">
      <h2>Technologies</h2>
      <div className="technologies-grid">
        {technologies.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <div className="technology-info">
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesContainer;
