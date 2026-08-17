import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Landing.css'

const FEATURES = [
  {
    code: 'RX-01',
    title: 'Inventory Management',
    desc: 'Real-time stock levels, batch tracking, and expiry monitoring across every shelf.'
  },
  {
    code: 'RX-02',
    title: 'Prescription Assistance',
    desc: 'Digitize prescriptions and let the assistant flag interactions before they reach the counter.'
  },
  {
    code: 'RX-03',
    title: 'AI Insights',
    desc: 'Demand forecasting and reorder suggestions trained on your own dispensing history.'
  },
  {
    code: 'RX-04',
    title: 'Drug Information',
    desc: 'Instant lookups for dosage, contraindications, and substitute compounds.'
  },
  {
    code: 'RX-05',
    title: 'Smart Alerts',
    desc: 'Low-stock, expiry, and anomaly alerts routed to the right person, automatically.'
  }
]

const STEPS = [
  { n: '01', label: 'Connect your inventory', text: 'Import existing stock or start fresh — PharmaFlow maps it in minutes.' },
  { n: '02', label: 'Let the model learn', text: 'Dispensing patterns train the forecasting engine in the background.' },
  { n: '03', label: 'Act on the dashboard', text: 'Reorder, flag, and report from a single command center.' }
]

export default function Landing() {
  return (
    <div className="landing">
      <nav className="nav">
        <div className="nav-brand">
          <img src={logo} alt="PharmaFlow" className="nav-logo" />
          <span>PharmaFlow</span>
        </div>
        <div className="nav-links">
          <a href="#features">Features</a>
          <a href="#how-it-works">How it works</a>
          <a href="#benefits">Benefits</a>
        </div>
        <div className="nav-actions">
          <Link to="/login" className="btn btn-ghost">Login</Link>
          <Link to="/signup" className="btn btn-primary">Get Started</Link>
        </div>
      </nav>

      <header className="hero">
        <div className="hero-copy">
          <span className="eyebrow">AI-Powered Pharmaceutical Management</span>
          <h1>
            Every capsule,
            <br />
            <span className="hero-accent">accounted for.</span>
          </h1>
          <p className="hero-sub">
            PharmaFlow keeps inventory, prescriptions, and drug intelligence flowing
            through one system — so nothing expires unnoticed and nothing runs out
            unannounced.
          </p>
          <div className="hero-cta">
            <Link to="/signup" className="btn btn-primary">Get Started</Link>
            <a href="#how-it-works" className="btn btn-ghost">See how it works</a>
          </div>
          <div className="hero-stats">
            <div><strong>1,245+</strong><span>SKUs tracked live</span></div>
            <div><strong>99.2%</strong><span>Forecast accuracy</span></div>
            <div><strong>24/7</strong><span>Alert monitoring</span></div>
          </div>
        </div>

        <div className="hero-art">
          <img src={logo} alt="" className="hero-capsule" />
        </div>
      </header>

      <div className="capsule-divider section-divider"><span className="pip" /></div>

      <section id="features" className="features">
        <div className="section-head">
          <span className="eyebrow">Blister pack / 05 modules</span>
          <h2>Everything dispensed from one system</h2>
        </div>
        <div className="blister-grid">
          {FEATURES.map((f) => (
            <div className="blister-cell" key={f.code}>
              <span className="blister-code">{f.code}</span>
              <h3>{f.title}</h3>
              <p>{f.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="how-it-works" className="how">
        <div className="section-head">
          <span className="eyebrow">Dosage / three steps</span>
          <h2>How it works</h2>
        </div>
        <div className="steps">
          {STEPS.map((s, i) => (
            <div className="step" key={s.n}>
              <div className="step-num">{s.n}</div>
              <div>
                <h3>{s.label}</h3>
                <p>{s.text}</p>
              </div>
              {i < STEPS.length - 1 && <div className="step-connector" />}
            </div>
          ))}
        </div>
      </section>

      <section id="benefits" className="benefits">
        <div className="benefits-card">
          <div>
            <span className="eyebrow">Why teams switch</span>
            <h2>Less firefighting. More foresight.</h2>
            <p className="hero-sub">
              Pharmacists spend hours reconciling stock sheets and chasing expiries.
              PharmaFlow's fusion of computer-vision scanning and predictive alerts
              turns that into a five-minute morning check.
            </p>
          </div>
          <ul className="benefits-list">
            <li><span>—</span> Cuts manual stock audits by up to 70%</li>
            <li><span>—</span> Flags expiring batches 30 days out</li>
            <li><span>—</span> Single dashboard for pharmacists, doctors &amp; admins</li>
            <li><span>—</span> Built to run alongside your existing POS</li>
          </ul>
        </div>
      </section>

      <footer className="footer">
        <div className="footer-brand">
          <img src={logo} alt="PharmaFlow" className="nav-logo" />
          <span>PharmaFlow</span>
        </div>
        <p>© {new Date().getFullYear()} PharmaFlow. AI-powered pharmaceutical management.</p>
      </footer>
    </div>
  )
}
