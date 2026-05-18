import { motion } from "framer-motion";

const MetricCard = ({ metric, compact = false }) => (
  <motion.article
    className={`metric-card ${compact ? "compact" : ""}`}
    whileHover={{ y: -4 }}
    transition={{ type: "spring", stiffness: 260, damping: 20 }}
  >
    <strong>{metric.value}</strong>
    <span>{metric.label}</span>
    <p>{metric.detail}</p>
  </motion.article>
);

export default MetricCard;
