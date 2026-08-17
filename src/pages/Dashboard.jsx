import { AreaChart, Area, XAxis, YAxis, Tooltip, ResponsiveContainer, CartesianGrid } from 'recharts'
import './Dashboard.css'

const STATS = [
  { label: 'Total Medicines', value: '1,245', trend: '+4.2%', tone: 'good', icon: '⬡' },
  { label: 'Low Stock', value: '38', trend: '+6 today', tone: 'warn', icon: '▤' },
  { label: 'Expiring Soon', value: '12', trend: 'within 30 days', tone: 'bad', icon: '◔' },
  { label: "Today's Transactions", value: '204', trend: '+18 vs yesterday', tone: 'good', icon: '✎' }
]

const CHART_DATA = [
  { day: 'Mon', stock: 1120 }, { day: 'Tue', stock: 1180 }, { day: 'Wed', stock: 1090 },
  { day: 'Thu', stock: 1230 }, { day: 'Fri', stock: 1245 }, { day: 'Sat', stock: 1198 },
  { day: 'Sun', stock: 1245 }
]

const ACTIVITIES = [
  { text: 'Paracetamol 500mg — 200 units added', time: '10 min ago', type: 'add' },
  { text: 'Prescription #4821 processed for R. Mehta', time: '32 min ago', type: 'rx' },
  { text: 'Amoxicillin 250mg — low stock alert triggered', time: '1 hr ago', type: 'alert' },
  { text: 'Batch #B-1092 flagged for expiry in 14 days', time: '3 hr ago', type: 'alert' },
  { text: 'Insulin Glargine — 60 units added', time: '5 hr ago', type: 'add' }
]

const QUICK_ACTIONS = [
  { label: 'Add Medicine', icon: '+' },
  { label: 'Scan Medicine', icon: '⌕' },
  { label: 'Check Inventory', icon: '▤' },
  { label: 'Generate Report', icon: '▥' }
]

export default function Dashboard() {
  return (
    <div className="dash">
      <div className="dash-head">
        <div>
          <span className="eyebrow">Overview / today</span>
          <h1>Good morning, Jordan 👋</h1>
        </div>
        <div className="quick-actions">
          {QUICK_ACTIONS.map((a) => (
            <button className="btn btn-ghost qa-btn" key={a.label}>
              <span className="qa-icon">{a.icon}</span> {a.label}
            </button>
          ))}
        </div>
      </div>

      <div className="stat-grid">
        {STATS.map((s) => (
          <div className="stat-card card" key={s.label}>
            <div className="stat-top">
              <span className="stat-icon">{s.icon}</span>
              <span className={`stat-trend tone-${s.tone}`}>{s.trend}</span>
            </div>
            <strong className="stat-value">{s.value}</strong>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="dash-grid">
        <div className="card panel">
          <div className="panel-head">
            <div>
              <span className="eyebrow">Inventory overview</span>
              <h3>Stock levels — last 7 days</h3>
            </div>
          </div>
          <ResponsiveContainer width="100%" height={260}>
            <AreaChart data={CHART_DATA} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="stockFill" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#8f1b3f" stopOpacity={0.35} />
                  <stop offset="100%" stopColor="#8f1b3f" stopOpacity={0} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="#6d13301f" vertical={false} />
              <XAxis dataKey="day" tick={{ fontSize: 12, fill: '#6b4a55' }} axisLine={false} tickLine={false} />
              <YAxis tick={{ fontSize: 12, fill: '#6b4a55' }} axisLine={false} tickLine={false} width={44} />
              <Tooltip contentStyle={{ borderRadius: 10, border: '1px solid #6d133024', fontSize: 13 }} />
              <Area type="monotone" dataKey="stock" stroke="#8f1b3f" strokeWidth={2.5} fill="url(#stockFill)" />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        <div className="card panel">
          <div className="panel-head">
            <span className="eyebrow">Live feed</span>
            <h3>Recent activity</h3>
          </div>
          <ul className="activity-list">
            {ACTIVITIES.map((a, i) => (
              <li key={i} className={`activity-item type-${a.type}`}>
                <span className="activity-dot" />
                <div>
                  <p>{a.text}</p>
                  <span className="activity-time">{a.time}</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  )
}
