import React from 'react'

const Landing: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <header className="py-6">
        <div className="max-w-5xl mx-auto px-4">
          <h1 className="text-2xl font-semibold">Freelance Marketplace</h1>
        </div>
      </header>

      <main className="py-16 flex-1">
        <div className="max-w-5xl mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h2 className="text-3xl font-bold mb-4">Find great freelance talent — or get hired</h2>
            <p className="text-slate-300 mb-6">Post your project, hire trusted freelancers, and build the team you need. Designed for small teams and independent professionals.</p>
          </div>
          <div className="w-full md:w-80">
            <div className="bg-white/5 p-5 rounded-lg">
              <h3 className="text-lg font-medium">Top-rated professionals</h3>
              <p className="text-slate-300 mt-2">Browse, interview, and hire skilled freelancers worldwide.</p>
            </div>
          </div>
        </div>
      </main>

      <section className="py-10 bg-transparent">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 p-4 rounded"> 
            <h4 className="font-semibold">Secure payments</h4>
            <p className="text-slate-300 text-sm">Payments and milestones are safe and easy.</p>
          </div>
          <div className="bg-white/5 p-4 rounded"> 
            <h4 className="font-semibold">Project tracking</h4>
            <p className="text-slate-300 text-sm">Keep work organized with simple tools.</p>
          </div>
          <div className="bg-white/5 p-4 rounded"> 
            <h4 className="font-semibold">Global talent</h4>
            <p className="text-slate-300 text-sm">Hire from a broad marketplace of specialists.</p>
          </div>
        </div>
      </section>

      <footer className="py-6">
        <div className="max-w-5xl mx-auto px-4 text-slate-400">© {new Date().getFullYear()} Freelance Marketplace</div>
      </footer>
    </div>
  )
}

export default Landing
