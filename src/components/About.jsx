import { motion } from "framer-motion";
import { BrainCircuit, ChartNoAxesCombined, Workflow } from "lucide-react";
import SectionHeader from "./SectionHeader";

const pillars = [
  {
    icon: <Workflow size={22} />,
    title: "Automação com contexto",
    text: "Reduzo tarefas manuais criando fluxos que respeitam regras de negócio, qualidade e rastreabilidade.",
  },
  {
    icon: <ChartNoAxesCombined size={22} />,
    title: "Indicadores acionáveis",
    text: "Transformo dados dispersos em dashboards e leituras que ajudam áreas de negócio a priorizar decisões.",
  },
  {
    icon: <BrainCircuit size={22} />,
    title: "Visão analítica",
    text: "Combino programação, estatística aplicada e comunicação para conectar problema, solução e resultado.",
  },
];

const About = () => (
  <section className="content-section" id="sobre">
    <div className="section-shell split-section">
      <SectionHeader
        eyebrow="Sobre"
        title="Dados, produto e negócio no mesmo raciocínio."
        description="Atuo criando soluções analíticas que melhoram processos, reduzem esforço operacional e tornam decisões mais claras para times de negócio."
      />

      <div className="pillar-grid">
        {pillars.map((pillar, index) => (
          <motion.article
            className="pillar-card"
            key={pillar.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.4 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <div className="icon-badge">{pillar.icon}</div>
            <h3>{pillar.title}</h3>
            <p>{pillar.text}</p>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default About;
