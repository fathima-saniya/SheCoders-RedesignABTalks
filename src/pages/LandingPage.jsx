import { motion } from 'framer-motion'
import { ArrowRight, Check, ChevronRight, Code2, Flame, GitBranch, Rocket, Share2, Sparkles, Trophy, UsersRound } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'
import { SectionTitle } from '../components/ui/SectionTitle'
import { landingCommunity, starterPlan } from '../data/mockData'

const fadeUp = { hidden: { opacity: 0, y: 18 }, show: { opacity: 1, y: 0 } }

export function LandingPage() {
  return <div className="pb-4 pt-5 sm:pt-10">
    <motion.section initial="hidden" animate="show" transition={{ staggerChildren: 0.1 }} className="relative overflow-hidden rounded-[2rem] bg-ink px-5 py-10 text-white sm:px-10 sm:py-16">
      <div className="pointer-events-none absolute -right-24 top-6 size-64 rounded-full border-[28px] border-brand/30" />
      <div className="pointer-events-none absolute -bottom-20 left-1/3 size-48 rounded-full bg-amber-300/10 blur-3xl" />
      <motion.div variants={fadeUp} className="relative"><Badge tone="accent"><Sparkles size={13} className="mr-1" /> A 60-day build habit for students</Badge></motion.div>
      <motion.h1 variants={fadeUp} className="relative mt-5 max-w-3xl text-[2.65rem] font-bold leading-[0.98] tracking-[-0.055em] sm:text-6xl">Build after college.<br /><span className="text-amber-200">Be seen before placement.</span></motion.h1>
      <motion.p variants={fadeUp} className="relative mt-6 max-w-xl text-base leading-7 text-white/70 sm:text-lg">ABTalks is a 60-day coding challenge for Indian college students. Make something small every day, publish the proof, and turn late-night effort into a career story.</motion.p>
      <motion.div variants={fadeUp} className="relative mt-7 flex flex-col gap-3 sm:flex-row"><Button to="/dashboard" className="w-full sm:w-auto">Start your 60 days <ArrowRight size={17} /></Button><a href="#how-it-works" className="inline-flex min-h-11 items-center justify-center rounded-xl px-4 text-sm font-semibold text-white/85 ring-1 ring-white/20 hover:bg-white/10">See how it works <ChevronRight size={17} /></a></motion.div>
      <motion.div variants={fadeUp} className="relative mt-9 flex items-center gap-3 text-sm text-white/65"><div className="flex -space-x-2">{landingCommunity.students.map((student) => <span key={student.name} className={`grid size-7 place-items-center rounded-full border-2 border-ink text-[9px] font-bold text-white ${student.color}`}>{student.initials}</span>)}</div><span>Joined by {landingCommunity.activeStudents.toLocaleString('en-IN')} builders across India</span></motion.div>
    </motion.section>

    <section id="how-it-works" className="scroll-mt-5 py-16 sm:py-24">
      <SectionTitle eyebrow="One intentional loop" title="The 60-day challenge, made simple." />
      <p className="-mt-1 max-w-xl text-sm leading-6 text-muted sm:text-base">No perfect project required. Each day is one small, public promise to yourself.</p>
      <div className="mt-8 grid gap-3 sm:grid-cols-4 sm:gap-4">
        <FlowStep number="01" icon={Code2} title="Build" detail="Make one meaningful thing." />
        <FlowStep number="02" icon={GitBranch} title="Commit" detail="Leave proof on GitHub." />
        <FlowStep number="03" icon={Share2} title="Share" detail="Reflect on LinkedIn." />
        <FlowStep number="04" icon={Flame} title="Streak" detail="Watch your habit grow." last />
      </div>
    </section>

    <section className="grid gap-5 rounded-[2rem] bg-[#f2e7da] p-5 sm:grid-cols-2 sm:p-9">
      <div><Badge tone="brand">Your first win is tiny</Badge><h2 className="mt-4 text-3xl font-bold leading-tight tracking-tight">Don’t commit to 60 days. Start with 20 minutes.</h2><p className="mt-4 leading-7 text-muted">New to ABTalks? Your first session comes with a simple starter plan, so you never have to wonder what “building” should look like.</p><Button to="/dashboard" className="mt-6">Get the starter plan <ArrowRight size={17} /></Button></div>
      <div className="rounded-2xl bg-white p-5 shadow-sm"><p className="text-xs font-bold uppercase tracking-[0.16em] text-brand">First-night plan</p><div className="mt-5 space-y-5">{starterPlan.map((item, index) => <div key={item.title} className="flex gap-3"><span className="grid size-7 shrink-0 place-items-center rounded-full bg-ink text-xs font-bold text-white">{index + 1}</span><div><div className="flex items-baseline justify-between gap-3"><h3 className="font-bold">{item.title}</h3><span className="whitespace-nowrap text-xs font-semibold text-brand">{item.time}</span></div><p className="mt-1 text-sm leading-5 text-muted">{item.detail}</p></div></div>)}</div></div>
    </section>

    <section className="py-16 sm:py-24"><SectionTitle eyebrow="Why this works" title="Your daily effort becomes visible momentum." /><div className="grid gap-7 sm:grid-cols-3"><Benefit icon={Rocket} title="A portfolio in progress" text="Build proof of work before you need it for an application." /><Benefit icon={UsersRound} title="A room that gets it" text="Learn alongside students balancing lectures, labs, and ambition." /><Benefit icon={Trophy} title="Confidence you can point to" text="Show up publicly enough times and your story gets easier to tell." /></div></section>

    <section className="grid gap-5 border-y border-stone-200 py-14 sm:grid-cols-[1.1fr_0.9fr] sm:py-20"><div><Badge tone="success">Live community energy</Badge><h2 className="mt-4 text-3xl font-bold tracking-tight">Tonight, someone is shipping.</h2><p className="mt-3 max-w-md leading-7 text-muted">You are not starting alone. These are the kinds of small builds our community turns into a habit.</p><div className="mt-6 flex gap-7"><Metric value={landingCommunity.buildsThisWeek} label="builds this week" /><Metric value={landingCommunity.colleges} label="college communities" /></div></div><div className="space-y-2">{landingCommunity.students.map((student) => <article key={student.name} className="flex items-center gap-3 rounded-2xl bg-white p-3 shadow-sm ring-1 ring-black/5"><span className={`grid size-10 place-items-center rounded-xl text-xs font-bold text-white ${student.color}`}>{student.initials}</span><div className="min-w-0 flex-1"><p className="truncate text-sm font-bold">{student.build}</p><p className="truncate text-xs text-muted">{student.name} · {student.college}</p></div><Badge tone="accent">Day {student.day}</Badge></article>)}</div></section>

    <section className="py-16 sm:py-24"><div className="overflow-hidden rounded-[2rem] bg-brand p-6 text-white sm:p-10"><div className="grid gap-8 sm:grid-cols-2 sm:items-center"><div><p className="text-sm font-bold uppercase tracking-[0.15em] text-white/70">Your streak is waiting</p><h2 className="mt-3 text-3xl font-bold leading-tight tracking-tight">Sixty small proofs can change how you see yourself.</h2><p className="mt-4 leading-7 text-white/80">Begin with one commit tonight. Tomorrow, you’ll have a reason to come back.</p><Button to="/dashboard" variant="secondary" className="mt-6">Begin day one <ArrowRight size={17} /></Button></div><StreakVisual /></div></div></section>

    <footer className="border-t border-stone-200 py-8 text-sm text-muted"><div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between"><div className="flex items-center gap-2 font-bold text-ink"><span className="grid size-7 place-items-center rounded-lg bg-ink text-xs text-white">A</span> ABTalks Reimagined</div><div className="flex gap-5"><a className="hover:text-ink" href="#how-it-works">The challenge</a><a className="hover:text-ink" href="#how-it-works">How it works</a><a className="hover:text-ink" href="/dashboard">Start now</a></div></div></footer>
  </div>
}

function FlowStep({ number, icon: Icon, title, detail, last = false }) { return <div className="relative flex gap-4 rounded-2xl bg-white p-4 shadow-sm ring-1 ring-black/5 sm:block sm:bg-transparent sm:p-0 sm:shadow-none sm:ring-0"><span className="grid size-10 shrink-0 place-items-center rounded-xl bg-ink text-white"><Icon size={19} /></span><div><p className="text-xs font-bold tracking-wider text-brand">{number}</p><h3 className="mt-0.5 font-bold">{title}</h3><p className="mt-0.5 text-sm text-muted">{detail}</p></div>{!last && <span className="absolute -right-3 top-5 hidden text-brand sm:block">→</span>}</div> }
function Benefit({ icon: Icon, title, text }) { return <div><span className="grid size-11 place-items-center rounded-2xl bg-brand/10 text-brand"><Icon size={21} /></span><h3 className="mt-4 text-lg font-bold">{title}</h3><p className="mt-2 text-sm leading-6 text-muted">{text}</p></div> }
function Metric({ value, label }) { return <div><p className="text-2xl font-bold tracking-tight">{value.toLocaleString('en-IN')}+</p><p className="text-xs text-muted">{label}</p></div> }
function StreakVisual() { return <div className="rounded-2xl bg-white/10 p-5 ring-1 ring-white/15"><div className="flex items-center justify-between"><span className="text-sm font-bold">Your first 7 nights</span><Flame size={20} className="text-amber-200" /></div><div className="mt-5 grid grid-cols-7 gap-2">{Array.from({ length: 7 }, (_, index) => <div key={index} className={`aspect-square rounded-lg ${index < 4 ? 'bg-amber-200' : index === 4 ? 'bg-white text-brand' : 'bg-white/15'}`}><span className={`grid h-full place-items-center text-xs font-bold ${index === 4 ? 'text-brand' : 'text-white/70'}`}>{index + 1}</span></div>)}</div><div className="mt-5 flex items-center gap-2 text-sm text-white/75"><Check size={16} /> Day one starts your streak.</div></div> }
