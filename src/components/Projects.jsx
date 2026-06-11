import { FadeIn } from './FadeIn'

const projects = [
  {
    badge: 'Product Strategy',
    badgeClass: 'bg-[rgba(74,232,154,0.12)] text-accent',
    title: 'VendSync — Q3 Roadmap',
    desc: 'Sprint prioritisation strategy for an African merchant platform. Used RICE framework under a strict 15-point engineering budget. Deferred £0 value vs. prevented a Black Friday infrastructure crash.',
    chips: ['RICE Framework', 'Sprint Planning', 'Stakeholder Memo'],
  },
  {
    badge: 'UX Audit',
    badgeClass: 'bg-[rgba(61,187,255,0.12)] text-accent-blue',
    title: 'ContentQ — New User Audit & QA',
    desc: 'Full onboarding friction analysis for a creator productivity app. Identified 5 friction points including a premature OS notification prompt and a zero-payoff profiling sequence. Included a structured bug report with screenshots.',
    chips: ['UX Research', 'Bug Reporting', 'Onboarding Flows'],
  },
  {
    badge: 'PM Audit',
    badgeClass: 'bg-[rgba(167,139,250,0.12)] text-accent-purple',
    title: 'MeetMind — PM Audit Assessment',
    desc: 'Product audit of an AI voice participation SDK for video calls. Assessed core functionality, target users, GTM direction, and a 3-week MVP plan across four milestones. HNG Stage 6A submission.',
    chips: ['Product Audit', 'SDK Products', 'AI/ML'],
  },
  {
    badge: 'Market Research',
    badgeClass: 'bg-[rgba(61,187,255,0.12)] text-accent-blue',
    title: 'UK Digital Economy — Fintech Analysis',
    desc: 'Strategic analysis of the UK\'s digital product landscape — Revolut, Deliveroo, and Tesco Clubcard — mapped against the Data Use & Access Act 2025, Online Safety Act, and UK GDPR. Includes a Revolut "Co-Owner Invoices" feature concept.',
    chips: ['Market Intelligence', 'Regulatory Analysis', 'Fintech'],
  },
  {
    badge: 'Technical',
    badgeClass: 'bg-[rgba(251,191,36,0.12)] text-accent-amber',
    title: 'FlowBrand — Technical Requirements Document',
    desc: 'Full TRD for a guided marketing funnel wizard for SMBs. Covered authentication flows, database schema, API endpoints, design handoff, and a four-sprint plan from Auth through Beta Launch. Stack: NestJS · PostgreSQL · React PWA.',
    chips: ['TRD', 'API Design', 'Design Handoff'],
  },
  {
    badge: 'Personal Branding',
    badgeClass: 'bg-[rgba(255,107,107,0.12)] text-accent-red',
    title: 'Ali.A as a Product — PRD & GTM',
    desc: 'A full Product Requirements Document and Go-To-Market strategy applied to myself as a Technical PM. Defined target users (CTOs, CPOs, VPs of Engineering), value propositions, acquisition channels, and scenario pitches.',
    chips: ['PRD', 'GTM Strategy', 'Positioning'],
  },
  {
    badge: 'MR / AI Product',
    badgeClass: 'bg-[rgba(167,139,250,0.12)] text-accent-purple',
    title: 'VoiceStage MR — PRD & Pitch Deck',
    desc: 'A Mixed Reality public speaking training platform for Meta Quest 3 and Apple Vision Pro. Combines a GPT-4o AI Director, real-time voice analytics, and skeleton-tracked body language coaching inside photorealistic venue simulations. HNG Stage 5 VR/MR concept.',
    chips: ['PRD', 'Pitch Deck', 'MR / XR', 'AI Coaching'],
  },
]

export default function Projects() {
  return (
    <section id="projects" className="bg-bg py-20">
      <div className="max-w-[1100px] mx-auto px-6 md:px-16">

        <FadeIn>
          <div className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-accent mb-4">Work</div>
          <h2 className="font-display font-extrabold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.15] tracking-[-0.03em] text-txt mb-4">
            Projects
          </h2>
          <p className="text-muted text-base max-w-[560px] mb-12">
            A selection of PM deliverables, product concepts, and research from the HNG internship and beyond.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <FadeIn key={project.title} delay={i * 70} as="a" href="#case-studies"
              className="project-card-hover bg-bg2 border border-white/8 rounded-card p-7 no-underline text-inherit block"
            >
              <span className={`inline-block text-[0.7rem] font-semibold tracking-[0.08em] uppercase px-2.5 py-1 rounded mb-4 ${project.badgeClass}`}>
                {project.badge}
              </span>
              <div className="font-display font-bold text-[1.15rem] tracking-[-0.02em] text-txt mb-2">
                {project.title}
              </div>
              <div className="text-muted text-sm leading-[1.6]">
                {project.desc}
              </div>
              <div className="flex flex-wrap gap-2 mt-5 pt-5 border-t border-white/8">
                {project.chips.map(chip => (
                  <span key={chip} className="bg-bg3 rounded px-2.5 py-0.5 text-[0.75rem] text-muted">
                    {chip}
                  </span>
                ))}
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
