import { motion } from 'framer-motion';
import { Link } from 'react-scroll';
import { personal } from './data';
import './Hero.css';

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] },
});

export default function Hero() {
  return (
    <section className="hero" id="about">
      <div className="hero-bg" />
      <div className="hero-grid" />

      <div className="hero-content">
        <motion.div className="hero-tag" {...fadeUp(0)}>
          <span className="pulse-dot" />
          {personal.available}
        </motion.div>

        <motion.h1 {...fadeUp(0.1)}>
          {personal.name.split(' ')[0]}{' '}
          <span className="accent">{personal.name.split(' ')[1]}</span>
        </motion.h1>

        <motion.div className="hero-title" {...fadeUp(0.2)}>
          {personal.title}
        </motion.div>

        <motion.div className="hero-sub" {...fadeUp(0.25)}>
          {personal.subtitle}
        </motion.div>

        <motion.p className="hero-desc" {...fadeUp(0.3)}>
          {personal.tagline}
        </motion.p>

        <motion.div className="hero-actions" {...fadeUp(0.4)}>
          <Link to="projects" smooth duration={600} offset={-80}>
            <button className="btn btn-primary">View My Work</button>
          </Link>
          <Link to="contact" smooth duration={600} offset={-80}>
            <button className="btn btn-outline">Get In Touch</button>
          </Link>
        </motion.div>

        <motion.div className="hero-contacts" {...fadeUp(0.5)}>
          <a href={`mailto:${personal.email}`} className="contact-chip">
            <EmailIcon /> {personal.email}
          </a>
          <a href={personal.github} target="_blank" rel="noreferrer" className="contact-chip">
            <GithubIcon /> Meet-hybrid
          </a>
          <span className="contact-chip">
            <PinIcon /> {personal.location}
          </span>
        </motion.div>
      </div>
    </section>
  );
}

const EmailIcon = () => (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
  </svg>
);

const GithubIcon = () => (
  <svg width="14" height="14" fill="currentColor" viewBox="0 0 24 24">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12" />
  </svg>
);

const PinIcon = () => (
  <svg width="14" height="14" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0zM15 11a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);
