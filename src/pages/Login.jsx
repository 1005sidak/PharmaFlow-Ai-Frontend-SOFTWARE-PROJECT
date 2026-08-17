import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import logo from '../assets/logo.png'
import './Auth.css'

export default function Login() {
  const navigate = useNavigate()
  const [form, setForm] = useState({ email: '', password: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setLoading(true)
    try {
      // Django backend endpoint — wire up to your auth view / SimpleJWT / DRF token route
      const res = await fetch('/api/auth/login/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(form)
      })
      if (!res.ok) throw new Error('Invalid email or password')
      const data = await res.json()
      localStorage.setItem('pf_token', data.token ?? '')
      navigate('/app')
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
          "Every capsule, accounted for."
          <span>— the PharmaFlow dashboard, five minutes a day</span>
        </blockquote>
      </div>

      <div className="auth-form-wrap">
        <Link to="/" className="auth-brand">
          <img src={logo} alt="PharmaFlow" />
          <span>PharmaFlow</span>
        </Link>

        <div className="auth-card card">
          <span className="eyebrow">Sign in</span>
          <h1>Welcome back</h1>
          <p className="auth-sub">Enter your credentials to reach the dashboard.</p>

          <form onSubmit={handleSubmit} className="auth-form">
            <div className="field">
              <label htmlFor="email">Email</label>
              <input
                id="email" name="email" type="email" required
                placeholder="you@pharmacy.com"
                value={form.email} onChange={handleChange}
              />
            </div>
            <div className="field">
              <label htmlFor="password">Password</label>
              <input
                id="password" name="password" type="password" required
                placeholder="••••••••"
                value={form.password} onChange={handleChange}
              />
            </div>

            {error && <p className="auth-error">{error}</p>}

            <button type="submit" className="btn btn-primary btn-block" disabled={loading}>
              {loading ? 'Signing in…' : 'Login'}
            </button>
          </form>

          <div className="auth-links">
            <a href="#forgot">Forgot password?</a>
            <span>Don't have an account? <Link to="/signup">Sign up</Link></span>
          </div>
        </div>
      </div>
    </div>
  )
}
