import React from 'react'
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import { Button } from '@/components/ui/button'
import Home from './home/Home'
import Login from './pages/Login'
import Signup from './pages/Signup'

const App: React.FC = () => {
  return (
    <BrowserRouter>
      {/* Quick shadcn Button smoke-test */}
      <div className="text-center py-4">
        <Button>shadcn Button</Button>
      </div>
      <nav style={{ padding: 12 }}>
        <Link to="/">Home</Link> | <Link to="/login">Log in</Link> | <Link to="/signup">Sign up</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
