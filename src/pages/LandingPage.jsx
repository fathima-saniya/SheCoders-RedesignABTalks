import { ArrowRight, Sparkles } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { Badge } from '../components/ui/Badge'
import { Card } from '../components/ui/Card'

export function LandingPage() {
  return <div className="pt-9 sm:pt-14">
    <Badge tone="accent"><Sparkles size={13} className="mr-1" /> Foundation preview</Badge>
    <h1 className="mt-5 max-w-2xl text-4xl font-bold leading-tight tracking-tight sm:text-6xl">Grow a career story worth sharing.</h1>
    <p className="mt-5 max-w-xl text-base leading-7 text-muted sm:text-lg">ABTalks Reimagined is a daily learning space for students building clarity, confidence, and visible proof of work.</p>
    <div className="mt-7"><Button to="/dashboard">Open your dashboard <ArrowRight size={17} /></Button></div>
    <Card className="mt-12 max-w-xl bg-ink text-white sm:mt-16"><p className="text-sm text-white/60">Build status</p><p className="mt-1 text-xl font-bold">The foundation is ready.</p><p className="mt-2 text-sm leading-6 text-white/70">Landing, dashboard, and challenge-day routes are wired up. Their complete experiences come next.</p></Card>
  </div>
}
