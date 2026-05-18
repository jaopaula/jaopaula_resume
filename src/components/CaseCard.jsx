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
    <div className="case-visual" aria-label={`Gráfico ilustrativo do case ${item.title}`}>
      <div className="visual-row">
        <span>Antes</span>
        <div><i style={{ width: index === 0 ? "92%" : "78%" }} /></div>
      </div>
      <div className="visual-row accent">
        <span>Depois</span>
        <div><i style={{ width: index === 0 ? "18%" : "38%" }} /></div>
      </div>
      <small>Placeholder visual para grafico comparativo</small>
    </div>
  </motion.article>
);

export default CaseCard;
