import { FadeIn } from './FadeIn'

const projects = [
  {
    num: '01',
    github: '#',
    live: '#',
    title: 'Insighta API',
    desc: 'AI-powered intelligence profiles platform with natural-language queries, CSV bulk import, and a full REST API.',
    points: [
      'Designed the full NestJS modular architecture (profiles, auth, classification, import)',
      'Built NLP-powered search endpoint and AI classification trigger',
      'Implemented CSV bulk import with Prisma createMany + skipDuplicates for duplicate detection',
      'Containerised the service with Docker and docker-compose',
    ],
    stack: ['NestJS', 'PostgreSQL', 'Prisma', 'Docker', 'JWT'],
  },
  {
    num: '02',
    github: '#',
    live: '#',
    title: 'Insighta Web',
    desc: 'Web frontend for the Insighta intelligence profiles platform, connecting to the REST API.',
    points: [
      'Built the full Next.js App Router frontend from scratch',
      'Wired up all API calls against the Insighta REST API',
      'Implemented authenticated routes and session handling',
    ],
    stack: ['Next.js', 'TypeScript', 'Tailwind CSS', 'shadcn/ui'],
  },
  {
    num: '03',
    github: '#',
    live: null,
    title: 'Insighta CLI',
    desc: 'Command-line tool for querying and managing intelligence profiles via the Insighta API.',
    points: [
      'Built the entire CLI from scratch — commands, auth flow, output formatting',
      'Implemented token-based auth and persistent session storage',
      'Designed human-readable output with JSON and table modes',
    ],
    stack: ['TypeScript', 'Node.js'],
  },
  {
    num: '04',
    github: '#',
    live: '#',
    title: 'Habit Tracker PWA',
    desc: 'Offline-capable habit tracking Progressive Web App with e2e Playwright tests and GitHub Actions CI.',
    points: [
      'Built the app shell with full offline support via service worker',
      'Wrote the complete Playwright e2e test suite covering core user flows',
      'Set up GitHub Actions CI pipeline — lint, unit tests, and e2e on every PR',
    ],
    stack: ['Next.js', 'PWA', 'Playwright', 'Vitest', 'GitHub Actions'],
  },
  {
    num: '05',
    github: '#',
    live: null,
    title: 'AI Page Summarizer',
    desc: 'Chrome extension that extracts and summarises any web page using an AI API.',
    points: [
      'Wrote the Chrome extension manifest and background service worker',
      'Built the content script for full-page text extraction',
      'Implemented the popup UI and wired up the AI summarisation API call',
    ],
    stack: ['Vite', 'TypeScript', 'Chrome APIs', 'Web Workers'],
  },
  {
    num: '06',
    github: '#',
    live: '#',
    title: 'E2E Encrypted Chat',
    desc: "Real-time chat application with end-to-end encryption using the browser's native Web Crypto API.",
    points: [
      'Implemented ECDH key generation and public key exchange between peers',
      'Built the AES-GCM encrypt/decrypt pipeline — messages never leave the browser in plaintext',
      'Integrated WebSocket real-time transport with the crypto layer',
    ],
    stack: ['React', 'TypeScript', 'WebSockets', 'Web Crypto API'],
  },
]

function ExternalLink({ href, label }) {
  if (!href || href === '#') return null
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="inline-flex items-center gap-1 text-[0.78rem] text-muted hover:text-accent transition-colors no-underline"
    >
      {label} <span className="text-[0.65rem]">↗</span>
    </a>
  )
}

export default function EngineeringProjects() {
  return (
    <section id="engineering" className="bg-bg py-20">
      <div className="max-w-[1100px] mx-auto px-6 md:px-16">

        <FadeIn>
          <div className="text-[0.75rem] font-semibold tracking-[0.12em] uppercase text-accent mb-4">Engineering</div>
          <h2 className="font-display font-extrabold text-[clamp(1.75rem,3.5vw,2.5rem)] leading-[1.15] tracking-[-0.03em] text-txt mb-4">
            Fullstack work
          </h2>
          <p className="text-muted text-base max-w-[560px] mb-12">
            Work I built during HNG XIV — each one shipped under a real deadline with a real review process.
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-5">
          {projects.map((project, i) => (
            <FadeIn key={project.num} delay={i * 60}>
              <div className="bg-bg2 border border-bdr rounded-card p-6 h-full flex flex-col gap-4 hover:border-bdr-hi transition-[border-color] duration-300">

                {/* Header row */}
                <div className="flex items-start justify-between gap-4">
                  <span className="font-display font-extrabold text-[1.6rem] leading-none tracking-[-0.04em] text-accent/40 select-none">
                    {project.num}
                  </span>
                  <div className="flex gap-3">
                    <ExternalLink href={project.github} label="GitHub" />
                    {project.live && <ExternalLink href={project.live} label="Live" />}
                  </div>
                </div>

                {/* Title + description */}
                <div>
                  <div className="font-display font-bold text-[1.1rem] tracking-[-0.02em] text-txt mb-1">
                    {project.title}
                  </div>
                  <div className="text-muted text-sm leading-[1.6]">{project.desc}</div>
                </div>

                {/* Bullet points */}
                <ul className="flex flex-col gap-1.5 flex-1">
                  {project.points.map((point, j) => (
                    <li key={j} className="flex gap-2 text-sm text-muted leading-[1.6]">
                      <span className="text-accent mt-[3px] shrink-0">▸</span>
                      {point}
                    </li>
                  ))}
                </ul>

                {/* Stack chips */}
                <div className="flex flex-wrap gap-2 pt-4 border-t border-bdr">
                  {project.stack.map(tech => (
                    <span key={tech} className="bg-bg3 rounded px-2.5 py-0.5 text-[0.75rem] text-muted">
                      {tech}
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
