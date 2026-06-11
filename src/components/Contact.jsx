import { FadeIn } from './FadeIn'

function GitHubIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
      <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
    </svg>
  )
}

const contactLinks = [
  {
    href: 'mailto:aliagboola1@gmail.com',
    icon: '✉',
    label: 'Email',
    value: 'aliagboola1@gmail.com',
  },
  {
    href: 'https://linkedin.com/in/ali-agboola',
    icon: 'in',
    label: 'LinkedIn',
    value: 'linkedin.com/in/ali-agboola',
    external: true,
  },
  {
    href: 'https://github.com/sage-ali',
    icon: <GitHubIcon />,
    label: 'GitHub',
    value: 'github.com/sage-ali',
    external: true,
  },
]

export default function Contact() {
  return (
    <section id="contact" className="bg-bg2 py-20">
      <div className="max-w-[1100px] mx-auto px-6 md:px-16">
        <div className="grid md:grid-cols-2 gap-16 items-start">

          <FadeIn>
            <div className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-accent mb-4">Get in touch</div>
            <h2 className="font-display font-extrabold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.15] tracking-[-0.03em] text-txt mb-6">
              Let's build something worth building
            </h2>
            <p className="text-muted mb-6 leading-[1.7]">
              I am open to PM roles, technical product opportunities, and conversations about products that matter. If you are a founder, CTO, or VP who needs someone who can hold the technical and strategic simultaneously — let's talk.
            </p>
            <p className="text-muted text-sm">
              Based in the UK. Open to remote and hybrid roles globally.
            </p>
          </FadeIn>

          <div className="flex flex-col gap-4">
            {contactLinks.map(({ href, icon, label, value, external }, i) => (
              <FadeIn key={label} delay={i * 80}>
                <a
                  href={href}
                  {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                  className="contact-link-hover flex items-center gap-4 bg-bg3 border border-white/8 rounded-[10px] p-4 no-underline text-txt"
                >
                  <div className="w-9 h-9 rounded-lg bg-[rgba(74,232,154,0.1)] flex items-center justify-center text-base text-accent font-bold shrink-0">
                    {icon}
                  </div>
                  <div>
                    <div className="text-[0.78rem] text-muted">{label}</div>
                    <div className="text-[0.9rem] text-txt font-medium">{value}</div>
                  </div>
                </a>
              </FadeIn>
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
