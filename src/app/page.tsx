import { Suspense } from 'react'
import { getAllPosts, getAllTags } from '@/lib/posts'
import { BlogCard } from '@/components/blog/BlogCard'
import { TagFilter } from '@/components/blog/TagFilter'
import { SearchAndSort } from '@/components/blog/SearchAndSort'
import { generateSeoMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'

export const metadata: Metadata = generateSeoMetadata({
  title: 'BenTech Blog',
  description: 'All posts — AI, LLM, MLOps, Computer Vision, and more.',
})

interface PageProps {
  searchParams: { tag?: string; sort?: 'desc' | 'asc'; q?: string }
}

export default async function HomePage({ searchParams }: PageProps) {
  const allPosts = await getAllPosts()
  const allTags = getAllTags()
  const activeTag = searchParams.tag
  const activeSort = searchParams.sort === 'asc' ? 'asc' : 'desc'
  const query = searchParams.q ?? ''

  let posts = activeTag
    ? allPosts.filter((p) => p.tags?.includes(activeTag))
    : allPosts

  if (query) {
    const q = query.toLowerCase()
    posts = posts.filter(
      (p) =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags?.some((t) => t.toLowerCase().includes(q))
    )
  }

  if (activeSort === 'asc') {
    posts = [...posts].reverse()
  }

  return (
    <div>
      {/* ── Dark hero header ── */}
      <div className="bg-neutral-900 dark:bg-neutral-950 px-4 sm:px-6 lg:px-8 pt-16 pb-14">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-6xl sm:text-7xl font-bold tracking-tight text-white">
            Isben&apos;s Blog
          </h1>
        </div>
      </div>

      {/* ── Search + Sort bar ── */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-3">
          <Suspense>
            <SearchAndSort activeSort={activeSort} query={query} />
          </Suspense>
        </div>
      </div>

      {/* ── Tag filter bar ── */}
      <div className="border-b border-border bg-background">
        <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <Suspense>
            <TagFilter tags={allTags} activeTag={activeTag} />
          </Suspense>
        </div>
      </div>

      {/* ── Grid ── */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.map((post) => (
            <BlogCard key={post.slug} post={post} />
          ))}
        </div>
        {posts.length === 0 && (
          <p className="text-center py-20 text-muted-foreground">
            No posts found.
          </p>
        )}
      </div>
    </div>
  )
}
