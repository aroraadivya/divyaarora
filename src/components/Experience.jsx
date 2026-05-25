import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.09 } } };

const jobs = [
  {
    date: 'May 2026 — Present',
    role: 'Junior Data Engineer',
    company: 'ReKnew · Hyderabad, India · Full-time',
    desc: 'Building intelligent, data-driven applications at the intersection of data engineering and AI.',
    tags: ['Data Engineering', 'AI / LLM', 'FastAPI'],
  },
  {
    date: 'Feb 2026 — Apr 2026',
    role: 'Data Engineer Intern',
    company: 'ReKnew · Hyderabad, India',
    desc: 'Developed frontend interfaces with React and backend services with FastAPI. Explored AI agents and LLM-based applications, integrating models into real-world use cases and designing scalable APIs for seamless data flow.',
    tags: ['React', 'FastAPI', 'AI Agents', 'LLM Integration'],
  },
  {
    date: 'Apr 2025 — Feb 2026',
    role: 'Zoho Developer Intern',
    company: 'Zouma Consulting Services APAC · Mohali',
    desc: 'Customized CRM and business solutions across the Zoho ecosystem. Built Zoho Creator apps, automated workflows with Zoho Flow and Deluge scripting, managed customer support via Zoho Desk and SalesIQ, and delivered HR and analytics solutions using Zoho People and Zoho Analytics.',
    tags: ['Zoho CRM', 'Zoho Flow', 'Zoho Creator', 'Zoho Desk', 'Zoho SalesIQ', 'Zoho Analytics', 'Zoho People', 'Deluge'],
  },
  {
    date: 'Feb 2025 — Mar 2025',
    role: 'iOS Developer Intern & Scrum Master',
    company: 'Infosys · Mysore, India',
    desc: 'Led a cross-functional team of 9 as Scrum Master — facilitated daily stand-ups, sprint planning, and retrospectives in a fast-paced Agile environment. Simultaneously built a full iOS application from scratch using Swift and SwiftUI, following MVVM architecture with RESTful API integration.',
    tags: ['Swift', 'SwiftUI', 'MVVM', 'REST APIs', 'Scrum Master', 'Agile', 'Team Leadership'],
  },
  {
    date: 'Jan 2024 — Oct 2024',
    role: 'Team Member & Volunteer',
    company: 'Techacks 4.0',
    desc: 'Contributed to the planning and execution of a large-scale hackathon. Started as a volunteer managing registrations and logistics, then continued as a core team member.',
    tags: ['Event Management', 'Team Collaboration', 'Hackathon Planning'],
  },
  {
    date: 'Sep 2023 — Aug 2024',
    role: 'Frontend Web Developer',
    company: 'Open Source Chandigarh',
    desc: 'Contributed to open-source web projects as a frontend developer for a year — writing clean, maintainable HTML, CSS, and JavaScript, reviewing PRs, and collaborating with distributed contributors on GitHub.',
    tags: ['JavaScript', 'HTML / CSS', 'Open Source'],
  },
  {
    date: 'Aug 2023 — Aug 2024',
    role: 'Content Team Lead & Event Organizer',
    company: 'Apple Student Community · Rajpura, Punjab',
    desc: 'Led content strategy and creation — blog posts, event write-ups, and social media. Mentored junior members, maintained brand consistency, and helped organize technical workshops and peer-learning sessions.',
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
