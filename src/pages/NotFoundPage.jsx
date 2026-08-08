import { Compass } from 'lucide-react'
import { Button } from '../components/ui/Button'
import { EmptyState } from '../components/ui/EmptyState'

export function NotFoundPage() { return <div className="pt-16"><EmptyState icon={Compass} title="This path is still being mapped" description="Return home to continue exploring ABTalks." action={<Button to="/">Back home</Button>} /></div> }
