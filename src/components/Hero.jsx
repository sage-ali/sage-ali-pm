import { useEffect, useState } from 'react'
import { useCountUp } from '../hooks/useCountUp'

const statData = [
  { num: 3, display: '3', sup: '+', label: 'Tracks completed (FE, BE, PM)', accent: true },
  { num: 7, display: '7', sup: '+', label: 'Live PM deliverables', accent: false },
  { num: null, display: 'HNG', sup: " '26", label: 'Finalist in 2 tracks — Backend & PM', accent: false },
]

function StatCard({ num, display, sup, label, accent, index, active }) {
  const count = useCountUp(num ?? 0, 1100, active && num !== null)
  const shown = num !== null ? count : display

  return (
    <div
      className={`hero-item bg-bg2 border rounded-card p-5 ${accent ? 'border-[rgba(74,232,154,0.3)]' : 'border-bdr'}`}
      style={{ animationDelay: `${600 + index * 120}ms` }}
    >
      <div className="font-display font-extrabold text-[2rem] tracking-[-0.03em] text-txt">
        {shown}<span className="text-accent">{sup}</span>
      </div>
      <div className="text-[0.8rem] text-muted mt-0.5">{label}</div>
    </div>
  )
}

export default function Hero() {
  const [countsActive, setCountsActive] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setCountsActive(true), 700)
    return () => clearTimeout(t)
  }, [])

  return (
    <section id="hero" className="min-h-screen flex items-center pt-[60px] bg-bg relative overflow-hidden">

      {/* Ambient background blobs */}
      <div className="absolute top-1/4 -right-24 w-[500px] h-[500px] rounded-full bg-accent opacity-[0.035] blur-[120px] pointer-events-none" />
      <div className="absolute -bottom-24 left-1/4 w-[400px] h-[400px] rounded-full bg-accent-blue opacity-[0.04] blur-[100px] pointer-events-none" />

      <div className="max-w-[1100px] mx-auto px-6 md:px-16 w-full py-20 relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left: text — staggered hero-item reveals */}
          <div>
            <div className="hero-item inline-flex items-center gap-2 bg-[rgba(74,232,154,0.1)] border border-[rgba(74,232,154,0.25)] rounded-full px-3.5 py-1.5 text-[0.8rem] text-accent mb-6" style={{ animationDelay: '100ms' }}>
              <div className="w-[7px] h-[7px] rounded-full bg-accent animate-pulse-dot" />
              Available for opportunities
            </div>

            <h1 className="hero-item font-display font-extrabold text-[clamp(2.5rem,6vw,4.5rem)] leading-[1.05] tracking-[-0.04em] text-txt mb-5" style={{ animationDelay: '220ms' }}>
              Ali Agboola<br />
              <span className="text-accent-blue">Product Manager</span>
            </h1>

            <p className="hero-item text-[1.05rem] text-muted max-w-[480px] mb-8 leading-[1.7]" style={{ animationDelay: '380ms' }}>
              Technical PM bridging engineering and strategy. I validate features
              before development starts — writing SQL, checking APIs, and turning
              ambiguous goals into buildable roadmaps.
            </p>

            <div className="hero-item flex gap-4 flex-wrap" style={{ animationDelay: '520ms' }}>
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-accent text-[#0A1F14] hover:bg-[#6FFBAF] transition-colors no-underline"
              >
                View my work
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-medium bg-transparent text-txt border border-bdr-hi hover:border-accent hover:text-accent transition-colors no-underline"
              >
                Get in touch
              </a>
            </div>
          </div>

          {/* Right: stats with count-up */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {statData.map((stat, i) => (
              <StatCard key={stat.label} {...stat} index={i} active={countsActive} />
            ))}
          </div>

        </div>
      </div>
    </section>
  )
}
