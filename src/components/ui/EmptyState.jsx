import { Inbox } from 'lucide-react'

export function EmptyState({ icon: Icon = Inbox, title, description, action }) {
  return <div className="rounded-card border border-dashed border-stone-300 bg-white/50 p-8 text-center">
    <span className="mx-auto grid size-11 place-items-center rounded-full bg-stone-100 text-muted"><Icon size={21} /></span>
    <h3 className="mt-3 font-bold">{title}</h3>
    {description && <p className="mx-auto mt-1 max-w-xs text-sm leading-6 text-muted">{description}</p>}
    {action && <div className="mt-4">{action}</div>}
  </div>
}
