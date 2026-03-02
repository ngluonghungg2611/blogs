import { cn } from '@/lib/utils'

interface TagProps {
  tag: string
  className?: string
}

export function Tag({ tag, className }: TagProps) {
  return (
    <span
      className={cn(
        'inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium',
        'bg-neutral-100 dark:bg-neutral-800',
        'text-neutral-600 dark:text-neutral-400',
        'transition-colors hover:bg-neutral-200 dark:hover:bg-neutral-700',
        className
      )}
    >
      {tag}
    </span>
  )
}
