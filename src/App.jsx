import { useEffect, useState } from 'react'

const NAV = [
  { id: 'top', label: 'Start' },
  { id: 'about', label: 'About' },
  { id: 'work', label: 'Work' },
  { id: 'research', label: 'Research' },
  { id: 'projects', label: 'Projects' },
  { id: 'skills', label: 'Skills' },
  { id: 'contact', label: 'Contact' },
]

// --- Active Section Hook ---
function useActiveSection() {
  const [active, setActive] = useState('top')
  useEffect(() => {
    const sections = NAV.map((n) => document.getElementById(n.id)).filter(Boolean)
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id)
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])
  return active
}

// --- Dark Mode Hook ---
function useDarkMode() {
  const [isDark, setIsDark] = useState(false)
  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [isDark])
  return [isDark, setIsDark]
}

/* ---------- Icons ---------- */
function Icon({ name, className = '' }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: '0 0 24 24',
    fill: 'none',
    stroke: 'currentColor',
    strokeWidth: 1.6,
    strokeLinecap: 'round',
    strokeLinejoin: 'round',
    className: `icon icon-${name} ${className}`,
  }
  switch (name) {
    case 'server':
      return (
        <svg {...common}>
          <rect x="3" y="4" width="18" height="6" rx="1.5" />
          <rect x="3" y="14" width="18" height="6" rx="1.5" />
          <circle cx="7" cy="7" r="0.6" fill="currentColor" stroke="none" />
          <circle cx="7" cy="17" r="0.6" fill="currentColor" stroke="none" />
        </svg>
      )
    case 'scan':
      return (
        <svg {...common}>
          <path d="M4 8V5a1 1 0 0 1 1-1h3" />
          <path d="M20 8V5a1 1 0 0 0-1-1h-3" />
          <path d="M4 16v3a1 1 0 0 0 1 1h3" />
          <path d="M20 16v3a1 1 0 0 1-1 1h-3" />
          <circle cx="12" cy="12" r="3.4" />
        </svg>
      )
    case 'leaf':
      return (
        <svg {...common}>
          <path d="M5 19c8 0 14-6 14-14-8 0-14 6-14 14Z" />
          <path d="M5 19c2-4 5-7 9-9" />
        </svg>
      )
    case 'globe':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="8.5" />
          <path d="M3.5 12h17" />
          <path d="M12 3.5c2.6 2.4 4 5.3 4 8.5s-1.4 6.1-4 8.5c-2.6-2.4-4-5.3-4-8.5s1.4-6.1 4-8.5Z" />
        </svg>
      )
    case 'code':
      return (
        <svg {...common}>
          <path d="M8.5 8 4 12l4.5 4" />
          <path d="M15.5 8 20 12l-4.5 4" />
          <path d="M13.5 5.5 10.5 18.5" />
        </svg>
      )
    case 'mail':
      return (
        <svg {...common}>
          <rect x="3" y="5" width="18" height="14" rx="1.8" />
          <path d="M3.5 6.5 12 13l8.5-6.5" />
        </svg>
      )
    case 'arrow':
      return (
        <svg {...common} strokeWidth="1.8">
          <path d="M5 12h13" />
          <path d="M13 6l6 6-6 6" />
        </svg>
      )
    case 'download':
      return (
        <svg {...common}>
          <path d="M12 3v12" />
          <path d="m7 10 5 5 5-5" />
          <path d="M5 21h14" />
        </svg>
      )
    case 'linkedin':
      return (
        <svg {...common}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      )
    case 'github':
      return (
        <svg {...common}>
          <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22" />
        </svg>
      )
    case 'moon':
      return (
        <svg {...common}>
          <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
        </svg>
      )
    case 'sun':
      return (
        <svg {...common}>
          <circle cx="12" cy="12" r="5" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" />
        </svg>
      )
    default:
      return null
  }
}

function SectionMark({ icon }) {
  return (
    <div className="section-mark" aria-hidden="true">
      <span className="section-mark-line" />
      <span className="section-mark-dot">
        <Icon name={icon} />
      </span>
      <span className="section-mark-line" />
    </div>
  )
}

function Entry({ date, tag, title, icon, children }) {
  return (
    <article className="entry-card">
      <div className="entry-card-icon">
        <Icon name={icon} />
      </div>
      <div className="entry-card-body">
        <div className="entry-meta">
          <span className="entry-date">{date}</span>
          {tag && <span className="entry-tag">{tag}</span>}
        </div>
        <h3 className="entry-title">{title}</h3>
        <div className="entry-content">{children}</div>
      </div>
    </article>
  )
}

function Metric({ value, label }) {
  return (
    <div className="metric">
      <span className="metric-value">{value}</span>
      <span className="metric-label">{label}</span>
    </div>
  )
}

export default function App() {
  const active = useActiveSection()
  const [isDark, setIsDark] = useDarkMode()

  return (
    <div className="notebook">
      <header className="masthead">
        <div className="masthead-inner">
          <span className="masthead-name">Sanjida Tasneem</span>
          <div className="masthead-right">
            <nav className="masthead-nav">
              {NAV.slice(1).map((n) => (
                <a key={n.id} href={`#${n.id}`} className={active === n.id ? 'is-active' : ''}>
                  {n.label}
                </a>
              ))}
            </nav>
            <button
              className="theme-toggle"
              onClick={() => setIsDark(!isDark)}
              aria-label="Toggle theme"
            >
              <Icon name={isDark ? 'sun' : 'moon'} />
            </button>
          </div>
        </div>
      </header>

      <main className="page">
        <section id="top" className="hero">
          <div className="hero-text">
            <p className="hero-kicker">Final-Year CSE Undergraduate</p>
            <h1 className="hero-title">
              Turning curiosity into code, research, and real projects.
            </h1>
            <p className="hero-lede">
              Final-year CSE student at IIUC, interested in Artificial Intelligence,
              Computer Vision,ML and Software Engineering. Here, I document the projects
              I build, the problems I explore, and the lessons I pick up along the way.
            </p>
            <div className="hero-links">
              <a className="btn" href="https://github.com/sanji24096" target="_blank" rel="noreferrer">
                View code on GitHub <Icon name="arrow" />
              </a>
              <a className="btn btn-quiet" href="#research">
                Read the research log
              </a>
              <a className="btn btn-quiet" href="/portfolio/resume.pdf" target="_blank" rel="noreferrer">
                Download CV <Icon name="download" />
              </a>
            </div>
            <div className="hero-socials">
              <a href="https://github.com/sanji24096" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
              <a href="https://www.linkedin.com/in/sanjida-tasneem-a87318276/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
            </div>
          </div>

          <div className="hero-photo-wrap">
            <figure className="hero-photo">
              <img src="/portfolio/profile.jpg" alt="Sanjida Tasneem" />
            </figure>
            <span className="hero-photo-tag">Est. IIUC</span>
          </div>
        </section>

        <SectionMark icon="scan" />

        <section id="about" className="block">
          <h2 className="block-heading">About</h2>
          <p>
            I'm an eighth-semester Computer Science and Engineering student at International Islamic University Chittagong. My work sits at the intersection of two areas I enjoy most: training deep learning models, particularly for medical imaging, and building backend systems that turn those models into practical applications.
          </p>
          <p>
            I believe good engineering goes beyond getting a model to perform well. A project is only truly complete when it is reproducible, well-documented, and structured so that others can understand, build on, and improve it. This portfolio reflects that approach — a collection of my research, projects, experiments, and the things I'm building along the way.
          </p>
        </section>

        <SectionMark icon="server" />

        <section id="work" className="block">
          <h2 className="block-heading">Work</h2>
          <Entry date="Current" tag="Internship" title="Backend AI Engineering Intern, FlyRank AI" icon="server">
            <p>
              Working through FlyRank's AI Fluency onboarding track — a structured sequence
              of assignments (the "FL-series") rather than open-ended intern busywork.
              Mentored by Alen Malkoč.
            </p>
            <ul className="entry-list">
              <li>
                Completed FL-01: a full workflow audit, a configured Claude Project, and the
                Anthropic Academy coursework behind it.
              </li>
              <li>
                Currently on portfolio positioning — proof statement, sitemap — and a Social
                Media Studio capstone project.
              </li>
              <li>Early backend groundwork: a Flask server and the Git workflow around it.</li>
            </ul>
          </Entry>
        </section>

        <SectionMark icon="scan" />

        <section id="research" className="block">
          <h2 className="block-heading">Research</h2>
          <p className="block-intro">
            Two lines of work, both in medical and environmental image classification,
            both written up in IEEE format.
          </p>

          <Entry
            date="Ongoing — thesis"
            tag="Medical imaging"
            title="Dual-modality skin lesion classification"
            icon="scan"
          >
            <p>
              A dual-branch model — DualDepthwiseResNet50 — that fuses clinical images with a
              second modality through a CrossGate fusion module, trained across six lesion
              classes (NV, MEL, BKL, BCC, AKIEC, DF) on HAM10000 combined with MILK10k. Built
              with a WeightedRandomSampler for class imbalance and explicit missing-modality
              handling, rather than assuming clean paired data.
            </p>
            <div className="metrics">
              <Metric value="81.72%" label="test accuracy" />
              <Metric value="0.6705" label="macro F1" />
              <Metric value="0.9463" label="macro AUC" />
            </div>
            <p className="entry-note">With my groupmates. Two-phase training, AdamW, early stopping.</p>
          </Entry>

          <Entry date="2025" tag="Waste classification" title="Fine-tuned DenseNet201 on a 9-class waste dataset" icon="leaf">
            <p>
              A merged, 35,168-image dataset across nine waste categories, trained with
              stratified 5-fold cross-validation and explained with Grad-CAM, Grad-CAM++, and
              Integrated Gradients — so the classification decisions are auditable, not just
              accurate.
            </p>
            <div className="metrics">
              <Metric value="98.49%" label="accuracy" />
              <Metric value="0.9820" label="Kappa" />
              <Metric value="0.9989" label="ROC-AUC" />
            </div>
            <p className="entry-note">
              Worked on research projects with my groupmates exploring deep learning and computer vision through practical projects and conference research.

            </p>
          </Entry>
        </section>

        <SectionMark icon="code" />

        <section id="projects" className="block">
          <h2 className="block-heading">Projects</h2>
          <Entry date="Shipped" tag="Web" title="New Year Countdown" icon="globe">
            <p>A small front-end project, live on GitHub Pages.</p>
            <a
              className="link"
              href="https://sanji24096.github.io/new-year-countdown"
              target="_blank"
              rel="noreferrer"
            >
              sanji24096.github.io/new-year-countdown <Icon name="arrow" />
            </a>
          </Entry>
          <Entry date="In progress" tag="PHP · MySQL" title="Bakery shop application" icon="code">
            <p>
              A full PHP/MySQL shop application, headed for private hosting on
              InfinityFree.
            </p>
          </Entry>
        </section>

        <SectionMark icon="server" />

        <section id="skills" className="block">
          <h2 className="block-heading">Skills</h2>
          <div className="skills-grid">
            <div className="skills-card">
              <div className="skills-card-icon"><Icon name="scan" /></div>
              <h4>Deep learning</h4>
              <p>PyTorch, TensorFlow, transfer learning, CNN architectures, Grad-CAM &amp; XAI methods, medical imaging pipelines</p>
            </div>
            <div className="skills-card">
              <div className="skills-card-icon"><Icon name="server" /></div>
              <h4>Backend</h4>
              <p>Python, Flask, Git, API design fundamentals, PHP &amp; MySQL</p>
            </div>
            <div className="skills-card">
              <div className="skills-card-icon"><Icon name="code" /></div>
              <h4>Writing &amp; tooling</h4>
              <p>IEEE-format research papers, LaTeX, technical documentation, React &amp; JavaScript</p>
            </div>
          </div>
        </section>

        <SectionMark icon="mail" />

        <section id="contact" className="block block-contact">
          <h2 className="block-heading">Contact</h2>
          <p>
            The best record of my work is on GitHub. Reach out there, or by email — 
            <a href="mailto:sanjidatasneem24@gmail.com" className="text-link"> sanjidatasneem24@gmail.com</a>.
          </p>
          <div className="hero-links">
            <a className="btn" href="https://github.com/sanji24096" target="_blank" rel="noreferrer">
              github.com/sanji24096 <Icon name="arrow" />
            </a>
            <a className="btn btn-quiet" href="https://www.linkedin.com/in/sanjida-tasneem-a87318276/" target="_blank" rel="noreferrer">
              LinkedIn <Icon name="linkedin" />
            </a>
          </div>
        </section>
      </main>

      <footer className="colophon">
        <span>Sanjida Tasneem {new Date().getFullYear()}</span>
        <div className="footer-socials">
          <a href="https://github.com/sanji24096" target="_blank" rel="noreferrer" aria-label="GitHub"><Icon name="github" /></a>
          <a href="https://www.linkedin.com/in/sanjida-tasneem-a87318276/" target="_blank" rel="noreferrer" aria-label="LinkedIn"><Icon name="linkedin" /></a>
        </div>
      </footer>
    </div>
  )
}