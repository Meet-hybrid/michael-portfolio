import { motion } from 'framer-motion';
import Section from './Section';
import { skills } from './data';
import './Skills.css';

export default function Skills() {
  return (
    <Section id="skills" label="What I Work With" title="Technical Skills">
      <div className="skills-sections">
        {skills.map((group, i) => (
          <motion.div
            key={group.category}
            className="skill-group"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1, duration: 0.5 }}
          >
            <div className="skill-group-header">
              <span className="skill-group-icon">{group.icon}</span>
              <span className="skill-group-title">{group.category}</span>
            </div>
            <div className="skill-badges">
              {group.items.map(item => (
                <span
                  key={item.name}
                  className="skill-badge"
                  style={{
                    backgroundColor: item.bg,
                    color: item.color,
                    borderColor: item.color + '44',
                  }}
                >
                  {item.name}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
