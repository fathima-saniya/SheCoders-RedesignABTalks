export function SectionTitle({ eyebrow, title, action }) {
  return <div className="mb-4 flex items-end justify-between gap-4">
    <div>{eyebrow && <p className="mb-1 text-xs font-bold uppercase tracking-wider text-brand">{eyebrow}</p>}<h2 className="text-xl font-bold tracking-tight">{title}</h2></div>
    {action}
  </div>
}
