import { NavLink, Outlet, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import './DashboardLayout.css'

const NAV = [
  { to: '/app', label: 'Dashboard', end: true, icon: '⌂' },
  { to: '/app/medicines', label: 'Medicines', icon: '⬡' },
  { to: '/app/inventory', label: 'Inventory', icon: '▤' },
  { to: '/app/sales', label: 'Sales & Billing', icon: '▣' },
  { to: '/app/purchases', label: 'Purchasing', icon: '▥' },
  { to: '/app/alerts', label: 'Alerts', icon: '◔' },
  { to: '/app/analytics', label: 'Analytics', icon: '◒' },
  { to: '/app/expiry-risk', label: 'Expiry Risk', icon: '✦' }
]

export default function DashboardLayout() {
  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('pf_token')
    navigate('/login')
  }

  return (
    <div className="shell">
      <aside className="sidebar">
        <div className="sidebar-brand">
          <img src={logo} alt="PharmaFlow" />
          <span>PharmaFlow</span>
        </div>

        <nav className="sidebar-nav">
          {NAV.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => 'sidebar-link' + (isActive ? ' active' : '')}
            >
              <span className="sidebar-icon">{item.icon}</span>
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="sidebar-footer">
          <NavLink to="/app/settings" className={({ isActive }) => 'sidebar-link' + (isActive ? ' active' : '')}>
            <span className="sidebar-icon">⚙</span> Settings
          </NavLink>
          <button className="sidebar-link sidebar-logout" onClick={handleLogout}>
            <span className="sidebar-icon">⏻</span> Logout
          </button>
        </div>
      </aside>

      <div className="shell-main">
        <header className="topbar">
          <div className="topbar-search">
            <span>🔍</span>
            <input type="text" placeholder="Search medicines, batches, prescriptions…" />
          </div>
          <div className="topbar-actions">
            <button className="topbar-icon-btn" aria-label="Notifications">🔔<span className="dot" /></button>
            <div className="topbar-profile">
              <div className="avatar">JR</div>
              <div className="topbar-profile-meta">
                <strong>Jordan Rae</strong>
                <span>Pharmacist</span>
              </div>
            </div>
          </div>
        </header>

        <main className="shell-content">
          <Outlet />
        </main>
      </div>
    </div>
  )
}
