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

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setScrollWidth(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <>
      <div
        id="scroll-progress"
        style={{ width: `${scrollWidth}%` }}
      />
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
