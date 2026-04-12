import { motion } from 'framer-motion';
import './Section.css';

export default function Section({ id, label, title, children }) {
  return (
    <section id={id} className="section">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: '-80px' }}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="section-label">
          <span>{label}</span>
        </div>
        <h2 className="section-title">{title}</h2>
        {children}
      </motion.div>
    </section>
  );
}
