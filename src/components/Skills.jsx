import { FadeIn } from './FadeIn'

const skillGroups = [
  {
    title: 'Product Management',
    skills: ['Roadmap strategy', 'RICE / MoSCoW', 'Sprint planning', 'PRD writing', 'Stakeholder comms', 'Feature scoping', 'User stories'],
  },
  {
    title: 'Technical',
    skills: ['API validation', 'SQL', 'TRD writing', 'Database schema', 'Auth flows', 'REST APIs', 'NestJS', 'PostgreSQL'],
  },
  {
    title: 'Research & Analysis',
    skills: ['UX audits', 'Bug reporting', 'Market analysis', 'Competitor teardowns', 'Regulatory mapping', 'User interviews'],
  },
  {
    title: 'Tools & Frameworks',
    skills: ['Jira / Linear', 'Figma', 'Notion', 'Google Analytics', 'Slack', 'GitHub'],
  },
  {
    title: 'Domain Knowledge',
    skills: ['UK Fintech', 'African markets', 'Open Finance', 'GDPR / OSA', 'Creator tools', 'SMB software', 'MR / XR products', 'AI / LLM applications'],
  },
  {
    title: 'Communication',
    skills: ['Ticket writing', 'Executive decks', 'GTM strategy', 'Pushback memos', 'Cross-functional comms'],
  },
]

export default function Skills() {
  return (
    <section id="skills" className="bg-bg2 py-20">
      <div className="max-w-[1100px] mx-auto px-6 md:px-16">

        <FadeIn>
          <div className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-accent mb-4">Capabilities</div>
          <h2 className="font-display font-extrabold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.15] tracking-[-0.03em] text-txt mb-4">
            Skills
          </h2>
          <p className="text-muted text-base max-w-[560px] mb-12">
            Where I can add value from day one.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
          {skillGroups.map(({ title, skills }, i) => (
            <FadeIn key={title} delay={i * 60}>
              <div className="bg-bg3 border border-bdr rounded-card p-6 h-full transition-[border-color] duration-300 hover:border-bdr-hi">
                <div className="text-[0.8rem] font-semibold tracking-[0.08em] uppercase text-accent mb-4">{title}</div>
                <div className="flex flex-wrap gap-2">
                  {skills.map(skill => (
                    <span key={skill} className="bg-bg2 border border-bdr rounded-md px-3 py-1 text-[0.8rem] text-txt transition-[border-color,color] duration-200 hover:border-accent/30 hover:text-accent">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
