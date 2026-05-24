import { motion } from 'framer-motion';

const fadeUp = { hidden: { opacity: 0, y: 24 }, show: { opacity: 1, y: 0 } };

export default function Writing() {
  return (
    <section id="writing">
      <motion.p className="label" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5 }}>Writing</motion.p>
      <motion.h2 className="heading" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.05 }}>She Knew, Eventually</motion.h2>
      <motion.div className="book-card" variants={fadeUp} initial="hidden" whileInView="show" viewport={{ once: true }} transition={{ duration: 0.55 }}>
        <img src="/book-cover.png" alt="She Knew, Eventually — Divya Arora" className="book-cover-img" loading="lazy" />
        <div className="book-info">
          <span className="book-badge">Debut Non-Fiction</span>
          <h3 className="book-title">She Knew, Eventually</h3>
          <p className="book-year">Published October 2025</p>
          <p className="book-desc">An introspective conversation on modern feminism, softness as strength, and emotional accountability. This is where the writer in me became the author she always dreamed of.</p>
          <div className="book-buy">
            <p className="book-buy-label">Available on</p>
            <div className="book-buy-links">
              <a href="https://writerspocket.com/shop/e01c8875-33b0-4638-b7ef-9b97b7ad95c6" target="_blank" rel="noreferrer" className="buy-btn">Writer's Pocket</a>
              <a href="https://www.amazon.in/She-Knew-Eventually-Divya-Arora/dp/9372489239?s=bazaar" target="_blank" rel="noreferrer" className="buy-btn">Amazon</a>
              <a href="https://www.flipkart.com/she-knew-eventually/p/itmd248164f1dd3d" target="_blank" rel="noreferrer" className="buy-btn">Flipkart</a>
              <a href="https://play.google.com/store/books/details/Divya_Arora_She_Knew_Eventually?id=qYWWEQAAQBAJ" target="_blank" rel="noreferrer" className="buy-btn">Google Books</a>
              <a href="https://www.amazon.in/She-Knew-Eventually-Divya-Arora-ebook/dp/B0FZJPLQ6R/ref=tmm_kin_swatch_0" target="_blank" rel="noreferrer" className="buy-btn">Kindle</a>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
