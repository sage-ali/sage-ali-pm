import { FadeIn } from './FadeIn'

const certs = [
  {
    icon: '🎓',
    iconClass: 'bg-[rgba(74,232,154,0.1)] text-accent',
    name: 'HNG Internship — PM Track',
    issuer: 'HNG Tech',
    year: '2026',
  },
  {
    icon: '🔧',
    iconClass: 'bg-[rgba(167,139,250,0.1)] text-accent-purple',
    name: 'Backend Engineering Track',
    issuer: 'HNG Tech',
    year: '2026',
  },
]

export default function Certifications() {
  return (
    <section className="bg-bg2 py-20">
      <div className="max-w-[1100px] mx-auto px-6 md:px-16">

        <FadeIn>
          <div className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-accent mb-4">Credentials</div>
          <h2 className="font-display font-extrabold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.15] tracking-[-0.03em] text-txt mb-4">
            Certifications & training
          </h2>
          <p className="text-muted text-base max-w-[560px] mb-12">
            Formal and programme-based learning.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {certs.map(({ icon, iconClass, name, issuer, year }, i) => (
            <FadeIn key={name} delay={i * 70}>
              <div className="bg-bg2 border border-bdr rounded-card p-5 flex items-start gap-4 transition-[border-color] duration-300 hover:border-bdr-hi">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-lg shrink-0 ${iconClass}`}>
                  {icon}
                </div>
                <div>
                  <div className="font-medium text-[0.9rem] text-txt">{name}</div>
                  <div className="text-[0.78rem] text-muted mt-0.5">{issuer}</div>
                  <div className="text-[0.75rem] text-accent mt-1">{year}</div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  )
}
