import { useState } from 'react'
import { Sparkles, Atom, Palette, Zap, CheckCircle2 } from 'lucide-react'

export default function App() {
  const [count, setCount] = useState(0)

  const features = [
    {
      title: 'React 19',
      description: 'The latest release of React with enhanced concurrent rendering & compiler optimizations.',
      icon: Atom,
      color: 'from-cyan-500 to-blue-600',
    },
    {
      title: 'Tailwind CSS v4',
      description: 'Ultra-fast, zero-configuration utility-first CSS engine built directly into Vite.',
      icon: Palette,
      color: 'from-teal-400 to-emerald-600',
    },
    {
      title: 'Vite Speed',
      description: 'Instant Server Start and lightning-fast Hot Module Replacement (HMR).',
      icon: Zap,
      color: 'from-amber-400 to-orange-600',
    },
  ]

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500 selection:text-white">
      {/* Background Glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden -z-10">
        <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[700px] h-[450px] bg-gradient-to-tr from-cyan-600/20 via-indigo-600/20 to-purple-600/20 blur-3xl rounded-full" />
      </div>

      {/* Navigation */}
      <header className="border-b border-slate-800/80 backdrop-blur-md sticky top-0 z-50 bg-slate-950/70">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-gradient-to-tr from-cyan-500 to-blue-600 text-white shadow-lg shadow-cyan-500/25">
              <Sparkles className="w-5 h-5" />
            </div>
            <span className="font-bold text-lg tracking-tight bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent">
              React + Tailwind CSS
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
              Tailwind v4 Ready
            </span>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 max-w-5xl mx-auto px-4 py-16 flex flex-col items-center text-center">
        {/* Hero Badge */}
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-900 border border-slate-800 text-slate-400 text-xs font-medium mb-8 shadow-sm">
          <CheckCircle2 className="w-4 h-4 text-cyan-400" />
          <span>Project setup completed successfully</span>
        </div>

        {/* Hero Title */}
        <h1 className="text-4xl sm:text-6xl font-extrabold tracking-tight max-w-3xl leading-[1.15]">
          Build modern apps with{' '}
          <span className="bg-gradient-to-r from-cyan-400 via-sky-400 to-blue-500 bg-clip-text text-transparent">
            React
          </span>{' '}
          &{' '}
          <span className="bg-gradient-to-r from-teal-400 to-emerald-400 bg-clip-text text-transparent">
            Tailwind CSS
          </span>
        </h1>

        <p className="mt-6 text-lg text-slate-400 max-w-2xl leading-relaxed">
          Pre-configured with Vite, React 19, and the next-generation Tailwind CSS engine for rapid web development.
        </p>

        {/* Interactive Interactive Counter */}
        <div className="mt-10 p-6 rounded-2xl bg-slate-900/60 border border-slate-800/80 backdrop-blur-sm max-w-md w-full shadow-xl">
          <p className="text-sm font-medium text-slate-400 mb-4">Interactive State Test</p>
          <div className="flex items-center justify-center gap-4">
            <button
              onClick={() => setCount((prev) => prev + 1)}
              className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 text-white font-semibold transition-all duration-200 shadow-md shadow-cyan-500/20 hover:shadow-cyan-500/30 active:scale-95 cursor-pointer"
            >
              Count is {count}
            </button>
            <button
              onClick={() => setCount(0)}
              className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-medium transition-colors text-sm cursor-pointer"
            >
              Reset
            </button>
          </div>
          <p className="mt-3 text-xs text-slate-500">
            Edit <code className="text-cyan-400 bg-slate-800/80 px-1.5 py-0.5 rounded font-mono">src/App.jsx</code> to start building!
          </p>
        </div>

        {/* Feature Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16 w-full text-left">
          {features.map((item) => {
            const Icon = item.icon
            return (
              <div
                key={item.title}
                className="group relative p-6 rounded-2xl bg-slate-900/40 border border-slate-800/70 hover:border-slate-700 hover:bg-slate-900/80 transition-all duration-300"
              >
                <div className={`w-12 h-12 rounded-xl bg-gradient-to-tr ${item.color} flex items-center justify-center text-white mb-5 shadow-lg`}>
                  <Icon className="w-6 h-6" />
                </div>
                <h3 className="text-lg font-semibold text-white group-hover:text-cyan-300 transition-colors">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm text-slate-400 leading-relaxed">
                  {item.description}
                </p>
              </div>
            )
          })}
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-900 py-6 text-center text-xs text-slate-500">
        <p>Ready to customize. Happy hacking! 🚀</p>
      </footer>
    </div>
  )
}
