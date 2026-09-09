import { motion } from 'framer-motion';
import Section from './Section';
import { projects } from './data';
import './Projects.css';

export default function Projects() {
  return (
    <Section id="projects" label="What I've Built" title="Projects">
      <div className="projects-grid">
        {projects.map((p, i) => (
          <motion.div
            key={p.title}
            className={`project-card ${p.live ? 'featured' : ''}`}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.08, duration: 0.6 }}
            whileHover={{ y: -6 }}
          >
            <div className="project-top-bar" />
            <div className="project-header">
              <div className="project-year">{p.year}</div>
              {p.live && <span className="live-badge"><span className="live-dot" />Live</span>}
              {p.comingSoon && <span className="soon-badge">In Progress · Coming Soon</span>}
              {p.clientProject && <span className="client-badge">Client Project</span>}
            </div>
            <h3 className="project-title">{p.title}</h3>
            <p className="project-desc">{p.description}</p>
            <div className="project-tech">
              {p.tech.map(t => <span key={t}>{t}</span>)}
            </div>
            <div className="project-links">
              {p.github && (
                <a href={p.github} target="_blank" rel="noreferrer" className="project-link">
                  <GithubIcon /> Code
                </a>
              )}
              {p.live && (
                <a href={p.live} target="_blank" rel="noreferrer" className="project-link live-link">
                  <LinkIcon /> Live Demo
                </a>
              )}
              {p.comingSoon && <span className="project-link disabled">Live Demo — Soon</span>}
              {p.clientProject && <span className="project-link disabled">Private Repository</span>}
            </div>
            {p.demoNote && <p className="project-demo-note">{p.demoNote}</p>}
          </motion.div>
        ))}
      </div>
    </Section>
  );
}

const GithubIcon = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
  </svg>
);

const LinkIcon = () => (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);
