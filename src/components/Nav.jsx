import { useState, useEffect } from 'react';

const links = [
  ['about', 'About'],
  ['experience', 'Experience'],
  ['projects', 'Projects'],
  ['posts', 'Posts'],
  ['writing', 'Writing'],
  ['contact', 'Contact'],
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const observers = links.map(([id]) => {
      const el = document.getElementById(id);
      if (!el) return null;
      const obs = new IntersectionObserver(
        ([entry]) => { if (entry.isIntersecting) setActive(id); },
        { threshold: 0.25 }
      );
      obs.observe(el);
      return obs;
    });
    return () => observers.forEach(o => o?.disconnect());
  }, []);

  return (
    <nav>
      <a href="#hero" className="nav-logo">Divya Arora</a>
      <ul className={`nav-links${open ? ' nav-open' : ''}`}>
        {links.map(([id, label]) => (
          <li key={id}>
            <a
              href={`#${id}`}
              onClick={() => setOpen(false)}
              className={active === id ? 'nav-active' : ''}
            >
              {label}
            </a>
          </li>
        ))}
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
