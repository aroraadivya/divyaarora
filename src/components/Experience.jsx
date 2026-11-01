import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };

const jobs = [
  {
    date: 'May 2026 - Present',
    role: 'Junior Data Engineer',
    company: 'ReKnew · Hyderabad, India · Full-time',
    desc: 'Designed a multi-agent AI system for Fiserv: a raw-data analysis agent, a RAG agent answering templated questions from PDF templates via embeddings and semantic search, and a frontend-payload analysis agent. Built the orchestration with LangChain, LangGraph, and CrewAI (planning, tool use, execution loops) backed by vector databases, delivered a KPI/metrics dashboard surfacing bank data, and deployed the services via CI/CD, Docker, and AWS.',
    tags: ['LangChain', 'LangGraph', 'CrewAI', 'RAG', 'Vector DBs', 'AWS', 'Docker', 'CI/CD'],
  },
  {
    date: 'Feb 2026 - Apr 2026',
    role: 'Data Engineer Intern',
    company: 'ReKnew · Hyderabad, India',
    desc: 'Built AI-driven applications end to end, integrating LLM/GenAI into real-world production use cases. Developed FastAPI backend services to operationalize AI features with full-stack React frontends on top, translating ambiguous business requirements into scalable REST API and microservice designs.',
    tags: ['FastAPI', 'React', 'LLM / GenAI', 'REST APIs', 'Microservices'],
  },
  {
    date: 'Apr 2025 - Feb 2026',
    role: 'Business Process Automation (Zoho Development)',
    company: 'Zouma Consulting Services · Mohali',
    desc: 'Customized and automated business processes across the Zoho ecosystem. Implemented workflow rules, custom functions, and integrations with Zoho CRM, Desk, Creator, and Deluge scripting, and collaborated with cross-functional teams to deliver tailored client solutions.',
    tags: ['Zoho CRM', 'Zoho Desk', 'Zoho Creator', 'Zoho Flow', 'Deluge', 'Integrations'],
  },
  {
    date: 'Feb 2025 (1 month)',
    role: 'iOS Developer Intern & Scrum Master',
    company: 'Infosys · Mysore, India',
    desc: 'Developed and optimized an iOS application using SwiftUI and UIKit, integrating CoreData/Firebase and RESTful APIs, with efficient caching and MVVM best practices. Also led a cross-functional team of 9 as Scrum Master, running stand-ups, sprint planning, and retrospectives.',
    tags: ['SwiftUI', 'UIKit', 'CoreData', 'Firebase', 'MVVM', 'Scrum Master'],
  },
  {
    date: 'Jan 2024 - Oct 2024',
    role: 'Team Member & Volunteer',
    company: 'Techacks 4.0',
    desc: 'Contributed to the planning and execution of a large-scale hackathon. Started as a volunteer managing registrations and logistics, then continued as a core team member.',
    tags: ['Event Management', 'Team Collaboration', 'Hackathon Planning'],
  },
  {
    date: 'Sep 2023 - Aug 2024',
    role: 'Frontend Web Developer',
    company: 'Open Source Chandigarh',
    desc: 'Contributed to open-source web projects as a frontend developer for a year, writing clean, maintainable HTML, CSS, and JavaScript, reviewing PRs, and collaborating with distributed contributors on GitHub.',
    tags: ['JavaScript', 'HTML / CSS', 'Open Source'],
  },
  {
    date: 'Aug 2023 - Sep 2024',
    role: 'Event Organizer, then Content Lead',
    company: 'Apple Student Community · Rajpura, Punjab',
    desc: 'Led content strategy and creation: blog posts, event write-ups, and social media. Mentored junior members, maintained brand consistency, and helped organize technical workshops and peer-learning sessions.',
    tags: ['Technical Writing', 'Leadership', 'Content Strategy', 'Event Management'],
    last: true,
  },
];

export default function Experience() {
  return (
    <section id="experience">
      <motion.p className="label" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }}>Experience</motion.p>
      <motion.h2 className="heading" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>Where I've worked</motion.h2>
      <motion.div className="timeline" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
        {jobs.map((job, i) => (
          <motion.div
            key={i}
            className="tl-item"
            variants={fadeUp}
            transition={{ duration: 0.45 }}
            style={job.last ? { paddingBottom: 0 } : undefined}
          >
            <div className="tl-date">{job.date}</div>
            <div className="tl-role">{job.role}</div>
            <div className="tl-company">{job.company}</div>
            <div className="tl-desc">{job.desc}</div>
            <div className="tl-tags">
              {job.tags.map((t, j) => <span key={j} className="tl-tag">{t}</span>)}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
