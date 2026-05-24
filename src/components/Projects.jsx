import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const projects = [
  {
    dot: 'linear-gradient(135deg, #f2c4c4, #e09090)',
    name: 'EmotionSense',
    desc: 'Real-time multimodal emotion analysis system fusing text, audio, and video signals into a single prediction with stress index, risk level, and CBT recommendations.',
    tags: ['Next.js', 'FastAPI', 'scikit-learn', 'OpenCV', 'MediaPipe', 'Python'],
    href: 'https://github.com/aroraadivya/Multimodel-Affective-Computing-2210991531---2210991688---2210991800---2210991799',
  },
  {
    dot: 'linear-gradient(135deg, #c4d4f2, #90a8e0)',
    name: 'Library Management System',
    desc: 'Full-featured iOS app for managing library books, members, and borrow records built with Swift and SwiftUI following MVVM architecture.',
    tags: ['Swift', 'SwiftUI', 'MVVM', 'iOS'],
    href: 'https://github.com/aroraadivya/Library-Management-System',
  },
  {
    dot: 'linear-gradient(135deg, #c4f2d4, #90e0b0)',
    name: 'LeetCode DSA Solutions',
    desc: '500+ curated problem solutions organized by topic — Arrays, Dynamic Programming, Bit Manipulation, Sorting, and more. A growing reference for coding interviews.',
    tags: ['C++', 'DSA', 'Algorithms', 'Data Structures'],
    href: 'https://github.com/aroraadivya/LeetCode-Questions',
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
