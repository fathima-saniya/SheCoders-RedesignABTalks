export const studentProfile = {
  id: 'student-001', name: 'Aarohi Sharma', handle: '@aarohicodes', cohort: 'ABTalks Summer Cohort', avatar: 'AS', joinedAt: '2026-07-28',
}

export const currentStreak = { days: 11, best: 14, status: 'active', message: 'One more check-in keeps your momentum going.' }

export const challengeProgress = { currentDay: 12, totalDays: 30, completedDays: 11, percentage: 37, nextMilestone: 'Halfway explorer' }

export const todaysTask = {
  day: 12, title: 'Tell your learning story', duration: '15 min', category: 'Personal brand', description: 'Turn one recent learning moment into a concise post outline.', status: 'available',
}

export const achievements = [
  { id: 'first-step', title: 'First Step', description: 'Completed your first challenge', earned: true },
  { id: 'week-one', title: 'Week One', description: 'Stayed consistent for 7 days', earned: true },
  { id: 'storyteller', title: 'Storyteller', description: 'Share 3 learning reflections', earned: false },
]

export const studentStanding = { rank: 18, totalStudents: 126, percentile: 86, change: 4 }

export const recentActivity = [
  { id: 'activity-1', day: 11, title: 'Completed: Build your proof of work', date: 'Today', type: 'complete' },
  { id: 'activity-2', day: 10, title: 'Earned the Week One badge', date: 'Yesterday', type: 'achievement' },
  { id: 'activity-3', day: 9, title: 'Saved a career goal', date: '2 days ago', type: 'update' },
]

export const firstDayState = { days: 0, best: 0, status: 'new', message: 'Your first small action starts a new streak.' }
export const missedDayState = { days: 0, best: 11, status: 'broken', message: 'A missed day is a pause, not the end. Start again today.' }
export const emptyProfileState = { id: null, name: '', handle: '', cohort: '', avatar: null, joinedAt: null }
