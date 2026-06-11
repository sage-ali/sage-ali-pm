import { useState, useEffect } from 'react'

const links = [
  { label: 'About', href: '#about', id: 'about' },
  { label: 'Projects', href: '#projects', id: 'projects' },
  { label: 'Case Studies', href: '#case-studies', id: 'case-studies' },
  { label: 'Skills', href: '#skills', id: 'skills' },
  { label: 'Experience', href: '#experience', id: 'experience' },
  { label: 'Contact', href: '#contact', id: 'contact' },
]

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [activeId, setActiveId] = useState('')
  const [scrollProgress, setScrollProgress] = useState(0)

  useEffect(() => {
    const sectionIds = ['hero', ...links.map(l => l.id)]
    const elements = sectionIds.map(id => document.getElementById(id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) setActiveId(entry.target.id)
        })
      },
      { threshold: 0.4 }
    )
    elements.forEach(el => observer.observe(el))

    const handleScroll = () => {
      const total = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(total > 0 ? (window.scrollY / total) * 100 : 0)
    }
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      observer.disconnect()
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 h-[60px] flex items-center justify-between px-6 md:px-16 bg-[rgba(14,15,17,0.88)] backdrop-blur-md border-b border-white/8">
      {/* Scroll progress bar */}
      <div
        className="absolute bottom-0 left-0 h-0.5 bg-accent transition-[width] duration-100 ease-out"
        style={{ width: `${scrollProgress}%` }}
      />

      <a href="#hero" className="font-display font-extrabold text-[1.1rem] text-txt no-underline tracking-[-0.02em]">
        Ali<span className="text-accent">.</span>A
      </a>

      {/* Desktop links */}
      <ul className="hidden md:flex gap-8 list-none m-0 p-0">
        {links.map(({ label, href, id }) => (
          <li key={href}>
            <a
              href={href}
              className={`no-underline text-sm transition-colors duration-200 ${
                activeId === id ? 'text-accent' : 'text-muted hover:text-txt'
              }`}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>

      {/* Mobile hamburger */}
      <button
        className="md:hidden flex flex-col gap-1.5 p-2 text-txt cursor-pointer bg-transparent border-0"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle menu"
      >
        <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
        <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${menuOpen ? 'opacity-0' : ''}`} />
        <span className={`block w-5 h-0.5 bg-current transition-all duration-200 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
      </button>

      {/* Mobile dropdown */}
      {menuOpen && (
        <div className="absolute top-[60px] left-0 right-0 bg-bg2 border-b border-white/8 md:hidden">
          <ul className="list-none m-0 p-4 flex flex-col gap-4">
            {links.map(({ label, href, id }) => (
              <li key={href}>
                <a
                  href={href}
                  className={`no-underline text-sm transition-colors ${
                    activeId === id ? 'text-accent' : 'text-muted hover:text-txt'
                  }`}
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
