'use client'

import { useRouter, usePathname, useSearchParams } from 'next/navigation'
import { cn } from '@/lib/utils'

interface TagFilterProps {
  tags: string[]
  activeTag?: string
}

export function TagFilter({ tags, activeTag }: TagFilterProps) {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()

  function buildUrl(tag?: string) {
    const sp = new URLSearchParams(searchParams.toString())
    if (tag) sp.set('tag', tag)
    else sp.delete('tag')
    const qs = sp.toString()
    return qs ? `${pathname}?${qs}` : pathname
  }

  function handleClick(tag: string) {
    if (activeTag === tag) {
      router.push(buildUrl())
    } else {
      router.push(buildUrl(tag))
    }
  }

  return (
    <div className="flex items-center gap-2 py-3 overflow-x-auto flex-nowrap">
      <button
        onClick={() => router.push(buildUrl())}
        className={cn(
          'flex items-center gap-1.5 px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors border',
          !activeTag
            ? 'bg-foreground text-background border-foreground'
            : 'bg-transparent text-muted-foreground border-border hover:border-neutral-400 hover:text-foreground'
        )}
      >
        {/* reset icon */}
        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"/><path d="M3 3v5h5"/></svg>
        All
      </button>
      {tags.map((tag) => (
        <button
          key={tag}
          onClick={() => handleClick(tag)}
          className={cn(
            'px-4 py-1.5 rounded-full text-xs font-medium whitespace-nowrap transition-colors border capitalize',
            activeTag === tag
              ? 'bg-foreground text-background border-foreground'
              : 'bg-transparent text-muted-foreground border-border hover:border-neutral-400 hover:text-foreground'
          )}
        >
          {tag}
        </button>
      ))}
    </div>
  )
}
