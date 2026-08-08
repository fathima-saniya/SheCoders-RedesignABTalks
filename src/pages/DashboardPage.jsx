import { Flame, Trophy, Users } from 'lucide-react'
import { currentStreak, challengeProgress, studentProfile, studentStanding, todaysTask } from '../data/mockData'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { ProgressBar } from '../components/ui/ProgressBar'
import { SectionTitle } from '../components/ui/SectionTitle'
import { StatCard } from '../components/ui/StatCard'

export function DashboardPage() {
  return <div className="pt-5">
    <Badge tone="brand">{studentProfile.cohort}</Badge>
    <h1 className="mt-3 text-3xl font-bold tracking-tight">Hi, {studentProfile.name.split(' ')[0]}.</h1>
    <p className="mt-1 text-muted">Your dashboard foundation is connected to local mock data.</p>
    <div className="mt-7 grid grid-cols-2 gap-3 sm:grid-cols-3"><StatCard icon={Flame} label="Current streak" value={`${currentStreak.days} days`} detail={`Best: ${currentStreak.best} days`} /><StatCard icon={Trophy} label="Challenge" value={`Day ${challengeProgress.currentDay}`} detail={`${challengeProgress.completedDays} completed`} /><StatCard icon={Users} label="Standing" value={`#${studentStanding.rank}`} detail={`of ${studentStanding.totalStudents} learners`} /></div>
    <Card className="mt-7"><SectionTitle eyebrow="Up next" title={todaysTask.title} /><p className="text-sm leading-6 text-muted">Day {todaysTask.day} · {todaysTask.category} · {todaysTask.duration}</p><ProgressBar className="mt-5" label="Challenge progress" value={challengeProgress.percentage} /><Button to="/day/12" className="mt-5 w-full">View day 12</Button></Card>
  </div>
}
