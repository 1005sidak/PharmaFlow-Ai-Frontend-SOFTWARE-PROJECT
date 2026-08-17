import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Auth.css'

const ROLES = ['Pharmacist', 'Doctor', 'Admin', 'Patient']

export default function Signup() {
  const navigate = useNavigate()
  const [form, setForm] = useState({
    name: '', email: '', phone: '', password: '', confirmPassword: '', role: ROLES[0]
  })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    if (form.password !== form.confirmPassword) {
      setError('Passwords do not match.')
      return
    }
    setLoading(true)
    try {
      const res = await fetch('/api/auth/signup/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Could not create account')
      navigate('/login')
    } catch (err) {
      setError(err.message || 'Something went wrong. Try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-page">
      <div className="auth-side">
        <img src={logo} alt="" className="auth-capsule" />
        <blockquote>
          "Set up once, dispense with confidence."
          <span>— onboarding takes under three minutes</span>
        </blockquote>
      </div>

      <div className="auth-form-wrap">
        <Link to="/" className="auth-brand">
          <img src={logo} alt="PharmaFlow" />
          <span>PharmaFlow</span>
        </Link>

        <div className="auth-card card auth-card-wide">
          <span className="eyebrow">Create account</span>
          <h1>Join PharmaFlow</h1>
          <p className="auth-sub">Set up your workspace in a couple of steps.</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="field">
              <label htmlFor="name">Full name</label>
              <input id="name" name="name" required placeholder="Jordan Rae"
                value={form.name} onChange={handleChange} />
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="email">Email</label>
                <input id="email" name="email" type="email" required placeholder="you@pharmacy.com"
                  value={form.email} onChange={handleChange} />
              </div>
              <div className="field">
                <label htmlFor="phone">Phone</label>
                <input id="phone" name="phone" type="tel" required placeholder="+91 98765 43210"
                  value={form.phone} onChange={handleChange} />
              </div>
            </div>

            <div className="field-row">
              <div className="field">
                <label htmlFor="password">Password</label>
                <input id="password" name="password" type="password" required placeholder="••••••••"
                  value={form.password} onChange={handleChange} />
              </div>
              <div className="field">
                <label htmlFor="confirmPassword">Confirm password</label>
                <input id="confirmPassword" name="confirmPassword" type="password" required placeholder="••••••••"
                  value={form.confirmPassword} onChange={handleChange} />
              </div>
            </div>

            <div className="field">
              <label htmlFor="role">Role</label>
              <select id="role" name="role" value={form.role} onChange={handleChange}>
                {ROLES.map((r) => <option key={r} value={r}>{r}</option>)}
              </select>
            </div>

            {error && <p className="auth-error">{error}</p>}

            <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
              {loading ? 'Creating account…' : 'Sign Up'}
            </button>
          </form>

          <div className="auth-links">
            <span>Already have an account? <Link to="/login">Login</Link></span>
          </div>
        </div>
      </div>
    </div>
  )
}
