'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'
import { useRef } from 'react'

interface SearchAndSortProps {
  activeSort?: 'desc' | 'asc'
  query?: string
}

export function SearchAndSort({ activeSort = 'desc', query = '' }: SearchAndSortProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const formRef = useRef<HTMLFormElement>(null)

  function buildUrl(overrides: { q?: string; sort?: string }) {
    const sp = new URLSearchParams(searchParams.toString())

    if (overrides.q !== undefined) {
      if (overrides.q) sp.set('q', overrides.q)
      else sp.delete('q')
    }

    if (overrides.sort !== undefined) {
      if (overrides.sort && overrides.sort !== 'desc') sp.set('sort', overrides.sort)
      else sp.delete('sort')
    }

    const qs = sp.toString()
    return qs ? `${pathname}?${qs}` : pathname
  }

  function handleSearch(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault()
    const fd = new FormData(e.currentTarget)
    const q = (fd.get('q') as string).trim()
    router.push(buildUrl({ q }))
  }

  function handleClear() {
    router.push(buildUrl({ q: '' }))
  }

  function handleSortToggle() {
    const newSort = activeSort === 'desc' ? 'asc' : 'desc'
    router.push(buildUrl({ sort: newSort }))
  }

  return (
    <div className="flex items-center gap-3">
      {/* Search input */}
      <form ref={formRef} onSubmit={handleSearch} className="relative flex-1">
        <svg
          className="absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="11" cy="11" r="8" />
          <path d="m21 21-4.3-4.3" />
        </svg>
        <input
          name="q"
          type="text"
          defaultValue={query}
          placeholder="Search articles..."
          className="w-full pl-9 pr-8 py-1.5 rounded-full border border-border bg-transparent text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-neutral-400 transition-colors"
        />
        {query && (
          <button
            type="button"
            onClick={handleClear}
            className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 6 6 18"/><path d="m6 6 12 12"/></svg>
          </button>
        )}
      </form>

      {/* Sort toggle */}
      <button
        onClick={handleSortToggle}
        className="flex items-center gap-1.5 px-4 py-1.5 rounded-full border border-border text-xs font-medium text-muted-foreground hover:border-neutral-400 hover:text-foreground transition-colors cursor-pointer select-none shrink-0"
      >
        {activeSort === 'desc' ? 'Newest first' : 'Oldest first'}
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={cn('transition-transform', activeSort === 'asc' && 'rotate-180')}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>
    </div>
  )
}
