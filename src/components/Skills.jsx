import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.07 } } };

const rows = [
  {
    label: 'GenAI & Agents',
    tags: [
      { text: 'LangChain' },
      { text: 'LangGraph' },
      { text: 'CrewAI' },
      { text: 'RAG Pipelines' },
      { text: 'Embeddings' },
      { text: 'Vector Databases' },
      { text: 'Semantic Search' },
      { text: 'Agent Orchestration' },
    ],
  },
  {
    label: 'Languages',
    tags: [
      { icon: 'devicon-python-plain', text: 'Python' },
      { icon: 'devicon-mysql-plain', text: 'SQL' },
      { icon: 'devicon-cplusplus-plain', text: 'C++' },
      { icon: 'devicon-c-plain', text: 'C' },
      { icon: 'devicon-javascript-plain', text: 'JavaScript' },
      { icon: 'devicon-typescript-plain', text: 'TypeScript' },
      { icon: 'devicon-swift-plain', text: 'Swift' },
      { icon: 'devicon-bash-plain', text: 'Bash' },
    ],
  },
  {
    label: 'Data',
    tags: [
      { text: 'Apache Spark' },
      { text: 'Databricks' },
      { text: 'Snowflake' },
      { text: 'Data Pipelines' },
      { icon: 'devicon-postgresql-plain', text: 'PostgreSQL' },
      { icon: 'devicon-mysql-plain', text: 'MySQL' },
      { icon: 'devicon-mongodb-plain', text: 'MongoDB' },
    ],
  },
  {
    label: 'Full Stack',
    tags: [
      { icon: 'devicon-fastapi-plain', text: 'FastAPI' },
      { icon: 'devicon-nodejs-plain', text: 'Node.js' },
      { icon: 'devicon-express-original', text: 'Express' },
      { icon: 'devicon-react-original', text: 'React' },
      { icon: 'devicon-react-original', text: 'React Native (Expo)' },
      { icon: 'devicon-nextjs-plain', text: 'Next.js' },
      { text: 'Prisma' },
      { text: 'REST APIs' },
      { text: 'Microservices' },
    ],
  },
  {
    label: 'Cloud & DevOps',
    tags: [
      { icon: 'devicon-amazonwebservices-plain-wordmark', text: 'AWS (Bedrock, SageMaker)' },
      { icon: 'devicon-docker-plain', text: 'Docker' },
      { icon: 'devicon-kubernetes-plain', text: 'Kubernetes / EKS' },
      { icon: 'devicon-terraform-plain', text: 'Terraform' },
      { text: 'CloudFormation' },
      { text: 'CI/CD' },
      { text: 'Railway' },
      { text: 'Vercel' },
      { icon: 'devicon-firebase-plain', text: 'Firebase' },
      { icon: 'devicon-git-plain', text: 'Git / GitHub' },
    ],
  },
  {
    label: 'iOS',
    tags: [
      { icon: 'devicon-swift-plain', text: 'Swift' },
      { text: 'SwiftUI' },
      { text: 'UIKit' },
      { text: 'Storyboard' },
      { text: 'CoreData' },
      { text: 'MVVM' },
      { text: 'Supabase' },
      { icon: 'devicon-xcode-plain', text: 'Xcode' },
    ],
  },
  {
    label: 'Automation',
    tags: [
      { text: 'Zoho CRM' },
      { text: 'Zoho Creator' },
      { text: 'Zoho Desk' },
      { text: 'Zoho Flow' },
      { text: 'Deluge' },
      { text: 'n8n' },
      { text: 'Pabbly' },
    ],
  },
  {
    label: 'Fundamentals',
    tags: [
      { text: 'Data Structures' },
      { text: 'Algorithms' },
      { text: 'Operating Systems' },
      { text: 'Computer Networks' },
      { text: 'Agile / Scrum' },
      { text: 'Technical Writing' },
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
