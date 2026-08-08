export function ProgressBar({ value, label, className = '' }) {
  const percentage = Math.max(0, Math.min(100, value))
  return <div className={className}>
    {label && <div className="mb-2 flex justify-between text-sm"><span className="text-muted">{label}</span><span className="font-semibold">{percentage}%</span></div>}
    <div className="h-2.5 overflow-hidden rounded-full bg-stone-100">
      <div className="h-full rounded-full bg-brand transition-all" style={{ width: `${percentage}%` }} />
    </div>
  </div>
}
