import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const Timeline = ({ items }) => (
  <section className="content-section" id="experiencia">
    <div className="section-shell">
      <SectionHeader
        eyebrow="Trajetória"
        title="Uma evolução guiada por problemas reais."
        description="A experiência combina construção técnica, leitura de negócio e preocupação com entregas reutilizáveis."
      />
      <div className="timeline">
        {items.map((item, index) => (
          <motion.article
            className="timeline-item"
            key={item.title}
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.45, delay: index * 0.08 }}
          >
            <span>{item.period}</span>
            <div>
              <h3>{item.title}</h3>
              <p>{item.description}</p>
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default Timeline;
