import { useState } from 'react'
import { motion } from 'framer-motion'
import { ArrowLeft, ArrowRight, Check, CheckCircle2, Circle, Code2, Flame, GitCommitHorizontal, Link as LinkIcon, Send, ShieldCheck, Share2 } from 'lucide-react'
import { Link } from 'react-router-dom'
import { challengeProgress, currentStreak, day12Brief, todaysTask } from '../data/mockData'
import { Badge } from '../components/ui/Badge'
import { Button } from '../components/ui/Button'
import { Card } from '../components/ui/Card'
import { ProgressBar } from '../components/ui/ProgressBar'
import { SectionTitle } from '../components/ui/SectionTitle'

const initialForm = { repository: '', commit: '', linkedin: '' }

export function ChallengeDayPage() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [isSubmitted, setIsSubmitted] = useState(false)
  const isReady = Object.values(form).every((value) => value.trim().length > 0)

  function updateField(event) {
    const { name, value } = event.target
    setForm((current) => ({ ...current, [name]: value }))
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }))
  }

  function handleSubmit(event) {
    event.preventDefault()
    if (isSubmitted) return
    const nextErrors = {}
    if (!form.repository.trim()) nextErrors.repository = 'Add the repository URL where today’s work lives.'
    if (!form.commit.trim()) nextErrors.commit = 'Add a commit URL or the commit reference.'
    if (!form.linkedin.trim()) nextErrors.linkedin = 'Add the URL of your LinkedIn reflection.'
    if (Object.keys(nextErrors).length) { setErrors(nextErrors); return }
    setIsSubmitted(true)
  }

  return <div className="pb-5 pt-3 sm:pt-6">
    <Link to="/dashboard" className="inline-flex min-h-11 items-center gap-1 text-sm font-semibold text-muted hover:text-ink"><ArrowLeft size={17} /> Back to dashboard</Link>
    <header className="mt-4"><Badge tone="brand">Day {todaysTask.day} of {challengeProgress.totalDays}</Badge><h1 className="mt-3 text-3xl font-bold leading-tight tracking-tight">{todaysTask.title}</h1><p className="mt-3 max-w-xl leading-7 text-muted">Today, turn one thing you built into a story that shows how you think.</p><div className="mt-5 flex flex-wrap gap-2"><span className="inline-flex items-center gap-1.5 rounded-full bg-amber-100 px-3 py-1.5 text-xs font-bold text-amber-900"><Flame size={14} fill="currentColor" /> Day {currentStreak.days} streak</span><span className="inline-flex items-center gap-1.5 rounded-full bg-stone-100 px-3 py-1.5 text-xs font-bold text-muted">{challengeProgress.percentage}% of challenge complete</span></div></header>

    <section className="mt-8 rounded-[1.6rem] bg-ink p-5 text-white"><div className="flex items-start justify-between gap-5"><div><p className="text-xs font-bold uppercase tracking-[0.14em] text-amber-200">Today’s assignment</p><h2 className="mt-2 text-xl font-bold leading-7">Make your work easy to understand.</h2></div><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-brand"><Code2 size={20} /></span></div><p className="mt-4 text-sm leading-6 text-white/75">{day12Brief.goal}</p><p className="mt-4 border-t border-white/10 pt-4 text-sm leading-6 text-white/60">{day12Brief.prompt}</p></section>

    <section className="mt-9"><SectionTitle eyebrow="Build guidance" title="A clear finish line" /><div className="space-y-3">{day12Brief.checklist.map((item, index) => <div key={item} className="flex gap-3"><span className="grid size-7 shrink-0 place-items-center rounded-full bg-brand/10 text-xs font-bold text-brand">{index + 1}</span><p className="pt-0.5 text-sm leading-5 text-muted">{item}</p></div>)}</div></section>

    <section className="mt-9"><SectionTitle eyebrow="Proof of work" title="Submit your Day 12" /><p className="-mt-1 text-sm leading-6 text-muted">Your links create a record of what you built and what you learned. We don’t access your accounts.</p>{isSubmitted ? <SubmissionSuccess /> : <form onSubmit={handleSubmit} noValidate className="mt-5"><Card className="p-5"><div className="mb-5 flex items-center justify-between gap-4"><div><h3 className="font-bold">Submission links</h3><p className="mt-1 text-xs text-muted">All three proofs are required.</p></div><Badge tone={isReady ? 'success' : 'neutral'}>{isReady ? 'Ready to submit' : 'Not submitted'}</Badge></div><FormField label="GitHub repository URL" name="repository" type="url" value={form.repository} placeholder="github.com/aarohi/project" error={errors.repository} onChange={updateField} icon={GitCommitHorizontal} helper="Where the Day 12 work can be found." /><FormField label="GitHub commit URL or reference" name="commit" value={form.commit} placeholder="github.com/.../commit/a1b2c3d" error={errors.commit} onChange={updateField} icon={LinkIcon} helper="The commit that contains today’s update." /><FormField label="LinkedIn post URL" name="linkedin" type="url" value={form.linkedin} placeholder="linkedin.com/posts/your-reflection" error={errors.linkedin} onChange={updateField} icon={Share2} helper="Your public reflection on what you learned." /><Button type="submit" className="mt-2 w-full"><Send size={17} /> Submit Day {todaysTask.day}</Button></Card></form>}</section>

    <section className="mt-8 rounded-2xl border border-dashed border-stone-300 bg-white/60 p-4"><div className="flex gap-3"><span className="grid size-9 shrink-0 place-items-center rounded-xl bg-amber-100 text-amber-900"><Flame size={18} fill="currentColor" /></span><div><p className="text-sm font-bold">One more proof for your streak</p><p className="mt-1 text-sm leading-5 text-muted">Completing today keeps your 12-day rhythm moving and brings you to {challengeProgress.completedDays + 1} visible builds.</p></div></div></section>
    <div className="mt-7"><ProgressBar label={`Your 60-day journey · Day ${todaysTask.day}`} value={challengeProgress.percentage} /></div>
  </div>
}

function FormField({ label, name, type = 'text', value, placeholder, error, onChange, icon: Icon, helper }) {
  return <div className="mb-5"><label htmlFor={name} className="flex items-center gap-2 text-sm font-bold"><span className="text-brand"><Icon size={16} /></span>{label}</label><input id={name} name={name} type={type} value={value} onChange={onChange} placeholder={placeholder} aria-invalid={Boolean(error)} aria-describedby={`${name}-help ${error ? `${name}-error` : ''}`} className={`mt-2 min-h-12 w-full rounded-xl border bg-white px-3 text-sm text-ink outline-none transition placeholder:text-stone-400 focus:border-brand focus:ring-2 focus:ring-brand/20 ${error ? 'border-red-500' : 'border-stone-200'}`} /><p id={`${name}-help`} className="mt-1.5 text-xs leading-5 text-muted">{helper}</p>{error && <p id={`${name}-error`} role="alert" className="mt-1 text-xs font-medium text-red-600">{error}</p>}</div>
}

function SubmissionSuccess() { return <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} className="mt-5 rounded-[1.5rem] bg-emerald-50 p-5 ring-1 ring-emerald-100"><span className="grid size-11 place-items-center rounded-2xl bg-success text-white"><Check size={22} /></span><h3 className="mt-4 text-xl font-bold">Day 12 submitted.</h3><p className="mt-2 text-sm leading-6 text-muted">Your GitHub and LinkedIn proof are recorded for this local challenge session. Your 12-day streak is safe.</p><div className="mt-5 flex items-center gap-2 text-sm font-semibold text-success"><CheckCircle2 size={17} /> Submission complete</div><Button to="/dashboard" variant="secondary" className="mt-5 w-full">Return to dashboard <ArrowRight size={17} /></Button></motion.div> }
