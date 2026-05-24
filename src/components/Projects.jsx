import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const projects = [
  {
    dot: 'linear-gradient(135deg, #f2c4c4, #e09090)',
    name: 'LLM-powered Data App',
    desc: 'Intelligent application integrating AI agents and LLM models with a React frontend and FastAPI backend for scalable, data-driven workflows.',
    tags: ['React', 'FastAPI', 'LLM', 'Python'],
    href: 'https://github.com/aroraadivya',
  },
  {
    dot: 'linear-gradient(135deg, #c4d4f2, #90a8e0)',
    name: 'iOS Mobile App',
    desc: 'Full-featured iOS application built at Infosys using MVVM architecture, SwiftUI components, and REST API integration.',
    tags: ['Swift', 'SwiftUI', 'MVVM'],
    href: 'https://github.com/aroraadivya',
  },
  {
    dot: 'linear-gradient(135deg, #c4f2d4, #90e0b0)',
    name: 'Zoho CRM Automation',
    desc: 'Custom CRM modules and end-to-end workflow automation built with Zoho Creator and Deluge scripting for client-specific business processes.',
    tags: ['Zoho CRM', 'Deluge', 'Automation'],
    href: 'https://github.com/aroraadivya',
  },
  {
    dot: 'linear-gradient(135deg, #f2e4c4, #e0c890)',
    name: 'More on GitHub',
    desc: 'Open-source contributions, experiments, and side projects across data engineering, web, and iOS development.',
    tags: ['Open Source', 'github.com/aroraadivya'],
    href: 'https://github.com/aroraadivya',
  },
];

export default function Projects() {
  return (
    <section id="projects">
      <motion.p className="label" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }}>Projects</motion.p>
      <motion.h2 className="heading" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>Things I've built</motion.h2>
      <motion.div className="projects-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
        {projects.map((p, i) => (
          <motion.a
            key={i}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="project-card"
            variants={fadeUp}
            transition={{ duration: 0.4 }}
          >
            <div className="project-dot" style={{ background: p.dot }} />
            <div className="project-name">{p.name}</div>
            <div className="project-desc">{p.desc}</div>
            <div className="project-tags">
              {p.tags.map((t, j) => <span key={j} className="project-tag">{t}</span>)}
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
