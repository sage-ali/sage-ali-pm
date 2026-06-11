import { FadeIn } from './FadeIn'

const tags = [
  'Technical PM', 'Fintech', 'Roadmap Strategy', 'API Design',
  'UX Audits', 'RICE Prioritisation', 'Stakeholder Comms', 'Bug Triage',
]

export default function About() {
  return (
    <section id="about" className="bg-bg2 py-20">
      <div className="max-w-[1100px] mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-[1fr_1.5fr] gap-16 items-start">

          {/* Avatar */}
          <FadeIn>
            <div className="w-full max-w-[320px] aspect-square bg-bg3 rounded-card border border-white/[0.08] flex items-center justify-center font-display font-extrabold text-[5rem] text-accent tracking-[-0.05em] transition-[border-color,box-shadow] duration-300 hover:border-[rgba(74,232,154,0.3)] hover:shadow-[0_0_40px_rgba(74,232,154,0.06)]">
              AA
            </div>
          </FadeIn>

          {/* Text */}
          <div>
            <FadeIn delay={80}>
              <div className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-accent mb-4">About me</div>
              <h2 className="font-display font-extrabold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.15] tracking-[-0.03em] text-txt mb-4">
                Building products from the inside out
              </h2>
            </FadeIn>

            <FadeIn delay={160}>
              <p className="text-muted mb-5 leading-[1.7]">
                I am a Product Manager with an engineering mindset. I joined the HNG
                Internship across <strong className="text-txt font-medium">three simultaneous tracks</strong> —
                Frontend, Backend, and Product Management — because I believe a PM
                who can't read a pull request or trace an API call is leaving value
                on the table.
              </p>
              <p className="text-muted mb-5 leading-[1.7]">
                My edge is <strong className="text-txt font-medium">pre-code validation</strong>: I map data flows,
                check API constraints, and write SQL before work hits a sprint. That
                saves engineering hours and gets better features shipped faster. I
                have worked directly embedded with backend teams, written Technical
                Requirements Documents, and delivered RICE-scored sprint strategies
                under real budget constraints.
              </p>
              <p className="text-muted mb-5 leading-[1.7]">
                Outside of product, I am genuinely curious about fintech, African
                market dynamics, and how systems fail — which is why my best work
                tends to involve finding the gap everyone else walked past.
              </p>
            </FadeIn>

            <FadeIn delay={240}>
              <div className="bg-bg3 border-l-[3px] border-accent rounded-r-lg px-6 py-5 my-6">
                <p className="text-[0.9rem] text-muted italic leading-[1.7]">
                  "Always willing to help, never made me feel stupid for asking. That kind of energy is rare and it meant more than you probably know."
                </p>
                <div className="text-[0.78rem] text-accent mt-2">— Fellow intern, HNG Cohort 2026</div>
              </div>
            </FadeIn>

            <FadeIn delay={320}>
              <div className="flex flex-wrap gap-2 mt-6">
                {tags.map((tag, i) => (
                  <span
                    key={tag}
                    className="bg-bg3 border border-white/[0.08] rounded-full px-3.5 py-1 text-[0.8rem] text-muted transition-[border-color,color] duration-200 hover:border-accent/40 hover:text-txt"
                    style={{ transitionDelay: `${i * 30}ms` }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </FadeIn>
          </div>

        </div>
      </div>
    </section>
  )
}
