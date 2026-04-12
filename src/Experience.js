import { motion } from 'framer-motion';
import Section from './Section';
import { experience } from './data';
import './Experience.css';

export default function Experience() {
  return (
    <Section id="experience" label="Where I've Been" title="Experience">
      <div className="timeline">
        {experience.map((e, i) => (
          <motion.div
            key={i}
            className="timeline-item"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.6 }}
          >
            <div className="timeline-dot" />
            <div className="timeline-meta">
              <span className="timeline-role">{e.role}</span>
              <span className="timeline-date">{e.date}</span>
            </div>
            <div className="timeline-company">{e.company} · {e.location}</div>
            <ul className="timeline-bullets">
              {e.bullets.map((b, j) => <li key={j}>{b}</li>)}
            </ul>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
