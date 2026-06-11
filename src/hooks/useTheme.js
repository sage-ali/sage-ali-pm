import { useEffect, useState } from 'react'

export function useTheme() {
  const [theme, setTheme] = useState(
    () => (typeof window !== 'undefined' ? (localStorage.getItem('theme') ?? 'dark') : 'dark')
  )

  useEffect(() => {
    const root = document.documentElement
    root.classList.add('theme-transitioning')
    root.setAttribute('data-theme', theme)
    localStorage.setItem('theme', theme)
    const t = setTimeout(() => root.classList.remove('theme-transitioning'), 300)
    return () => clearTimeout(t)
  }, [theme])

  return { theme, toggle: () => setTheme(t => (t === 'dark' ? 'light' : 'dark')) }
}
