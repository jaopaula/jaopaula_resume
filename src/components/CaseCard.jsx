import { motion } from "framer-motion";

const CaseCard = ({ item, index }) => (
  <motion.article
    className="case-card"
    initial={{ opacity: 0, y: 22 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.45, delay: index * 0.08 }}
    whileHover={{ y: -5 }}
  >
    <div className="case-copy">
      <div className="case-heading">
        <span>Case de sucesso</span>
        <strong>{item.metric}</strong>
      </div>
      <h3>{item.title}</h3>
      <p><b>Contexto:</b> {item.context}</p>
      <p><b>Problema:</b> {item.problem}</p>
      <p><b>Solução:</b> {item.solution}</p>
      <p><b>Impacto:</b> {item.impact}</p>
      <div className="tag-list">
        {item.technologies.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </div>
    </div>
  </motion.article>
);

export default CaseCard;
