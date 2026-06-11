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
            <div className="w-full max-w-[320px] aspect-square rounded-card border border-bdr overflow-hidden transition-[border-color,box-shadow] duration-300 hover:border-[rgba(74,232,154,0.3)] hover:shadow-[0_0_40px_rgba(74,232,154,0.06)]">
              <img
                src="https://avatars.githubusercontent.com/u/81039794?s=1000&u=7be425c8651203883f9e462cf06f4e238b04cd84&v=4"
                alt="Ali Agboola"
                className="w-full h-full object-cover"
              />
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
                I'm a Product Manager with an engineering mindset. I joined the HNG
                Internship across <strong className="text-txt font-medium">Frontend, Backend, and Product Management</strong> because
                I believe strong PMs should understand enough of the technical layer
                to read a pull request, trace an API call, and spot implementation
                risk early.
              </p>
              <p className="text-muted mb-5 leading-[1.7]">
                My strength is <strong className="text-txt font-medium">pre-code validation</strong>. I map data flows,
                check API constraints, and think through the technical shape of a
                feature before it reaches a sprint. That has helped me reduce rework,
                support better planning, and ship features with fewer surprises. I've
                worked closely with backend teams, written Technical Requirements
                Documents, and shaped RICE-based sprint strategies under real
                constraints.
              </p>
              <p className="text-muted mb-5 leading-[1.7]">
                Beyond product, I'm interested in fintech, system failure, and how
                markets behave in different contexts. I tend to do my best work where
                product, engineering, and real-world complexity meet.
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
                    className="bg-bg3 border border-bdr rounded-full px-3.5 py-1 text-[0.8rem] text-muted transition-[border-color,color] duration-200 hover:border-accent/40 hover:text-txt"
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
