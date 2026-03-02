import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import type { Metadata } from 'next'
import { getAllPosts, getPostBySlug, extractHeadings } from '@/lib/posts'
import { generateSeoMetadata } from '@/lib/metadata'
import { formatDate } from '@/lib/utils'
import { Tag } from '@/components/blog/Tag'
import { TableOfContents } from '@/components/blog/TableOfContents'
import { AuthorCard } from '@/components/blog/AuthorCard'
import { ShareButtons } from '@/components/blog/ShareButtons'
import { ReadingProgressBar } from '@/components/layout/ReadingProgressBar'
import { MDXRenderer } from '@/components/mdx/MDXRenderer'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import rehypeKatex from 'rehype-katex'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  const posts = getAllPosts()
  return posts.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  try {
    const post = await getPostBySlug(params.slug)
    return generateSeoMetadata({
      title: post.title,
      description: post.excerpt,
      slug: post.slug,
      coverImage: post.coverImage,
      tags: post.tags,
      type: 'article',
      publishedTime: post.date,
      authors: [post.author],
    })
  } catch {
    return {}
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  let post
  try {
    post = await getPostBySlug(params.slug)
  } catch {
    notFound()
  }

  const headings = extractHeadings(post.content)

  const mdxOptions = {
    mdxOptions: {
      remarkPlugins: [remarkGfm, remarkMath] as never[],
      rehypePlugins: [
        rehypeKatex,
        rehypeSlug,
        [rehypeAutolinkHeadings, { behavior: 'prepend', properties: { ariaHidden: 'true', tabIndex: -1, className: ['anchor'] } }],
        [rehypeHighlight, { ignoreMissing: true }],
      ] as never[],
    },
  }

  return (
    <>
      <ReadingProgressBar />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
        <div className="lg:grid lg:grid-cols-[1fr_220px] lg:gap-16 xl:gap-20">
          {/* Article */}
          <article className="min-w-0">
            {/* Cover image */}
            {post.coverImage && (
              <div className="relative w-full h-56 sm:h-72 rounded-xl overflow-hidden mb-8 bg-muted">
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 780px"
                />
              </div>
            )}

            {/* Header */}
            <header className="mb-10 pb-8 border-b border-border">
              {/* Tags */}
              {post.tags && post.tags.length > 0 && (
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {post.tags.map((tag) => (
                    <Link key={tag} href={`/?tag=${encodeURIComponent(tag)}`}>
                      <Tag tag={tag} />
                    </Link>
                  ))}
                </div>
              )}

              {/* Title */}
              <h1 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground mb-4 leading-tight">
                {post.title}
              </h1>

              {/* Excerpt */}
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                {post.excerpt}
              </p>

              {/* Meta row */}
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-1.5">
                  <CalendarIcon />
                  <time dateTime={post.date}>{formatDate(post.date)}</time>
                </div>
                <div className="flex items-center gap-1.5">
                  <ClockIcon />
                  <span>{post.readingTime}</span>
                </div>
                <div className="flex items-center gap-1.5">
                  <UserIcon />
                  <span>{post.author}</span>
                </div>
              </div>
            </header>

            {/* Body */}
            <div className="prose prose-neutral dark:prose-invert prose-base max-w-none">
              <MDXRenderer
                source={post.content}
                options={mdxOptions}
              />
            </div>

            {/* Footer */}
            <div className="mt-12 pt-8 border-t border-border space-y-6">
              <ShareButtons title={post.title} url={`${process.env.NEXT_PUBLIC_SITE_URL}/blog/${post.slug}`} />
              <AuthorCard
                author={post.author}
                authorTitle={post.authorTitle}
                authorAvatar={post.authorAvatar}
              />
            </div>
          </article>

          {/* TOC Sidebar */}
          <aside className="hidden lg:block">
            <TableOfContents headings={headings} />
          </aside>
        </div>
      </div>
    </>
  )
}

function CalendarIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="18" height="18" x="3" y="4" rx="2" ry="2" />
      <line x1="16" x2="16" y1="2" y2="6" />
      <line x1="8" x2="8" y1="2" y2="6" />
      <line x1="3" x2="21" y1="10" y2="10" />
    </svg>
  )
}

function ClockIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  )
}

function UserIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}
