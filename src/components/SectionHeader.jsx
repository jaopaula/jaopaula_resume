import { motion } from "framer-motion";

const HeaderContent = ({ eyebrow, title, description }) => (
  <>
    <span>{eyebrow}</span>
    <h2>{title}</h2>
    {description && <p>{description}</p>}
  </>
);

const SectionHeader = ({ eyebrow, title, description, light = false, animated = true }) => {
  const className = `section-header ${light ? "light" : ""}`;

  if (!animated) {
    return (
      <div className={className}>
        <HeaderContent eyebrow={eyebrow} title={title} description={description} />
      </div>
    );
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.68, ease: [0.22, 1, 0.36, 1] }}
    >
      <HeaderContent eyebrow={eyebrow} title={title} description={description} />
    </motion.div>
  );
};

export default SectionHeader;
