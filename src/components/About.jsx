import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const cards = [
  { icon: '🏗️', title: 'Data Engineering', sub: 'FastAPI · AI Agents · LLM Integration' },
  { icon: '📱', title: 'iOS Development', sub: 'Swift · SwiftUI · MVVM Architecture' },
  { icon: '⚙️', title: 'Workflow Automation', sub: 'Zoho CRM · Deluge · Business Process Ops' },
  { icon: '💻', title: 'Full Stack Development', sub: 'React · Node.js · FastAPI · SQL · REST APIs' },
  { icon: '🧠', title: 'DSA & Problem Solving', sub: 'C++ · Data Structures · Algorithms · OOP' },
  { icon: '✍️', title: 'Author', sub: 'She Knew, Eventually · Oct 2025' },
];

export default function About() {
  return (
    <section id="about">
      <motion.p className="label" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }}>About</motion.p>
      <motion.h2 className="heading" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>A little about me</motion.h2>

      <div className="about-top">
        <motion.div className="about-text" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p>I'm a data engineer with a curiosity that bleeds into everything — from building LLM-powered applications and automating business workflows, to developing iOS apps and writing books.</p>
          <p>Currently at ReKnew in Hyderabad, I work at the intersection of data, AI, and product — building intelligent systems that actually solve real problems, not just demo well.</p>
          <p>I've worn many hats: Scrum Master leading a team of 9 at Infosys, Zoho developer shipping client CRM solutions, open-source contributor, and most recently a published author.</p>
        </motion.div>
        <motion.div className="about-right" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }}>
          <div className="about-stats">
            <div className="about-stat">
              <span className="stat-num">3+</span>
              <span className="stat-label">Internships</span>
            </div>
            <div className="about-stat">
              <span className="stat-num">1</span>
              <span className="stat-label">Published Book</span>
            </div>
            <div className="about-stat">
              <span className="stat-num">3+</span>
              <span className="stat-label">Years Coding</span>
            </div>
          </div>
          <p className="about-edu">🎓 B.Tech Computer Science · iOS Specialization<br />Chitkara University · Class of 2022</p>
        </motion.div>
      </div>

      <motion.div className="about-cards-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
        {cards.map((c, i) => (
          <motion.div key={i} className="about-card" variants={fadeUp} transition={{ duration: 0.4 }}>
            <div className="about-card-icon">{c.icon}</div>
            <div>
              <div className="about-card-title">{c.title}</div>
              <div className="about-card-sub">{c.sub}</div>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
