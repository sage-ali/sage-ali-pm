import { FadeIn } from './FadeIn'

const timeline = [
  {
    date: 'April 2026 — June 2026',
    role: 'Product Manager — Backend Track',
    org: 'HNG Internship · FlowBrand Team',
    dotColor: 'bg-accent',
    items: [
      'Embedded PM for the FlowBrand backend team, responsible for ticket writing, sprint planning, and technical requirements.',
      'Wrote the product\'s full TRD covering authentication, database schema, API specs, and design handoff across four sprints.',
      'Finished as highest performer in Stage 6 Backend with 80% score.',
      'Developed the VendSync product concept independently — RICE-scored sprint strategy, CEO pushback memo, and stakeholder communication under budget constraints.',
      'Conducted a full UX audit and QA report for ContentQ, identifying five onboarding friction points with proposed fixes.',
    ],
  },
  {
    date: 'April 2026 — Stage 4',
    role: 'Technical Product Manager',
    org: 'HNG Internship · PM Track',
    dotColor: 'bg-accent-blue',
    items: [
      'Completed Stage 4 technical PM track: translated product concept into strict technical requirements for developers.',
      'Delivered a market intelligence report on the UK digital economy — analysing Revolut, Deliveroo, and Tesco Clubcard against UK regulatory frameworks.',
      'Produced the MeetMind PM Audit Assessment and a PRD + GTM strategy for personal positioning as a Technical PM.',
      'Conceived and fully specified VoiceStage MR — a Mixed Reality public speaking coaching platform — including a 13-section PRD and a 9-slide investor pitch deck covering TAM/SAM/SOM, tech stack, roadmap, and competitive moat.',
    ],
  },
  {
    date: 'April 2026 — Stage 2–3',
    role: 'Multi-track Intern (FE + BE + PM)',
    org: 'HNG Internship',
    dotColor: 'bg-muted',
    items: [
      'Enrolled across Frontend, Backend, and Product tracks simultaneously to build end-to-end product intuition.',
      'Dropped Frontend at Stage 5 to maintain quality across the remaining two tracks — a deliberate scope decision, not a failure.',
    ],
  },
]

export default function Experience() {
  return (
    <section id="experience" className="bg-bg py-20">
      <div className="max-w-[1100px] mx-auto px-6 md:px-16">

        <FadeIn>
          <div className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-accent mb-4">History</div>
          <h2 className="font-display font-extrabold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.15] tracking-[-0.03em] text-txt mb-4">
            Internship experience
          </h2>
          <p className="text-muted text-base max-w-[560px] mb-12">
            Real work, real constraints, real teams.
          </p>
        </FadeIn>

        <div className="relative">
          <div className="absolute left-0 top-0 bottom-0 w-px bg-white/8" />

          {timeline.map(({ date, role, org, dotColor, items }, i) => (
            <FadeIn key={role} delay={i * 100} className="pl-10 mb-10 last:mb-0 relative">
              <div className={`absolute left-[-5px] top-1.5 w-[11px] h-[11px] rounded-full border-2 border-bg ${dotColor}`} />
              <div className="text-[0.78rem] text-muted tracking-[0.04em] mb-1">{date}</div>
              <div className="font-medium text-base text-txt mb-0.5">{role}</div>
              <div className="text-accent-blue text-[0.9rem] mb-3">{org}</div>
              <ul className="list-disc list-outside pl-4 text-muted text-sm space-y-1.5">
                {items.map((item, j) => (
                  <li key={j}>{item}</li>
                ))}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
