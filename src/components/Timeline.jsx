import SectionHeader from "./SectionHeader";

const Timeline = ({ items }) => (
  <section className="content-section" id="experiencia">
    <div className="section-shell">
      <SectionHeader
        eyebrow="Trajetória"
        title="Uma evolução guiada por problemas reais."
        description="A experiência combina construção técnica, leitura de negócio e preocupação com entregas reutilizáveis."
        animated={false}
      />
      <div className="timeline">
        {items.map((item) => (
          <article
            className="timeline-item"
            key={item.title}
          >
            <span>{item.period}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </article>
        ))}
      </div>
    </div>
  </section>
);

export default Timeline;
