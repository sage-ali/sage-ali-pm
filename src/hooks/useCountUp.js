import { useEffect, useState } from 'react'

export function useCountUp(end, duration = 1100, active = false) {
  const [value, setValue] = useState(0)

  useEffect(() => {
    if (!active || end === 0) return
    const startTime = performance.now()
    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3) // ease-out cubic
      setValue(Math.round(eased * end))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [active, end, duration])

  return value
}
