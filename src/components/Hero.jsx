import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import MetricCard from "./MetricCard";

const heroVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: "easeOut",
      staggerChildren: 0.08,
    },
  },
};

const heroItem = {
  hidden: { opacity: 0, y: 18 },
  visible: { opacity: 1, y: 0 },
};

const Hero = ({ metrics }) => (
  <section className="hero-section" id="hero">
    <div className="section-shell hero-grid">
      <motion.div
        className="hero-copy"
        variants={heroVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.span className="hero-kicker" variants={heroItem}>
          João de Paula / Ciência de Dados
        </motion.span>
        <motion.h1 variants={heroItem}>
          Dados em decisão.
        </motion.h1>
        <motion.p variants={heroItem}>
          Ciência de Dados, BI e automação para transformar processos complexos
          em produtos de dados claros, úteis e mensuráveis.
        </motion.p>
        <motion.div className="hero-tags" aria-label="Areas de atuacao" variants={heroItem}>
          <span>Dados</span>
          <span>BI</span>
          <span>Automação</span>
          <span>Machine Learning</span>
        </motion.div>
        <motion.div className="hero-actions" variants={heroItem}>
          <a className="btn primary" href="#cases">
            Ver cases de sucesso
            <ArrowRight size={18} />
          </a>
          <a className="btn secondary" href="#contato">
            Entrar em contato
          </a>
        </motion.div>

        <motion.div className="hero-metrics" variants={heroItem}>
          {metrics.map((metric) => (
            <MetricCard metric={metric} compact key={metric.label} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  </section>
);

export default Hero;
