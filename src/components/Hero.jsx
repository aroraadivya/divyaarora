import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 28 }, show: { opacity: 1, y: 0 } };

export default function Hero() {
  return (
    <section id="hero">
      <div className="hero-inner">
        <motion.div
          className="hero-text"
          variants={fadeUp}
          initial="hidden"
          animate="show"
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="hero-tags">
            <span className="hero-tag">She / Her &nbsp;·&nbsp; India</span>
            <span className="hero-status">⚡ Currently at ReKnew · Building AI systems</span>
          </div>
          <h1 className="hero-name">Divya<br /><em>Arora</em></h1>
          <p className="hero-desc">
            Junior Data Engineer building intelligent systems with AI. Also an author, iOS developer, and workflow automation enthusiast. Just curious about everything.
          </p>
          <div className="hero-btns">
            <a href="mailto:divyaarorag0o1@gmail.com" className="btn btn-dark">Get in touch</a>
            <button onClick={() => window.print()} className="btn btn-pink">Print Resume</button>
            <a href="https://github.com/aroraadivya" target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub</a>
            <a href="https://www.linkedin.com/in/aroraadivya/" target="_blank" rel="noreferrer" className="btn btn-ghost">LinkedIn</a>
            <a href="https://x.com/divyaarorag0o1" target="_blank" rel="noreferrer" className="btn btn-ghost">Twitter / X</a>
          </div>
        </motion.div>

        <motion.div
          className="hero-photo-wrap"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, delay: 0.2, ease: 'easeOut' }}
        >
          <img src="/profile.png" alt="Divya Arora" className="hero-photo" loading="lazy" />
          <div className="float-badge float-1">🐍 Python</div>
          <div className="float-badge float-2">⚛️ React</div>
          <div className="float-badge float-3">🍎 Swift</div>
          <div className="float-badge float-4">🤖 AI / LLM</div>
          <div className="float-badge float-5">✍️ Author</div>
          <div className="float-badge float-6">⚡ n8n</div>
        </motion.div>
      </div>
    </section>
  );
}
