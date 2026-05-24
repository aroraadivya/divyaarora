import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };
const stagger = { hidden: {}, show: { transition: { staggerChildren: 0.08 } } };

const LiIcon = () => (
  <svg className="post-li-icon" viewBox="0 0 24 24" fill="#0A66C2">
    <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.03-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.41v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.45v6.29zM5.34 7.43a2.07 2.07 0 1 1 0-4.14 2.07 2.07 0 0 1 0 4.14zm1.78 13.02H3.56V9h3.56v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.73v20.54C0 23.23.79 24 1.77 24h20.46C23.2 24 24 23.23 24 22.27V1.73C24 .77 23.2 0 22.23 0z" />
  </svg>
);

const posts = [
  {
    href: 'https://www.linkedin.com/posts/aroraadivya_survived-thrived-my-1-month-at-infosys-activity-7302021892574502912-5WWZ',
    tagClass: 'post-tag-story',
    tag: 'Experience',
    text: '"Survived & Thrived: My 1-Month at Infosys! What happens when you put 9 aspiring iOS developers in a team, add tight deadlines, endless debugging sessions, and a sprinkle of strong opinions? Drama, debates, and some legendary inside jokes!"',
  },
  {
    href: 'https://www.linkedin.com/posts/aroraadivya_newbeginnings-careermilestone-interviewsuccess-activity-7313501799359877120-2Lzu',
    tagClass: 'post-tag-milestone',
    tag: 'Milestone',
    text: '"Completing a four-round interview process — Aptitude & Programming, Group Discussion, Technical, and HR — as a third-year CS student. Starting an exciting new chapter. Grateful, excited, and ready."',
  },
  {
    href: 'https://www.linkedin.com/posts/aroraadivya_a-few-weeks-ago-while-packing-my-bags-activity-7319760929817018368-MX3a',
    tagClass: 'post-tag-story',
    tag: 'Reflection',
    text: '"A few weeks ago, while packing my bags to leave my hostel one last time, I found that notebook. You know the kind — rough edges, coffee stains, and pages filled with half-written ideas, syntax errors, and big dreams like: \'Build an app that actually works.\'"',
  },
  {
    href: 'https://www.linkedin.com/posts/aroraadivya_from-the-start-of-my-college-i-faced-a-activity-7186359080800702465-xEiD',
    tagClass: 'post-tag-growth',
    tag: 'Growth',
    text: '"From the start of my college, I faced a challenge that seemed impossible to overcome — stage fear. But today, I\'m proud to share that I conquered it, thanks to the incredible support from Open Source Chandigarh, Apple Student Community, and Techacks 4.0."',
  },
  {
    href: 'https://www.linkedin.com/posts/aroraadivya_too-bold-good-that-means-im-doing-it-right-activity-7340645110813986817-rnb-',
    tagClass: 'post-tag-growth',
    tag: 'Mindset',
    text: '"And then one day I looked back just to realise that I am not so little anymore — not in dreams, not in courage, not in spirit. From the quiet steps to the bold leaps, I\'ve grown into someone I\'m proud of."',
  },
  {
    href: 'https://www.linkedin.com/posts/aroraadivya_applestudentcommunity-chitkarau-chitkarauniversity-activity-7163734343939477505-Mmfg',
    tagClass: 'post-tag-milestone',
    tag: 'Community',
    text: '"Celebrating the success of Tech Horizon: Exploring Frontiers in Research and Innovation. Grateful to Dr. Amanpreet Kaur and the Apple Student Community core team. The energy, the curiosity, and the conversations made it unforgettable."',
  },
];

export default function Posts() {
  return (
    <section id="posts">
      <motion.p className="label" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }}>From LinkedIn</motion.p>
      <motion.h2 className="heading" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>Thoughts &amp; Milestones</motion.h2>
      <motion.div className="posts-grid" variants={stagger} initial="hidden" whileInView="show" viewport={{ once: true }}>
        {posts.map((p, i) => (
          <motion.a
            key={i}
            href={p.href}
            target="_blank"
            rel="noreferrer"
            className="post-card"
            variants={fadeUp}
            transition={{ duration: 0.4 }}
          >
            <div className="post-card-top">
              <span className={`post-tag ${p.tagClass}`}>{p.tag}</span>
              <LiIcon />
            </div>
            <p className="post-text">{p.text}</p>
            <span className="post-read">Read post →</span>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
