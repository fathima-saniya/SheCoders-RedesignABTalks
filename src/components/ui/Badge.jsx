const styles = {
  brand: 'bg-brand/10 text-brand-dark',
  success: 'bg-emerald-50 text-success',
  neutral: 'bg-stone-100 text-muted',
  accent: 'bg-amber-100 text-amber-800',
}

export function Badge({ tone = 'neutral', children }) {
  return <span className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold ${styles[tone]}`}>{children}</span>
}
