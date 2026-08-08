export function Card({ className = '', children }) {
  return <section className={`rounded-card bg-surface p-5 shadow-sm ring-1 ring-black/5 ${className}`}>{children}</section>
}
