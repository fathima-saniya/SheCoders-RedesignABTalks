import { motion } from 'framer-motion'
import { Link, useLocation } from 'react-router-dom'
import { BookOpen } from 'lucide-react'

export function AppShell({ children }) {
  const { pathname } = useLocation()

  return (
    <div className="min-h-screen bg-canvas">
      <header className="mx-auto flex w-full max-w-5xl items-center justify-between px-5 py-5 sm:px-8">
        <Link to="/" className="flex items-center gap-2 text-lg font-bold tracking-tight">
          <span className="grid size-9 place-items-center rounded-xl bg-brand text-white"><BookOpen size={19} /></span>
          ABTalks
        </Link>
        <nav aria-label="Main navigation" className="flex items-center gap-1 rounded-full bg-white p-1 text-sm shadow-sm">
          <NavLink to="/" active={pathname === '/'}>Home</NavLink>
          <NavLink to="/dashboard" active={pathname === '/dashboard'}>Progress</NavLink>
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
  return <Link to={to} className={`rounded-full px-3 py-1.5 ${active ? 'bg-ink text-white' : 'text-muted hover:text-ink'}`}>{children}</Link>
}
