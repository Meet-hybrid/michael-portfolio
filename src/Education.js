import { motion } from 'framer-motion';
import Section from './Section';
import { education, certifications, languages } from './data';
import './Education.css';

export default function Education() {
  return (
    <Section id="education" label="Where I Learned" title="Education">
      <div className="edu-grid">
        {education.map((e, i) => (
          <motion.div
            key={i}
            className="edu-card"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="edu-left">
              <div className="edu-institution">{e.institution}</div>
              <div className="edu-degree">{e.degree} · {e.location}</div>
              {e.note && <div className="edu-note">{e.note}</div>}
            </div>
            <div className="edu-date">{e.date}</div>
          </motion.div>
        ))}
      </div>

      <h3 className="sub-title">Certifications</h3>
      <div className="certs-list">
        {certifications.map((c, i) => (
          <motion.div
            key={i}
            className="cert-item"
            initial={{ opacity: 0, x: -10 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08 }}
          >
            <span className="cert-marker" />
            <span className="cert-text">{c.text}</span>
          </motion.div>
        ))}
      </div>

      <h3 className="sub-title">Languages</h3>
      <div className="lang-grid">
        {languages.map((l, i) => (
          <div key={i} className="lang-item">
            <span className="lang-name">{l.name}</span>
            <span className="lang-level">{l.level}</span>
          </div>
        ))}
      </div>
    </Section>
  );
}
