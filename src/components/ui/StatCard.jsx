import { Card } from './Card'

export function StatCard({ icon: Icon, label, value, detail }) {
  return <Card className="p-4">
    <div className="flex items-start justify-between gap-3">
      <div><p className="text-xs font-medium text-muted">{label}</p><p className="mt-1 text-2xl font-bold tracking-tight">{value}</p></div>
      {Icon && <span className="grid size-9 place-items-center rounded-xl bg-brand/10 text-brand"><Icon size={18} /></span>}
    </div>
    {detail && <p className="mt-2 text-xs text-muted">{detail}</p>}
  </Card>
}
