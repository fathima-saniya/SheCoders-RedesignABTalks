import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { ArrowUpRight, BookOpen } from 'lucide-react'
import { Button } from '../ui/Button'

export function AppShell({ children }) {
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen bg-canvas">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="grid size-9 place-items-center rounded-xl bg-brand text-white shadow-sm"><BookOpen size={19} /></span>
          ABTalks
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-1.5">
          {pathname === '/' && <a href="#how-it-works" className="hidden rounded-lg px-3 py-2 text-sm font-medium text-muted hover:text-ink sm:inline">How it works</a>}
          <NavLink to="/dashboard" active={pathname === '/dashboard'}>Progress</NavLink>
          {pathname === '/' && <Button to="/dashboard" className="rounded-lg px-3 text-xs sm:px-4 sm:text-sm">Start now <ArrowUpRight size={15} /></Button>}
        </nav>
      </header>
      <motion.main
        key={pathname}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.2 }}
        className="mx-auto w-full max-w-5xl px-5 pb-12 sm:px-8"
      >
        {children}
      </motion.main>
    </div>
  )
}

function NavLink({ to, active, children }) {
  return <Link to={to} className={`min-h-11 inline-flex items-center rounded-lg px-3 py-2 text-sm font-medium ${active ? 'bg-ink text-white' : 'text-muted hover:text-ink'}`}>{children}</Link>
}
