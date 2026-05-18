import { motion } from "framer-motion";

const SectionHeader = ({ eyebrow, title, description, light = false }) => (
  <motion.div
    className={`section-header ${light ? "light" : ""}`}
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.35 }}
    transition={{ duration: 0.5 }}
  >
    <span>{eyebrow}</span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </motion.div>
);

export default SectionHeader;
