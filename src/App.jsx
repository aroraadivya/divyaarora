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
      <hr className="section-divider" />
      <About />
      <hr className="section-divider" />
      <Skills />
      <hr className="section-divider" />
      <Experience />
      <hr className="section-divider" />
      <Projects />
      <hr className="section-divider" />
      <Posts />
      <hr className="section-divider" />
      <Writing />
      <hr className="section-divider" />
      <Contact />
      <footer>Designed &amp; built · Divya Arora · {new Date().getFullYear()}</footer>
      <PrintResume />
    </>
  );
}

export default App;
