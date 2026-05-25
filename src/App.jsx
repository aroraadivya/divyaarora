import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Posts from './components/Posts';
import Writing from './components/Writing';
import Contact from './components/Contact';
import PrintResume from './components/PrintResume';

function App() {
  const [scrollWidth, setScrollWidth] = useState(0);
  const [cursor, setCursor] = useState({ x: -200, y: -200 });
  const [isTouch] = useState(() => window.matchMedia('(hover: none)').matches);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollWidth(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (isTouch) return;
    const onMove = (e) => setCursor({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, [isTouch]);

  return (
    <>
      <div id="scroll-progress" style={{ width: `${scrollWidth}%` }} />
      {!isTouch && (
        <div className="cursor" style={{ left: cursor.x, top: cursor.y }} />
      )}
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Experience />
      <Projects />
      <Posts />
      <Writing />
      <Contact />
      <footer>Designed &amp; built · Divya Arora · {new Date().getFullYear()}</footer>
      <PrintResume />
      {scrollWidth > 5 && (
        <button
          className="back-to-top"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Back to top"
        >
          ↑
        </button>
      )}
    </>
  );
}

export default App;
