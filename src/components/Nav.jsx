import { useState } from 'react';

export default function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <nav>
      <a href="#hero" className="nav-logo">Divya Arora</a>
      <ul className={`nav-links${open ? ' nav-open' : ''}`}>
        <li><a href="#about" onClick={() => setOpen(false)}>About</a></li>
        <li><a href="#experience" onClick={() => setOpen(false)}>Experience</a></li>
        <li><a href="#projects" onClick={() => setOpen(false)}>Projects</a></li>
        <li><a href="#posts" onClick={() => setOpen(false)}>Posts</a></li>
        <li><a href="#writing" onClick={() => setOpen(false)}>Writing</a></li>
        <li><a href="#contact" onClick={() => setOpen(false)}>Contact</a></li>
      </ul>
      <button
        className="nav-hamburger"
        onClick={() => setOpen(o => !o)}
        aria-label="Menu"
      >
        <span /><span /><span />
      </button>
    </nav>
  );
}
