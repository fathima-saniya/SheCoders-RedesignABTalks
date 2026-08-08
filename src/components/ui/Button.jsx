import { Link } from 'react-router-dom'

const styles = {
  primary: 'bg-brand text-white hover:bg-brand-dark shadow-sm',
  secondary: 'bg-white text-ink ring-1 ring-black/5 hover:bg-stone-50',
  ghost: 'bg-transparent text-ink hover:bg-black/5',
}

export function Button({ variant = 'primary', className = '', to, children, ...props }) {
  const base = `inline-flex min-h-11 items-center justify-center gap-2 rounded-xl px-4 text-sm font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-brand focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-60 ${styles[variant]} ${className}`
  if (to) return <Link to={to} className={base}>{children}</Link>
  return <button className={base} {...props}>{children}</button>
}
