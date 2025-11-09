import React, { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { supabase } from '../lib/supabase'

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
    <div className="min-h-screen flex items-center justify-center px-4 py-12 bg-gray-50">
      <form
        className="mx-auto w-full max-w-sm bg-white text-gray-900 rounded-lg shadow-lg p-8 flex flex-col gap-6"
        onSubmit={handleSubmit}
        style={{ maxWidth: 480, rowGap: '1.5rem' }}
      >
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-gradient-to-br from-indigo-500 to-purple-500 rounded-md shadow-md" />
          <div>
            <h2 className="text-2xl font-semibold">Welcome back</h2>
            <p className="text-sm text-gray-500">Sign in to your account</p>
          </div>
        </div>

        {error && <div className="bg-red-50 text-red-700 p-2 rounded">{error}</div>}

        <label className="flex flex-col text-sm">
          <span className="text-gray-600">Email</span>
          <Input
            className="mt-1"
            type="email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            aria-label="Email"
          />
        </label>

        <label className="flex flex-col text-sm">
          <span className="text-gray-600">Password</span>
          <Input
            className="mt-1"
            type="password"
            value={password}
            onChange={e => setPassword(e.target.value)}
            required
            aria-label="Password"
          />
        </label>

        <Button className="w-full" type="submit" disabled={loading} size="lg">
          {loading ? 'Signing in...' : 'Sign in'}
        </Button>

        <p className="text-center text-sm">
          Don't have an account?{' '}
          <Button asChild size="sm">
            <Link to="/signup">Sign up</Link>
          </Button>
        </p>
      </form>
    </div>
  )
}

export default Login
