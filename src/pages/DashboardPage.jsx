import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { ArrowRight, Award, CheckCircle2, ChevronRight, Flame, GitCommitHorizontal, Medal, Share2, ShieldCheck } from 'lucide-react'
import { achievements, challengeProgress, currentStreak, recentActivity, streakCareMessage, studentProfile, studentStanding, todaysTask } from '../data/mockData'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { ProgressBar } from '../components/ui/ProgressBar'
import { SectionTitle } from '../components/ui/SectionTitle'

export function DashboardPage() {
  return <div className="pt-3 sm:pt-6">
    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.25 }} className="flex items-start justify-between gap-4">
      <div><p className="text-sm font-medium text-muted">Tuesday, 12 August</p><h1 className="mt-1 text-3xl font-bold tracking-tight">Good evening, {studentProfile.name.split(' ')[0]}.</h1><p className="mt-1 text-sm text-muted">{studentProfile.cohort}</p></div>
      <div className="grid size-11 shrink-0 place-items-center rounded-2xl bg-violet-500 text-sm font-bold text-white shadow-sm">{studentProfile.avatar}</div>
    </motion.div>

    <motion.section initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.08, duration: 0.25 }} className="relative mt-7 overflow-hidden rounded-[1.6rem] bg-ink p-5 text-white">
      <div className="absolute -right-5 -top-7 size-32 rounded-full border-[18px] border-brand/35" />
      <div className="relative flex items-start justify-between"><div><p className="text-sm text-white/65">Current streak</p><div className="mt-1 flex items-end gap-2"><span className="text-5xl font-bold tracking-[-0.06em]">{currentStreak.days}</span><span className="mb-1.5 text-base font-semibold text-amber-200">days</span></div></div><span className="grid size-11 place-items-center rounded-2xl bg-amber-300 text-ink"><Flame size={23} fill="currentColor" /></span></div>
      <p className="relative mt-4 max-w-xs text-sm leading-6 text-white/70">{currentStreak.message} Your best is {currentStreak.best} days.</p>
      <div className="relative mt-5 flex items-center gap-1.5">{Array.from({ length: 7 }, (_, index) => <span key={index} className={`grid size-8 place-items-center rounded-lg text-xs font-bold ${index < 5 ? 'bg-amber-200 text-ink' : index === 5 ? 'bg-brand text-white ring-2 ring-white/40' : 'bg-white/10 text-white/50'}`}>{index < 5 ? <CheckCircle2 size={14} /> : index + 1}</span>)}</div>
    </motion.section>

    <section className="mt-8"><SectionTitle eyebrow="Today’s build" title={`Day ${todaysTask.day}: ${todaysTask.title}`} /><Card className="border-l-4 border-l-brand p-5"><div className="flex items-center justify-between gap-3"><Badge tone="brand">{todaysTask.category}</Badge><span className="text-xs font-semibold text-muted">{todaysTask.duration}</span></div><p className="mt-4 text-sm leading-6 text-muted">{todaysTask.description}</p><div className="mt-5 rounded-xl bg-stone-50 px-3 py-2.5 text-sm text-muted"><span className="font-bold text-ink">Today’s proof:</span> one GitHub commit + one LinkedIn reflection</div><Button to="/day/12" className="mt-5 w-full">Continue day {todaysTask.day} <ArrowRight size={17} /></Button></Card></section>

    <section className="mt-9"><SectionTitle eyebrow="Your path" title="60 days of visible progress" /><div className="rounded-[1.5rem] bg-[#f2e7da] p-5"><div className="flex items-end justify-between gap-3"><div><p className="text-sm text-muted">Challenge completion</p><p className="mt-1 text-3xl font-bold tracking-tight">Day {challengeProgress.currentDay} <span className="text-base font-medium text-muted">of {challengeProgress.totalDays}</span></p></div><span className="rounded-xl bg-white px-2.5 py-1.5 text-sm font-bold text-brand">{challengeProgress.percentage}%</span></div><ProgressBar className="mt-5" value={challengeProgress.percentage} /><p className="mt-3 text-sm text-muted"><span className="font-semibold text-ink">{challengeProgress.completedDays} builds complete.</span> Next: {challengeProgress.nextMilestone}.</p></div></section>

    <section className="mt-9 grid gap-4 sm:grid-cols-2"><div className="min-w-0"><SectionTitle eyebrow="You’re rising" title="Your standing" /><Card className="bg-white"><div className="flex items-center gap-4"><span className="grid size-11 place-items-center rounded-2xl bg-violet-100 text-violet-700"><Medal size={22} /></span><div><p className="text-2xl font-bold tracking-tight">#{studentStanding.rank} <span className="text-sm font-medium text-muted">of {studentStanding.totalStudents}</span></p><p className="mt-0.5 text-sm text-success">↑ {studentStanding.change} places this week · top {100 - studentStanding.percentile}%</p></div></div></Card></div><div className="min-w-0"><SectionTitle eyebrow="Unlocked" title="Achievements" /><Card className="p-4"><div className="flex gap-2 overflow-x-auto pb-1">{achievements.map((achievement) => <div key={achievement.id} className={`min-w-28 rounded-xl p-3 ${achievement.earned ? 'bg-amber-50' : 'bg-stone-50 opacity-60'}`}><Award size={18} className={achievement.earned ? 'text-amber-600' : 'text-muted'} /><p className="mt-2 text-xs font-bold">{achievement.title}</p><p className="mt-1 text-[11px] leading-4 text-muted">{achievement.description}</p></div>)}</div></Card></div></section>

    <section className="mt-9"><SectionTitle eyebrow="Your proof" title="Recent activity" /><div className="divide-y divide-stone-100 rounded-[1.5rem] bg-white px-5 shadow-sm ring-1 ring-black/5">{recentActivity.map((activity) => <article key={activity.id} className="flex gap-3 py-4"><span className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-xl bg-brand/10 text-brand"><GitCommitHorizontal size={17} /></span><div className="min-w-0 flex-1"><p className="text-sm font-semibold leading-5">{activity.title}</p><div className="mt-1.5 flex items-center gap-2 text-xs text-muted"><span>{activity.date}</span>{activity.proof.map((item) => <span key={item} className="inline-flex items-center gap-1"><span className="text-brand">{item === 'GitHub' ? <GitCommitHorizontal size={12} /> : <Share2 size={12} />}</span>{item}</span>)}</div></div></article>)}</div></section>

    <section className="mt-7 rounded-2xl border border-dashed border-stone-300 bg-white/60 p-4"><div className="flex gap-3"><span className="grid size-9 shrink-0 place-items-center rounded-xl bg-stone-100 text-muted"><ShieldCheck size={18} /></span><div><p className="text-sm font-bold">Streak care, not streak pressure</p><p className="mt-1 text-sm leading-5 text-muted">{streakCareMessage}</p></div></div></section>
    <Link to="/" className="mt-7 inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-muted hover:text-ink">Back to ABTalks <ChevronRight size={16} /></Link>
  </div>
}
