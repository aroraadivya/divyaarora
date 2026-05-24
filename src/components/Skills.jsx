import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

const rows = [
  {
    label: 'Languages',
    tags: [
      { icon: 'devicon-python-plain', text: 'Python' },
      { icon: 'devicon-cplusplus-plain', text: 'C++' },
      { icon: 'devicon-javascript-plain', text: 'JavaScript' },
      { icon: 'devicon-typescript-plain', text: 'TypeScript' },
      { icon: 'devicon-swift-plain', text: 'Swift' },
      { icon: 'devicon-mysql-plain', text: 'SQL' },
    ],
  },
  {
    label: 'Full Stack',
    tags: [
      { icon: 'devicon-react-original', text: 'React' },
      { icon: 'devicon-nextjs-plain', text: 'Next.js' },
      { icon: 'devicon-nodejs-plain', text: 'Node.js' },
      { icon: 'devicon-fastapi-plain', text: 'FastAPI' },
      { text: 'REST APIs' },
      { icon: 'devicon-postgresql-plain', text: 'PostgreSQL' },
      { icon: 'devicon-mongodb-plain', text: 'MongoDB' },
      { icon: 'devicon-tailwindcss-plain', text: 'Tailwind CSS' },
    ],
  },
  {
    label: 'AI / LLM',
    tags: [
      { text: 'AI Agents' },
      { text: 'LLM Integration' },
      { text: 'Prompt Engineering' },
      { text: 'RAG' },
    ],
  },
  {
    label: 'iOS',
    tags: [
      { icon: 'devicon-swift-plain', text: 'Swift' },
      { text: 'SwiftUI' },
      { text: 'MVVM' },
      { icon: 'devicon-xcode-plain', text: 'Xcode' },
    ],
  },
  {
    label: 'DSA',
    tags: [
      { text: 'Data Structures' },
      { text: 'Algorithms' },
      { text: 'OOP' },
      { icon: 'devicon-cplusplus-plain', text: 'C++' },
    ],
  },
  {
    label: 'Tools',
    tags: [
      { icon: 'devicon-git-plain', text: 'Git' },
      { icon: 'devicon-github-original', text: 'GitHub' },
      { icon: 'devicon-docker-plain', text: 'Docker' },
      { icon: 'devicon-postman-plain', text: 'Postman' },
      { text: 'Zoho CRM' },
      { text: 'Deluge' },
    ],
  },
  {
    label: 'Leadership',
    tags: [
      { text: 'Scrum Master' },
      { text: 'Agile' },
      { text: 'Team Leadership' },
      { text: 'Technical Writing' },
      { text: 'Mentoring' },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills">
      <motion.p className="label" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }}>Skills</motion.p>
      <motion.h2 className="heading" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>What I work with</motion.h2>
      <motion.div className="skills-rows" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
        {rows.map((row, i) => (
          <motion.div key={i} className="skill-row" variants={fadeUp} transition={{ duration: 0.4 }}>
            <span className="skill-row-label">{row.label}</span>
            <div className="tags">
              {row.tags.map((tag, j) => (
                <span key={j} className="tag">
                  {tag.icon && <i className={tag.icon} />}
                  {tag.text}
                </span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}
