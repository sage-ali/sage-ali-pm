const caseStudies = [
  {
    title: 'VendSync Q3 Sprint Strategy',
    subtitle: 'Product Strategy · RICE Prioritisation · Stakeholder Management',
    label: 'Stage Task',
    labelClass: 'bg-[rgba(74,232,154,0.1)] text-accent border border-[rgba(74,232,154,0.2)]',
    metrics: [
      { num: '3,857', label: 'RICE score, DB refactor' },
      { num: '500+', label: 'Weekly checkout bug tickets' },
      { num: '4 pts', label: 'Reserve held for QA buffer' },
    ],
    body: [
      { heading: 'The situation:', text: 'VendSync, an African merchant platform, had 15 sprint engineering points and five competing backlog items totalling 34 points. A Black Friday infrastructure deadline was six weeks away. The CEO wanted the WhatsApp Checkout Bot shipped.' },
      { heading: 'My approach:', text: "I applied the RICE framework with manual confidence adjustments. I lowered the WhatsApp Bot's confidence score from the marketing-claimed 50% to 40% (combining 50% engineering confidence with 80% reliability on the acquisition projection). A buggy bot at launch would actively damage trust with the merchants it was supposed to attract." },
      { heading: 'The decision:', text: 'Build the Inventory Database Refactor (RICE: 3,857) and fix the White Screen Checkout Bug (RICE: 855). Defer everything else. Hold 4 engineering points as a QA and hotfix reserve. I then wrote a CEO pushback memo defending the decision with data — explaining why "spending points to meet a budget is not a product strategy."' },
    ],
  },
  {
    title: 'ContentQ Onboarding Audit',
    subtitle: 'UX Research · Friction Analysis · Bug Reporting',
    label: 'UX Audit',
    labelClass: 'bg-[rgba(74,232,154,0.1)] text-accent border border-[rgba(74,232,154,0.2)]',
    metrics: [
      { num: '5', label: 'Friction points identified' },
      { num: '2×', label: 'Duplicate OS prompts on signup' },
      { num: '0', label: 'Payoff from profiling data at launch' },
    ],
    body: [
      { heading: 'The problem:', text: 'ContentQ is a creator productivity app that asks users for platform preferences, niche categories, and audience size during onboarding — but then delivers a completely empty "No Ideas Yet" screen as the reward. The app also fired an OS notification permission prompt twice before the user had experienced any core value.' },
      { heading: 'My analysis:', text: "I mapped the full onboarding flow from first launch to first action, identifying five friction points. The key insight: the app collected rich profiling data but did not use it. The fix was to pre-populate the dashboard with one personalised dummy idea based on the user's stated niche — turning the empty state from a dead end into a starting point." },
      { heading: 'Deliverable:', text: 'A structured QA report with screenshot evidence, friction ranking, proposed fixes, and a separate bug report spreadsheet covering UI defects found during testing.' },
    ],
  },
  {
    title: 'FlowBrand Technical Requirements Document',
    subtitle: 'Technical PM · API Spec · Design Handoff',
    label: 'Technical',
    labelClass: 'bg-[rgba(251,184,36,0.1)] text-accent-amber border border-[rgba(251,184,36,0.2)]',
    metrics: null,
    body: [
      { heading: 'The context:', text: 'As the PM embedded with the FlowBrand backend team, I was tasked with writing the full Technical Requirements Document for the product — a guided marketing funnel wizard for SMBs. The brief required translating product decisions into language developers could build from.' },
      { heading: 'What I produced:', text: 'A complete TRD covering the authentication flow (Google OAuth + session security), database schema for funnel creation, API endpoint specifications for the strategy dashboard, and a design handoff section bridging wireframes to technical constraints. I structured it across four sprints: Auth → Core Logic → Dashboard → Beta Launch.' },
      { heading: 'The lesson:', text: "Writing this document taught me what good ticket-writing actually looks like. A well-specified requirement is a form of respect for the engineer's time. It removes ambiguity before the sprint starts, not during it." },
    ],
  },
  {
    title: 'VoiceStage MR — Product Concept',
    subtitle: 'PRD · Pitch Deck · MR / XR · AI Coaching Platform',
    label: 'Original concept',
    labelClass: 'bg-[rgba(167,139,250,0.1)] text-accent-purple border border-[rgba(167,139,250,0.2)]',
    metrics: [
      { num: '$42B', label: 'Global corporate training TAM' },
      { num: '75%', label: 'Professionals fear public speaking' },
      { num: '$320M', label: '3-year reachable SOM' },
    ],
    body: [
      { heading: 'The problem:', text: '75% of professionals rank public speaking as their #1 fear, yet no existing tool combines immersive simulation, real-time multimodal coaching, and an adaptive AI audience in one product. Toastmasters is infrequent and socially judged. Video self-review has no feedback loop. Online courses are entirely passive. Corporate coaches cost £200–£500 an hour.' },
      { heading: 'The product:', text: 'VoiceStage MR is a Mixed Reality training arena running on Meta Quest 3 and Apple Vision Pro. The user chooses a scenario — investor pitch, job interview, TED stage, all-hands — sets audience size (5–500) and difficulty (relaxed to hostile), then steps into a photorealistic AI-generated venue. A GPT-4o AI Director injects live, unpredictable events: a board member checks their phone, a VC raises a hard objection mid-sentence. Post-session, an analytics dashboard surfaces a filler-word timeline, WPM pacing graph, posture heat map, eye-contact score, and a personalised 3-point coaching plan.' },
      { heading: 'Why now:', text: 'Three forces converge in 2025–26 for the first time simultaneously — affordable passthrough MR hardware (Meta Quest 3, £479, 20M+ units shipped), GPT-4o real-time multimodal AI, and a generation of professionals who lost their in-person presentation habits to remote work. The product was not viable 18 months ago. It is viable now.' },
      { heading: 'GTM logic:', text: 'One enterprise deal (200 seats × £18/month) generates £43,200 ARR — equivalent to 1,490 consumer Pro subscribers. The B2B-first approach targets L&D managers who already have budget, clear ROI frameworks, and recurring seat-licence patterns. Consumer is the awareness top-of-funnel, not the revenue engine.' },
    ],
  },
]

export default function CaseStudies() {
  return (
    <section id="case-studies" className="bg-bg2 py-20">
      <div className="max-w-[1100px] mx-auto px-6 md:px-16">
        <div className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-accent mb-4">Deep dives</div>
        <h2 className="font-display font-extrabold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.15] tracking-[-0.03em] text-txt mb-4">
          Case Studies
        </h2>
        <p className="text-muted text-base max-w-[560px] mb-12">
          The thinking behind three of my most substantial deliverables.
        </p>

        <div className="flex flex-col gap-6">
          {caseStudies.map((cs) => (
            <div key={cs.title} className="bg-bg2 border border-bdr rounded-card p-8 md:p-10">
              <div className="flex flex-col md:flex-row justify-between md:items-start gap-4 mb-6">
                <div>
                  <div className="font-display font-bold text-[1.3rem] tracking-[-0.02em] text-txt">{cs.title}</div>
                  <div className="text-muted text-sm mt-1">{cs.subtitle}</div>
                </div>
                <span className={`inline-block text-[0.7rem] font-semibold tracking-[0.08em] uppercase px-3.5 py-1.5 rounded-full whitespace-nowrap self-start ${cs.labelClass}`}>
                  {cs.label}
                </span>
              </div>

              <div className="text-muted text-[0.9rem] leading-[1.75] space-y-4">
                {cs.body.map(({ heading, text }) => (
                  <p key={heading}>
                    <strong className="text-txt font-medium">{heading}</strong> {text}
                  </p>
                ))}
              </div>

              {cs.metrics && (
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-6">
                  {cs.metrics.map(({ num, label }) => (
                    <div key={label} className="bg-bg3 rounded-lg p-4 text-center">
                      <div className="font-display font-bold text-2xl text-accent">{num}</div>
                      <div className="text-[0.75rem] text-muted mt-0.5">{label}</div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
