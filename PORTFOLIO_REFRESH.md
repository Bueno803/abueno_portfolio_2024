# Portfolio Refresh Action Items

## 1. Clean Up Technical Debt
- [ ] Fix `class` → `className` in App.js and WorkExperience.js
- [ ] Remove all unused imports (React, Tilt, GiMaterialsScience, etc.)
- [ ] Move EmailJS credentials to environment variables (.env)
- [ ] Fix StarCanvas `cancelAnimationFrame` bug (needs frame ID, not function ref)
- [ ] Remove `aos` dependency (replace with Framer Motion `whileInView` since it's already installed)

## 2. Rework the Hero Section
- [ ] Remove the swipeable photo cards
- [ ] Add a typing animation that cycles through specializations ("Backend Engineer", "Data Scientist", "Fullstack Developer")
- [ ] Tighten the bento grid layout — each tile animates on scroll with Framer Motion `whileInView`
- [ ] Update the "Download Resume" button to support multiple resume options

## 3. Update Work Experience Content
- [ ] Pull current roles, dates, and tech stacks from your resumes
- [ ] Update the vertical timeline entries to reflect your latest experience
- [ ] Remove placeholder project data that's no longer used

## 4. Interactive Skills Visualization
- [ ] Replace the static skill list with a floating tag cloud (CSS `@keyframes` + `transform`, no canvas)
- [ ] OR: Add animated skill progress bars that fill on scroll (`whileInView` + width transition)
- [ ] Group skills by category (Languages, Frameworks, Tools, Soft Skills)

## 5. Rework the Projects Section
- [ ] Replace horizontal scroll carousel with expandable project cards (Framer Motion `layoutId`)
- [ ] OR: Keep horizontal scroll but add scroll-snap + navigation dots for mobile
- [ ] Update project list to include your most recent and relevant work
- [ ] Add hover tilt effect using `react-tilt` (already installed)

## 6. Replace Canvas Stars with CSS Particles
- [ ] Remove the `StarCanvas` component
- [ ] Create a CSS-only particle background (30–50 small divs with `@keyframes` and randomized `animation-delay`)
- [ ] OR: Use Framer Motion `motion.div` elements with randomized float animations
- [ ] Ensure it covers the background properly without hardcoded positioning

## 7. Add Resume Picker Section
- [ ] Add a tabbed or button-based picker: "General", "Backend", "Data Science"
- [ ] Each option previews or triggers download of the corresponding resume from `/public/resumes/`
- [ ] Style consistently with the rest of the site

## 8. Micro-Interactions & Polish
- [ ] Add scroll-triggered fade/slide to all sections using Framer Motion `whileInView`
- [ ] Add a navbar scroll progress indicator (thin bar at top that grows as user scrolls)
- [ ] Add hover tilt on project cards
- [ ] Ensure all animations use `transform`/`opacity` only (GPU composited, mobile-safe)

---

## Priority Order (suggested)
1. Technical debt cleanup (solid foundation first)
2. Update work experience content (most impactful for recruiters)
3. Hero section rework
4. Projects section rework
5. Skills visualization
6. CSS particles background
7. Resume picker
8. Micro-interactions & polish
