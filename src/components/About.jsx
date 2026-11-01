import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const cards = [
  { icon: '🤖', title: 'GenAI & Agentic Systems', sub: 'LangChain · LangGraph · CrewAI · RAG · Vector DBs' },
  { icon: '🏗️', title: 'Data Engineering', sub: 'Python · SQL · Spark · Databricks · Snowflake · FastAPI' },
  { icon: '💻', title: 'Full Stack & Mobile', sub: 'React · React Native (Expo) · Node.js · Prisma · PostgreSQL' },
  { icon: '☁️', title: 'Cloud & DevOps', sub: 'AWS · Docker · Kubernetes · Terraform · Railway · Vercel' },
  { icon: '📱', title: 'iOS Development', sub: 'Swift · SwiftUI · UIKit · CoreData · MVVM' },
  { icon: '✍️', title: 'Author', sub: 'She Knew, Eventually · Oct 2025' },
];

export default function About() {
  return (
    <section id="about">
      <motion.p className="label" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }}>About</motion.p>
      <motion.h2 className="heading" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>A little about me</motion.h2>

      <div className="about-top">
        <motion.div className="about-text" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }}>
          <p>I'm a data engineer with a curiosity that bleeds into everything, from building multi-agent AI systems and shipping production apps, to developing for iOS and writing books.</p>
          <p>Currently at ReKnew in Hyderabad, I build GenAI systems for Fiserv: a multi-agent platform with RAG, semantic search, and LangGraph orchestration, plus KPI dashboards over bank data. On the side, I independently built and run Sponix, a food-delivery platform with four apps live in production. I care about taking prototypes to reliable production systems, not just demos.</p>
          <p>I've worn many hats: Scrum Master leading a team of 9 at Infosys, Zoho developer automating client business processes, open-source contributor, and most recently a published author.</p>
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
              <span className="stat-num">4</span>
              <span className="stat-label">Live Apps</span>
            </div>
          </div>
          <p className="about-edu">🎓 B.E. Computer Science &amp; Engineering · CGPA 8.34<br />Chitkara University · 2022 - 2026</p>
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
