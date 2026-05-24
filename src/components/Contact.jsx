import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

export default function Contact() {
  return (
    <section id="contact">
      <motion.div className="contact-card" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.55 }}>
        <h2 className="contact-title">Let's connect</h2>
        <p className="contact-sub">Open to collaborations, new opportunities,<br />or just a good conversation.</p>
        <div className="contact-btns">
          <a href="mailto:divyaarorag0o1@gmail.com" className="btn btn-dark">Send an email</a>
          <a href="https://www.linkedin.com/in/aroraadivya/" target="_blank" rel="noreferrer" className="btn btn-ghost">LinkedIn</a>
          <a href="https://github.com/aroraadivya" target="_blank" rel="noreferrer" className="btn btn-ghost">GitHub</a>
        </div>
      </motion.div>
    </section>
  );
}
