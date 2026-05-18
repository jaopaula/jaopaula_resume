import SectionHeader from "./SectionHeader";
import ProjectCard from "./ProjectCard";

const Projects = ({ projects }) => (
  <section className="content-section" id="projetos">
    <div className="section-shell">
      <SectionHeader
        eyebrow="Projetos"
        title="Soluções apresentadas como produtos de dados."
        description="Projetos pensados para gerar leitura, velocidade operacional e confiabilidade, não apenas para existir como repositório."
      />
      <div className="cards-grid">
        {projects.map((project, index) => (
          <ProjectCard project={project} index={index} key={project.title} />
        ))}
      </div>
    </div>
  </section>
);

export default Projects;
