import SectionHeader from "./SectionHeader";
import CaseCard from "./CaseCard";

const Cases = ({ cases }) => (
  <section className="content-section dark-section" id="cases">
    <div className="section-shell">
      <SectionHeader
        eyebrow="Cases"
        title="Cases de Sucesso"
        description="Projetos com narrativa de produto: contexto, problema, solucao, tecnologia e impacto mensuravel."
      />
      <div className="case-list">
        {cases.map((item, index) => (
          <CaseCard item={item} index={index} key={item.title} />
        ))}
      </div>
    </div>
  </section>
);

export default Cases;
