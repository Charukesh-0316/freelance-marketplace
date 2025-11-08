import React from 'react'
import './landing.css'

const Landing: React.FC = () => {
  return (
    <div className="landing-root">
      <header className="landing-header">
        <div className="container">
          <h1 className="brand">Freelance Marketplace</h1>
        </div>
      </header>

      <main className="landing-hero">
        <div className="container hero-inner">
          <div className="hero-copy">
            <h2>Find great freelance talent — or get hired</h2>
            <p>
              Post your project, hire trusted freelancers, and build the team you need.
              Designed for small teams and independent professionals.
            </p>
            {/* CTAs removed as requested */}
          </div>
          <div className="hero-visual">
            <div className="card">
              <h3>Top-rated professionals</h3>
              <p>Browse, interview, and hire skilled freelancers worldwide.</p>
            </div>
          </div>
        </div>
      </main>

      <section className="features container">
        <div className="feature">
          <h4>Secure payments</h4>
          <p>Payments and milestones are safe and easy.</p>
        </div>
        <div className="feature">
          <h4>Project tracking</h4>
          <p>Keep work organized with simple tools.</p>
        </div>
        <div className="feature">
          <h4>Global talent</h4>
          <p>Hire from a broad marketplace of specialists.</p>
        </div>
      </section>

      <footer className="landing-footer">
        <div className="container">© {new Date().getFullYear()} Freelance Marketplace</div>
      </footer>
    </div>
  )
}

export default Landing
