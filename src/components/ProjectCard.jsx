import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ProjectCard = ({ project, index }) => (
  <motion.article
    className="project-card"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.25 }}
    transition={{ duration: 0.45, delay: index * 0.08 }}
    whileHover={{ y: -5 }}
  >
    <div className="card-topline">
      <span>{project.area}</span>
      <ArrowUpRight size={18} />
    </div>
    <h3>{project.title}</h3>
    <p><strong>Problema:</strong> {project.problem}</p>
    <p><strong>Solução:</strong> {project.solution}</p>
    <div className="impact-line">{project.impact}</div>
    <div className="tag-list">
      {project.tags.map((tag) => (
        <span key={tag}>{tag}</span>
      ))}
    </div>
  </motion.article>
);

export default ProjectCard;
