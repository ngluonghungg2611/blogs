import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import { BlogCard } from '@/components/blog/BlogCard'

export async function BlogHighlight() {
  const posts = (await getAllPosts()).slice(0, 3)

  return (
    <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-16">
      <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 dark:text-blue-400 mb-3 flex items-center gap-2">
        <span className="inline-block w-4 h-px bg-blue-500 dark:bg-blue-400" />
        Blog
      </p>
      <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
        Latest Writing
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mb-8">
        {posts.map((post) => (
          <BlogCard key={post.slug} post={post} />
        ))}
      </div>
      <Link href="/blog" className="text-sm font-semibold text-blue-500 hover:underline">
        Xem thêm →
      </Link>
    </div>
  )
}
