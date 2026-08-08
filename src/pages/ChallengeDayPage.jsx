import { CheckCircle2, Clock3 } from 'lucide-react'
import { challengeProgress, todaysTask } from '../data/mockData'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { ProgressBar } from '../components/ui/ProgressBar'

export function ChallengeDayPage() {
  return <div className="pt-5"><Badge tone="brand">Challenge day {todaysTask.day}</Badge><h1 className="mt-3 text-3xl font-bold tracking-tight">{todaysTask.title}</h1><p className="mt-3 max-w-xl leading-7 text-muted">{todaysTask.description}</p><Card className="mt-7"><div className="flex items-center gap-2 text-sm text-muted"><Clock3 size={16} /> {todaysTask.duration} · {todaysTask.category}</div><div className="mt-6 rounded-xl bg-stone-50 p-4 text-sm text-muted">Task content will be added when the full challenge-day screen is built.</div><Button className="mt-5 w-full"><CheckCircle2 size={17} /> Mark as complete</Button></Card><ProgressBar className="mt-7" label={`Day ${challengeProgress.currentDay} of ${challengeProgress.totalDays}`} value={challengeProgress.percentage} /></div>
}
