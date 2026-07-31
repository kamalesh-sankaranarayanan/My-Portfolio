import { motion } from 'framer-motion';
import { ArrowDown, Code2, Download, ExternalLink, Mail, Phone, Rocket, ShieldCheck, Sparkles } from 'lucide-react';
import { achievements, certificates, companies, experiences, heroStats, navItems, profile, projects, skills } from './data/portfolio';
import CustomCursor from './components/CustomCursor';
import { Particles } from './components/Particles';

const rise = {
  hidden: { opacity: 0, y: 36 },
  visible: { opacity: 1, y: 0 }
};

function SectionHeading({ eyebrow, title, copy }: { eyebrow: string; title: string; copy?: string }) {
  return (
    <motion.div className="section-heading" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.35 }} variants={rise} transition={{ duration: 0.55 }}>
      <p>{eyebrow}</p>
      <h2>{title}</h2>
      {copy && <span>{copy}</span>}
    </motion.div>
  );
}

function Pill({ children }: { children: string }) {
  return <span className="pill">{children}</span>;
}

export default function App() {
  return (
    <main>
      <CustomCursor />
      <Particles />

      <nav className="nav glass">
        <a className="brand" href="#top">KS</a>
        <div className="nav-links">
          {navItems.map((item) => <a key={item} href={`#${item.toLowerCase()}`}>{item}</a>)}
        </div>
      </nav>

      <section id="top" className="hero section">
        <motion.div className="hero-copy" initial="hidden" animate="visible" variants={rise} transition={{ duration: 0.65 }}>
          <div className="status-chip"><span /> Open to Backend / Software Engineering roles</div>
          <p className="eyebrow">Backend / AI Systems / Cloud / IoT / Streaming / DSA</p>
          <h1>{profile.name}</h1>
          <h3>Backend-focused CSE student building AI, cloud, IoT, and adaptive streaming projects.</h3>
          <p className="hero-text">{profile.tagline} I am aiming for serious engineering roles at product companies by showing deployed projects, clean architecture, DSA consistency, and a clear backend roadmap.</p>
          <div className="hero-actions">
            <a className="primary-btn" href="#projects"><Rocket size={18} /> Explore Projects</a>
            <a className="secondary-btn" href={profile.resume} download="Kamalesh-Sankaranarayanan-Resume.pdf"><Download size={18} /> Download Resume</a>
            <a className="secondary-btn" href={profile.github} target="_blank" rel="noreferrer"><Code2 size={18} /> GitHub</a>
          </div>
          <div className="hero-stats">
            {heroStats.map((stat) => <div className="mini-stat" key={stat.label}><strong>{stat.value}</strong><span>{stat.label}</span></div>)}
          </div>
        </motion.div>

        <motion.div className="system-card glass" initial={{ opacity: 0, scale: 0.92, rotate: 1 }} animate={{ opacity: 1, scale: 1, rotate: 0 }} transition={{ duration: 0.75 }}>
          <div className="terminal-top"><span /><span /><span /></div>
          <div className="code-label">portfolio.kernel.ts</div>
          <pre>{`const kamalesh = {\n  role: "Backend Software Engineer",
  education: "PSG iTech - CSE - 8.73 CGPA",
  currentOffer: "Infosys DSE",
  focus: ["DSA", "Backend APIs", "AI Workflows", "Streaming"],
  nextLearning: ["System Design", "Distributed Systems"],
  mission: "ship useful products, not templates"
};`}</pre>
          <div className="signal-grid">
            <div><ShieldCheck /><span>No active backlogs</span></div>
            <div><Sparkles /><span>Live deployments</span></div>
            <div><Code2 /><span>Public GitHub</span></div>
          </div>
        </motion.div>
        <a className="scroll-cue" href="#about"><ArrowDown /></a>
      </section>

      <section id="about" className="section about-section">
        <SectionHeading eyebrow="About" title="Backend-focused student with hands-on project experience." copy="A concise overview of my education, current strengths, internships, and direction toward backend software engineering." />
        <div className="about-grid">
          <div className="about-card glass large-card">
            <h4>Engineering Focus</h4>
            <p>Final-year B.E. Computer Science and Engineering student at PSG Institute of Technology and Applied Research with hands-on experience in Flask backends, AI workflows, IoT dashboards, databases, cloud deployment, and DSA practice.</p>
          </div>
          <div className="about-card glass">
            <h4>Target Role</h4>
            <p>Backend Software Engineer with a long-term path toward distributed systems, cloud infrastructure, practical AI-enabled products, and media infrastructure. IntelliStream is my current proof of adaptive streaming and ABR experimentation.</p>
          </div>
          <div className="about-card glass">
            <h4>Current Proof</h4>
            <p>Infosys DSE offer, HackWithInfy interview round, OCI certification, AI internship, Ideathon finalist, and multiple live deployed projects.</p>
          </div>
        </div>
        <div className="company-strip glass">
          {companies.map((company) => <span key={company}>{company}</span>)}
        </div>
      </section>

      <section id="skills" className="section">
        <SectionHeading eyebrow="Skills" title="Backend, AI, cloud, and core CS skills used across projects." />
        <div className="skills-grid">
          {skills.map(({ group, icon: Icon, items, level }) => (
            <motion.div className="skill-card glass" key={group} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={rise}>
              <div className="skill-head"><Icon /><h4>{group}</h4><strong>{level}%</strong></div>
              <div className="meter"><span style={{ width: `${level}%` }} /></div>
              <div className="pill-row">{items.map((item) => <Pill key={item}>{item}</Pill>)}</div>
            </motion.div>
          ))}
        </div>
      </section>

      <section id="experience" className="section timeline-section">
        <SectionHeading eyebrow="Experience" title="Internships and practical learning experience." />
        <div className="timeline">
          {experiences.map((exp, index) => (
            <motion.article className="timeline-card glass" key={exp.role} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.25 }} variants={rise} transition={{ delay: index * 0.08 }}>
              <div className="timeline-index">0{index + 1}</div>
              <div>
                <p className="type-label">{exp.type} - {exp.period}</p>
                <h3>{exp.role} - {exp.company}</h3>
                <p>{exp.summary}</p>
                <ul>{exp.impact.map((item) => <li key={item}>{item}</li>)}</ul>
              </div>
            </motion.article>
          ))}
        </div>
      </section>

      <section id="projects" className="section">
        <SectionHeading eyebrow="Projects" title="Selected projects with demos, code, and technical details." copy="Each card explains what the project does, how it is built, the main features, challenges, and possible next improvements." />
        <div className="projects-grid">
          {projects.map((project, index) => {
            const Icon = project.icon;
            return (
              <motion.article className="project-card glass" key={project.title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={rise} transition={{ delay: index * 0.04 }}>
                <div className="project-visual">
                  <Icon />
                  <span>{project.category}</span>
                  <em>{project.status}</em>
                </div>
                <div className="project-body">
                  <div className="project-title-row"><h3>{project.title}</h3></div>
                  <p className="one-liner">{project.oneLiner}</p>
                  <p className="description">{project.description}</p>
                  <div className="pill-row">{project.tech.map((tech) => <Pill key={tech}>{tech}</Pill>)}</div>
                  <div className="architecture-flow">
                    {project.architecture.map((step) => <span key={step}>{step}</span>)}
                  </div>
                  <div className="project-details">
                    <div><strong>Features</strong>{project.features.map((x) => <small key={x}>{x}</small>)}</div>
                    <div><strong>Challenges</strong>{project.challenges.map((x) => <small key={x}>{x}</small>)}</div>
                    <div><strong>Roadmap</strong>{project.roadmap.map((x) => <small key={x}>{x}</small>)}</div>
                  </div>
                  <div className="project-actions">
                    {project.live ? <a className="primary-btn" href={project.live} target="_blank" rel="noreferrer">Live Demo <ExternalLink size={16} /></a> : <span className="disabled-btn">Demo coming soon</span>}
                    {project.github ? <a className="secondary-btn" href={project.github} target="_blank" rel="noreferrer">Source <Code2 size={16} /></a> : <span className="disabled-btn">Planned repo</span>}
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </section>

      <section id="certificates" className="section certificates-section">
        <SectionHeading eyebrow="Certificates" title="Certifications, internships, and course completion proof." copy="A verified collection of certificates linked directly from the portfolio." />
        <div className="certificates-grid">
          {certificates.map(({ title, issuer, date, category, credential, link, icon: Icon }, index) => (
            <motion.article className="certificate-card glass" key={title} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.2 }} variants={rise} transition={{ delay: index * 0.05 }}>
              <div className="certificate-icon"><Icon /></div>
              <div className="certificate-body">
                <span>{category}</span>
                <h3>{title}</h3>
                <p>{issuer} - {date}</p>
                <small>{credential}</small>
              </div>
              {link ? (
                <a className="certificate-link" href={link} target="_blank" rel="noreferrer" aria-label={`Open certificate for ${title}`}>
                  <ExternalLink size={18} />
                </a>
              ) : (
                <span className="certificate-link is-empty" aria-label="Certificate link not added yet">
                  <ExternalLink size={18} />
                </span>
              )}
            </motion.article>
          ))}
        </div>
      </section>

      <section id="proof" className="section proof-section">
        <SectionHeading eyebrow="Proof" title="Achievements and participation highlights." />
        <div className="proof-grid">
          {achievements.map(({ title, icon: Icon }) => <div className="proof-card glass" key={title}><Icon /><span>{title}</span></div>)}
        </div>
      </section>

      <section id="github" className="section github-section">
        <SectionHeading eyebrow="GitHub + Coding" title="Public code, coding practice, and project activity." copy="A stable summary of my GitHub work, main languages, backend stack, and LeetCode progress." />
        <div className="github-layout">
          <div className="github-card glass">
            <h3>GitHub: {profile.githubUser}</h3>
            <p>Public repositories include IntelliStream, MindCare AI, IoT Water Monitoring, AQI Prediction, restaurant management, and additional engineering practice projects.</p>
            <div className="profile-buttons">
              <a className="primary-btn" href={profile.github} target="_blank" rel="noreferrer">Open GitHub <ExternalLink size={16} /></a>
              <a className="secondary-btn" href={profile.leetcode} target="_blank" rel="noreferrer">Open LeetCode <ExternalLink size={16} /></a>
            </div>
          </div>
          <div className="leetcode-card glass">
            <h3>LeetCode Progress</h3>
            <div className="leetcode-stats">
              <strong>250+</strong><span>problems solved across C++, C, and Python</span>
            </div>
            <p>Strongest visible areas: arrays, hash tables, DFS, trees, dynamic programming, backtracking, strings, and two pointers.</p>
            <div className="leetcode-focus">
              {['Arrays', 'Hash Tables', 'Trees', 'DFS', 'DP', 'Backtracking', 'Strings', 'Two Pointers'].map((topic) => <Pill key={topic}>{topic}</Pill>)}
            </div>
            <a className="leetcode-profile-link" href={profile.leetcode} target="_blank" rel="noreferrer">
              View LeetCode Profile <ExternalLink size={16} />
            </a>
          </div>
        </div>
        <div className="coding-practice-grid">
          <div className="practice-card glass">
            <strong>Consistency</strong>
            <span>Regular DSA practice with solved problems visible on LeetCode.</span>
          </div>
          <div className="practice-card glass">
            <strong>Languages Used</strong>
            <span>C++, C, and Python for problem solving and implementation practice.</span>
          </div>
          <div className="practice-card glass">
            <strong>Interview Focus</strong>
            <span>Arrays, strings, trees, DFS, dynamic programming, and backtracking.</span>
          </div>
        </div>
        <div className="github-metrics glass">
          <div>
            <strong>Public work</strong>
            <span>Streaming systems, AI apps, IoT dashboards, ML dashboards, backend tools</span>
          </div>
          <div>
            <strong>Main languages</strong>
            <span>Python, C++, C, JavaScript</span>
          </div>
          <div>
            <strong>Backend stack</strong>
            <span>Spring Boot, FastAPI, Flask, PostgreSQL, Docker, REST APIs</span>
          </div>
          <div>
            <strong>Coding practice</strong>
            <span>250+ LeetCode problems with DSA focus</span>
          </div>
        </div>
      </section>

      <section id="contact" className="section contact-section">
        <SectionHeading eyebrow="Contact" title="Open to backend internships and entry-level software roles." />
        <div className="contact-card glass">
          <p>I am looking for opportunities where I can work on backend systems, AI-enabled products, cloud applications, databases, APIs, streaming systems, and distributed-systems learning.</p>
          <div className="contact-actions">
            <a className="primary-btn" href={`mailto:${profile.email}`}><Mail size={18} /> {profile.email}</a>
            <a className="secondary-btn" href={`tel:${profile.phone}`}><Phone size={18} /> {profile.phone}</a>
            <a className="secondary-btn" href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ExternalLink size={16} /></a>
          </div>
        </div>
      </section>

      <footer>Copyright 2026 {profile.name}. Built as a software engineering portfolio.</footer>
    </main>
  );
}
