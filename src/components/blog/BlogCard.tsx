import Link from 'next/link'
import Image from 'next/image'
import { formatDateShort } from '@/lib/utils'
import type { PostMeta } from '@/types/post'

// Map tag → colour class
const tagColors: Record<string, string> = {
  llm:       'bg-purple-100 text-purple-700 dark:bg-purple-900/40 dark:text-purple-300',
  ai:        'bg-blue-100 text-blue-700 dark:bg-blue-900/40 dark:text-blue-300',
  mlops:     'bg-orange-100 text-orange-700 dark:bg-orange-900/40 dark:text-orange-300',
  cv:        'bg-green-100 text-green-700 dark:bg-green-900/40 dark:text-green-300',
  langgraph: 'bg-indigo-100 text-indigo-700 dark:bg-indigo-900/40 dark:text-indigo-300',
  rag:       'bg-cyan-100 text-cyan-700 dark:bg-cyan-900/40 dark:text-cyan-300',
  daily:     'bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400',
}

function getTagColor(tag: string) {
  return tagColors[tag.toLowerCase()] ?? 'bg-neutral-100 text-neutral-600 dark:bg-neutral-800 dark:text-neutral-400'
}

interface BlogCardProps {
  post: PostMeta
}

export function BlogCard({ post }: BlogCardProps) {
  const firstTag = post.tags?.[0]

  return (
    <Link
      href={`/blog/${post.slug}`}
      className="group flex flex-col rounded-2xl overflow-hidden bg-background border border-border hover:shadow-md transition-shadow duration-200"
    >
      {/* ── Cover image ── */}
      <div className="relative w-full aspect-[16/10] overflow-hidden bg-muted">
        {post.coverImage ? (
          <Image
            src={post.coverImage}
            alt={post.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-gradient-to-br from-neutral-200 to-neutral-300 dark:from-neutral-700 dark:to-neutral-800" />
        )}
      </div>

      {/* ── Content ── */}
      <div className="flex flex-col flex-1 p-5">
        {/* Tag + Date */}
        <div className="flex items-center gap-2 mb-3">
          {firstTag && (
            <span className={`text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full ${getTagColor(firstTag)}`}>
              {firstTag}
            </span>
          )}
          <time dateTime={post.date} className="text-xs text-muted-foreground">
            {formatDateShort(post.date)}
          </time>
        </div>

        {/* Title */}
        <h2 className="text-base font-bold text-foreground leading-snug mb-2 line-clamp-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
          {post.title}
        </h2>

        {/* Excerpt */}
        <p className="text-sm text-muted-foreground leading-relaxed line-clamp-3 flex-1">
          {post.excerpt}
        </p>
      </div>
    </Link>
  )
}
