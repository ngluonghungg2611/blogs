'use client'

import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import type { Heading } from '@/types/post'

interface TableOfContentsProps {
  headings: Heading[]
}

export function TableOfContents({ headings }: TableOfContentsProps) {
  const [activeId, setActiveId] = useState<string>('')

  useEffect(() => {
    if (headings.length === 0) return

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveId(entry.target.id)
          }
        })
      },
      { rootMargin: '0% 0% -80% 0%', threshold: 0 }
    )

    headings.forEach(({ id }) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [headings])

  if (headings.length === 0) return null

  return (
    <nav aria-label="Table of contents" className="hidden lg:block">
      <div className="sticky top-24">
        <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-4">
          On this page
        </p>
        <ul className="space-y-1">
          {headings.map((heading) => (
            <li
              key={heading.id}
              style={{ paddingLeft: heading.level === 3 ? '0.75rem' : '0' }}
            >
              <a
                href={`#${heading.id}`}
                onClick={(e) => {
                  e.preventDefault()
                  const el = document.getElementById(heading.id)
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' })
                    window.history.pushState(null, '', `#${heading.id}`)
                    setActiveId(heading.id)
                  }
                }}
                className={cn(
                  'block text-sm py-1 pr-2 leading-snug border-l-2 pl-3 transition-all duration-150',
                  activeId === heading.id
                    ? 'border-blue-500 text-blue-600 dark:text-blue-400 font-medium'
                    : 'border-transparent text-muted-foreground hover:text-foreground hover:border-neutral-300 dark:hover:border-neutral-600'
                )}
              >
                {heading.text}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}
