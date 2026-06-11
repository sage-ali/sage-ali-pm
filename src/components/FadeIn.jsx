import { useInView } from '../hooks/useInView'

/**
 * Wraps children in a fade-up reveal triggered by scroll.
 * Use `as` to change the rendered element (default: div).
 * Use `delay` (ms) to stagger multiple siblings.
 */
export function FadeIn({ children, delay = 0, className = '', as: Tag = 'div', ...props }) {
  const [ref, inView] = useInView()

  return (
    <Tag
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`transition-[opacity,transform] duration-700 ease-out ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'
      } ${className}`}
      {...props}
    >
      {children}
    </Tag>
  )
}
