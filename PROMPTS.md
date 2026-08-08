# ABTalks Reimagined — AI Usage Log

## AI Tools Used
- Codex

## Codex

### Prompt 1 — Project Foundation

We are building the "ABTalks Reimagined" project for a vibe-coding hackathon.

This is an existing GitHub repository but the application itself has not been built yet. The repository currently contains only the initial PROMPTS.md AI usage log.

First inspect the repository and existing files.

Build ONLY the project foundation now. Do not attempt to build all three screens in this prompt.

Requirements:

* React + Vite
* Tailwind CSS
* React Router
* Framer Motion
* Lucide React
* Mobile-first architecture
* Primary target viewport: 390px

Create the foundation for these required routes:

/
/dashboard
/day/12

Create a clean, maintainable component structure and shared design system.

Create reusable components that will be useful for the three screens, such as:

* Button
* Card
* Badge
* ProgressBar
* StatCard
* SectionTitle
* EmptyState

Create realistic local mock data for:

* student profile
* current streak
* challenge progress
* today's task
* achievements
* student standing
* recent activity
* first-day/no-streak state
* missed-day state
* empty-profile state

Do NOT implement:

* authentication
* backend
* database
* real GitHub API
* real LinkedIn API
* recruiter dashboard
* admin panel

The three required routes must load successfully, even if their final UI is not built yet.

Keep the implementation simple and easy to extend.

After creating the foundation:

1. Install required dependencies if necessary.
2. Run/build the project.
3. Fix compilation or runtime errors.
4. Verify that all three routes load.
5. Do not build the complete Landing Page, Dashboard, or Challenge Day yet.

Do not overwrite or delete PROMPTS.md.

At the end, summarize what you created and any issues remaining.

**Result:** Foundation created successfully and all three required routes are working.

### Prompt 2 — Landing Page

Continue developing the existing ABTalks Reimagined project.

First inspect the existing codebase and understand the current implementation.

IMPORTANT:
- Do not rebuild the project from scratch.
- Do not delete or overwrite PROMPTS.md.
- Preserve the existing routing, reusable components, mock data, and project structure.
- Build ONLY the Landing Page in this task.
- Do not build the Dashboard or Challenge Day yet.
- Do not add authentication, backend, database, or real external APIs.

The required Landing Page route is:

/

PROBLEM CONTEXT:

ABTalks runs a 60-day coding challenge for Indian college students.

Students choose a track, build something every day, and maintain a public learning streak by submitting:
- a GitHub commit
- a LinkedIn post

The Landing Page is the first experience for a student who has never heard of ABTalks.

The primary judging viewport is 390px wide, so design mobile-first.

The Landing Page should immediately communicate:
1. What ABTalks is
2. What the 60-day challenge is
3. What students do every day
4. Why participating is valuable
5. How to start

DESIGN GOAL:

Create a distinctive, polished and motivating experience rather than a generic SaaS/AI-generated template.

The design should feel like a real product for ambitious Indian college students who are building skills late at night after college.

Include:

1. Header/navigation
2. Strong hero section
3. Clear explanation of the 60-day challenge
4. A simple visual flow:
   Build → GitHub proof → LinkedIn proof → Streak
5. Benefits/value proposition
6. Realistic community/social proof using mocked data
7. Challenge/streak visual
8. Strong primary CTA
9. Final motivational section
10. Footer

THOUGHTFUL PRODUCT IDEA:

Introduce at least one useful idea that improves the experience for a student who is new to ABTalks.

The idea should be clearly understandable from the UI and should help reduce uncertainty or motivate the student to begin the challenge.

DESIGN REQUIREMENTS:

- Mobile-first
- Optimize carefully for 390px width
- Desktop should remain responsive but is secondary
- Strong typography hierarchy
- Clear visual hierarchy
- Comfortable spacing
- Good tap targets
- Accessible contrast
- Subtle purposeful animations
- Avoid excessive gradients
- Avoid excessive cards
- Avoid generic SaaS/template appearance
- Avoid unnecessary complexity
- Make the page feel polished and competition-ready

FUNCTIONAL REQUIREMENTS:

- The primary CTA should work.
- Navigation should work where applicable.
- The page should not contain broken links or placeholder buttons.
- Use the existing local mock data where appropriate.
- Do not use real GitHub or LinkedIn APIs.

AFTER IMPLEMENTATION:

1. Run the application.
2. Test the `/` route.
3. Test it at approximately 390px width.
4. Check for horizontal overflow.
5. Check that buttons and navigation work.
6. Fix compilation/runtime errors.
7. Keep `/dashboard` and `/day/12` intact.
8. Do not unnecessarily modify unrelated files.

At the end, briefly report:
- Files changed
- Features implemented
- Whether `/` works at 390px
- Any issues that remain

Do not build the Dashboard or Challenge Day in this task.

**Result:** Landing page completed and tested at 390px mobile width.

### Prompt 3 — Student Dashboard

Continue developing the existing ABTalks Reimagined project.

First inspect the existing implementation and preserve the current design system and components.

IMPORTANT:
- Do not rebuild the project from scratch.
- Do not delete or overwrite PROMPTS.md.
- Preserve the completed Landing Page.
- Do not modify the Landing Page unnecessarily.
- Build ONLY the Student Dashboard in this task.
- Do not build the Challenge Day page yet.
- Do not add authentication, backend, database, or real APIs.
- Use realistic mocked student data.

Required route:

/dashboard

CONTEXT:

The Student Dashboard is the home screen after a student starts the ABTalks 60-day coding challenge.

The dashboard should make the student immediately understand:
- where they are in the challenge
- what they need to do today
- their current streak
- their overall progress
- how they are performing
- what they have achieved

PRIMARY VIEWPORT:

The judging viewport is 390px wide.

Design mobile-first and optimize the dashboard specifically for a 390px phone.

DASHBOARD MUST INCLUDE:

1. Student greeting/header
   - Use a realistic mock student profile.
   - Include a small profile/avatar treatment.
   - Do not require authentication.

2. Current streak
   - Clearly show the current streak.
   - Example: 12 days.
   - Make this visually important.
   - Show encouraging supporting text.

3. Today's task
   - Clearly identify today's challenge.
   - Show the task title.
   - Briefly explain what needs to be built.
   - Include a clear CTA to continue to the challenge day.

4. Challenge progress
   - Show the current day out of 60.
   - Include a visually clear progress indicator.
   - Make progress understandable at a glance.

5. Overall completion
   - Show a meaningful completion percentage or progress visualization.
   - Ensure the number is consistent with the mocked challenge progress.

6. Student standing / achievements
   - Show realistic achievements, milestones, or standing.
   - Example:
     - current rank/percentile
     - badges
     - milestones
   - Keep this useful rather than decorative.

7. Recent activity / proof
   - Show a small realistic history of recent submissions.
   - Indicate GitHub and LinkedIn proof where appropriate.

8. Missed-day awareness
   - Include a realistic way the dashboard can communicate that a student missed a day.
   - Do not make it feel punishing.
   - The interface should encourage the student to continue.

9. Navigation
   - Provide clear navigation to the Landing Page and Challenge Day where appropriate.
   - Use the existing router.

PRODUCT THINKING:

The dashboard should answer these questions within a few seconds:

"Where am I?"
"What do I need to do today?"
"Am I keeping my streak?"
"How much have I completed?"
"Am I making progress?"

Make the hierarchy reflect these priorities.

DESIGN:

- Mobile-first
- Excellent 390px experience
- Premium but approachable
- Designed for college students
- Strong typography hierarchy
- Clear spacing
- Good tap targets
- Accessible contrast
- Consistent with the Landing Page
- Use purposeful visual feedback
- Avoid excessive cards
- Avoid generic dashboard templates
- Avoid information overload
- Make the most important information visible without excessive scrolling

MOCK DATA:

Create/use local mock data only.

Use internally consistent values.

For example, if the student is on Day 12 of 60, the progress indicator should reflect that.

Do not connect to real GitHub or LinkedIn APIs.

INTERACTIONS:

- Today's task CTA should navigate to `/day/12`.
- Navigation should work.
- Buttons should not be dead/placeholder interactions.
- If an interaction is not implemented, don't present it as a working feature.

RESPONSIVE BEHAVIOR:

- Optimize for 390px first.
- Ensure no horizontal overflow.
- Make the layout responsive for larger screens.
- Do not sacrifice the mobile experience for desktop.

AFTER IMPLEMENTATION:

1. Run the application.
2. Test `/dashboard`.
3. Test at approximately 390px width.
4. Check for horizontal overflow.
5. Check all navigation and CTA interactions.
6. Make sure the existing `/` Landing Page still works.
7. Make sure `/day/12` still loads.
8. Fix compilation and runtime errors.
9. Do not unnecessarily modify unrelated files.

At the end, briefly report:
- Files changed
- Dashboard features implemented
- Whether `/dashboard` works at 390px
- Any issues remaining

Do not build `/day/12` in this task.

**Result:** Student Dashboard completed and tested at 390px mobile width.