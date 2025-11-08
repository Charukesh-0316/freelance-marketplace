import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { supabase } from '../lib/supabase'
import './auth.css'

const Login: React.FC = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const navigate = useNavigate()

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setLoading(true)
    setError(null)
    try {
      const res = await supabase.auth.signInWithPassword({ email, password })
      // log full response to help debugging in dev tools
      // (don't keep verbose logging in production)
      // eslint-disable-next-line no-console
      console.debug('supabase signIn response', res)
      if (res.error) {
        // For common cases (invalid credentials) give a small hint
        const msg = res.error.message || 'Invalid login credentials'
        setError(msg)
      } else {
        // Signed in — navigate to landing UI
        navigate('/landing')
      }
    } catch (err: any) {
      // eslint-disable-next-line no-console
      console.error('signIn error', err)
      setError(err?.message ?? 'An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="auth-root">
      <form className="auth-card" onSubmit={handleSubmit}>
        <h2>Log in</h2>
        {error && <div className="auth-error">{error}</div>}
        <label>
          Email
          <input type="email" value={email} onChange={e => setEmail(e.target.value)} required />
        </label>
        <label>
          Password
          <input type="password" value={password} onChange={e => setPassword(e.target.value)} required />
        </label>
        <button type="submit" disabled={loading}>{loading ? 'Signing in...' : 'Sign in'}</button>
        <p>
          Don't have an account? <Link to="/signup">Sign up</Link>
        </p>
      </form>
    </div>
  )
}

export default Login
