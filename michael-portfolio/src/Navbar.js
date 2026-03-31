import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import './Navbar.css';

const links = ['about', 'skills', 'projects', 'experience', 'education', 'contact'];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-logo">M<span>.</span>Philip</div>

      <ul className={`nav-links ${menuOpen ? 'open' : ''}`}>
        {links.map(l => (
          <li key={l}>
            <Link
              to={l}
              smooth
              duration={600}
              offset={-80}
              onClick={() => setMenuOpen(false)}
            >
              {l}
            </Link>
          </li>
        ))}
      </ul>

      <button className="hamburger" onClick={() => setMenuOpen(!menuOpen)} aria-label="menu">
        <span className={menuOpen ? 'open' : ''} />
        <span className={menuOpen ? 'open' : ''} />
        <span className={menuOpen ? 'open' : ''} />
      </button>
    </nav>
  );
}
