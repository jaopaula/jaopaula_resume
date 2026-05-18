import { motion } from "framer-motion";
import SectionHeader from "./SectionHeader";

const TechStack = ({ groups }) => (
  <section className="content-section" id="tecnologias">
    <div className="section-shell">
      <SectionHeader
        eyebrow="Stack"
        title="Stack para construir produtos de dados."
        description="Ferramentas organizadas por tipo de entrega: análise, BI, automação, dashboards e infraestrutura."
      />
      <div className="tech-grid">
        {groups.map((group, index) => (
          <motion.article
            className="tech-group"
            key={group.title}
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.45, delay: index * 0.07 }}
            whileHover={{ y: -4 }}
          >
            <h3>{group.title}</h3>
            <div className="tag-list">
              {group.items.map((item) => (
                <span key={item}>{item}</span>
              ))}
            </div>
          </motion.article>
        ))}
      </div>
    </div>
  </section>
);

export default TechStack;
