export default function PrintResume() {
  return (
    <div id="print-resume">
      <header className="pr-header">
        <div className="pr-header-left">
          <h1 className="pr-name">Divya Arora</h1>
          <p className="pr-title">Data Engineer · GenAI, Agentic Systems &amp; Full-Stack Delivery</p>
        </div>
        <div className="pr-header-right">
          <a href="mailto:divyaarorag0o1@gmail.com">divyaarorag0o1@gmail.com</a>
          <a href="https://linkedin.com/in/aroraadivya">linkedin.com/in/aroraadivya</a>
          <a href="https://github.com/aroraadivya">github.com/aroraadivya</a>
        </div>
      </header>

      <div className="pr-body">
        <div className="pr-main">
          <section className="pr-section">
            <h2 className="pr-section-title">Summary</h2>
            <p className="pr-text">Data Engineer with production experience shipping GenAI and agentic systems end to end, from a multi-agent AI platform for Fiserv (LangChain, LangGraph, CrewAI, RAG, vector databases) to independently architecting and operating Sponix, a multi-app production platform live on Google Play and the Apple App Store. Comfortable owning delivery full-stack, cloud-native deployment included, with a consistent focus on taking prototypes to governed, reliable production systems. Published author of <em>She Knew, Eventually</em> (2025).</p>
          </section>

          <section className="pr-section">
            <h2 className="pr-section-title">Experience</h2>

            <div className="pr-job">
              <div className="pr-job-header">
                <span className="pr-job-role">Junior Data Engineer</span>
                <span className="pr-job-date">May 2026 - Present</span>
              </div>
              <div className="pr-job-company">ReKnew · Hyderabad, India · Full-time</div>
              <p className="pr-job-desc">Designed a multi-agent AI system for Fiserv (raw-data analysis, RAG over PDF templates via embeddings/semantic search, frontend-payload analysis) orchestrated with LangChain, LangGraph, and CrewAI on vector databases. Delivered a KPI/metrics dashboard over bank data. Deployed via CI/CD, Docker, and AWS.</p>
            </div>

            <div className="pr-job">
              <div className="pr-job-header">
                <span className="pr-job-role">Data Engineer Intern</span>
                <span className="pr-job-date">Feb 2026 - Apr 2026</span>
              </div>
              <div className="pr-job-company">ReKnew · Hyderabad, India</div>
              <p className="pr-job-desc">Built AI-driven applications end to end, integrating LLM/GenAI into production use cases. Developed FastAPI services with React frontends and designed REST APIs and microservices from ambiguous business requirements.</p>
            </div>

            <div className="pr-job">
              <div className="pr-job-header">
                <span className="pr-job-role">Business Process Automation (Zoho Development)</span>
                <span className="pr-job-date">Apr 2025 - Feb 2026</span>
              </div>
              <div className="pr-job-company">Zouma Consulting Services · Mohali</div>
              <p className="pr-job-desc">Customized and automated business processes with Zoho CRM, Desk, Creator, and Deluge. Implemented workflow rules, custom functions, and integrations for client operations.</p>
            </div>

            <div className="pr-job">
              <div className="pr-job-header">
                <span className="pr-job-role">iOS Developer Intern &amp; Scrum Master</span>
                <span className="pr-job-date">Feb 2025 (1 month)</span>
              </div>
              <div className="pr-job-company">Infosys · Mysore, India</div>
              <p className="pr-job-desc">Developed an iOS app with SwiftUI and UIKit, integrating CoreData/Firebase and REST APIs using MVVM. Led a team of 9 as Scrum Master.</p>
            </div>

            <div className="pr-job">
              <div className="pr-job-header">
                <span className="pr-job-role">Technical Team Member</span>
                <span className="pr-job-date">Sep 2023 - Aug 2024</span>
              </div>
              <div className="pr-job-company">Open Source Chandigarh</div>
              <p className="pr-job-desc">Assisted in software development initiatives, coding events, and technical support.</p>
            </div>

            <div className="pr-job">
              <div className="pr-job-header">
                <span className="pr-job-role">Event Organizer, then Content Lead</span>
                <span className="pr-job-date">Aug 2023 - Sep 2024</span>
              </div>
              <div className="pr-job-company">Apple Student Community · Chitkara University</div>
              <p className="pr-job-desc">Organized tech events, hackathons, and workshops; later led technical content including blogs, documentation, and event reports.</p>
            </div>
          </section>

          <section className="pr-section">
            <h2 className="pr-section-title">Projects</h2>
            <div className="pr-projects">
              <div className="pr-project">
                <span className="pr-project-name">Sponix</span>: Multi-app food-delivery platform (customer, restaurant, delivery, admin) on a shared Node.js/Express/Prisma backend. 4 apps live on Google Play, 2 on the App Store. Razorpay payment-first checkout, WebSocket order tracking, deploys on Railway/Vercel and Expo EAS.
              </div>
              <div className="pr-project">
                <span className="pr-project-name">OpsIQ</span>: Agentic incident-triage system (Microsoft Agents League Hackathon 2026) diagnosing production issues from raw logs, reranking hypotheses and updating runbook steps in real time.
              </div>
              <div className="pr-project">
                <span className="pr-project-name">EmotionSense</span>: Real-time multimodal emotion analysis fusing text, audio, and video signals (Next.js, FastAPI, scikit-learn, OpenCV).
              </div>
            </div>
          </section>
        </div>

        <div className="pr-sidebar">
          <section className="pr-section">
            <h2 className="pr-section-title">Education</h2>
            <p className="pr-text"><strong>B.E. Computer Science &amp; Engineering</strong><br />Chitkara University · 2022 - 2026<br />CGPA: 8.34/10</p>
          </section>

          <section className="pr-section">
            <h2 className="pr-section-title">Skills</h2>
            <div className="pr-skill-row"><span className="pr-skill-cat">GenAI</span><span>LangChain, LangGraph, CrewAI, RAG, Embeddings, Vector DBs, Semantic Search</span></div>
            <div className="pr-skill-row"><span className="pr-skill-cat">Languages</span><span>Python, SQL, C++, C, JavaScript, Bash, Swift</span></div>
            <div className="pr-skill-row"><span className="pr-skill-cat">Data</span><span>Apache Spark, Databricks, Snowflake, PostgreSQL, MySQL, MongoDB</span></div>
            <div className="pr-skill-row"><span className="pr-skill-cat">Full Stack</span><span>FastAPI, Node.js, Express, React, React Native (Expo), Prisma</span></div>
            <div className="pr-skill-row"><span className="pr-skill-cat">Cloud</span><span>AWS (Bedrock, SageMaker), Docker, Kubernetes/EKS, Terraform, CloudFormation, CI/CD, Railway, Vercel, Firebase</span></div>
            <div className="pr-skill-row"><span className="pr-skill-cat">iOS</span><span>SwiftUI, UIKit, Storyboard, CoreData, MVVM, Supabase</span></div>
            <div className="pr-skill-row"><span className="pr-skill-cat">Automation</span><span>Zoho CRM, Creator, Desk, Flow, Deluge</span></div>
            <div className="pr-skill-row"><span className="pr-skill-cat">Domain</span><span>Banking/fintech KPI reporting, Agile/Scrum</span></div>
          </section>

          <section className="pr-section">
            <h2 className="pr-section-title">Publication</h2>
            <p className="pr-text"><strong>She Knew, Eventually</strong><br />Debut non-fiction · Oct 2025<br />Available on Amazon, Flipkart, Kindle, Google Books</p>
          </section>
        </div>
      </div>
    </div>
  );
}
