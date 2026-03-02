import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import readingTime from 'reading-time'
import GithubSlugger from 'github-slugger'
import type { PostMeta, PostWithContent, Heading } from '@/types/post'

const postsDir = path.join(process.cwd(), 'src/content/posts')

export function getPostSlugs(): string[] {
  if (!fs.existsSync(postsDir)) return []
  return fs
    .readdirSync(postsDir)
    .filter((f) => f.endsWith('.mdx'))
    .map((f) => f.replace(/\.mdx$/, ''))
}

export function getPostBySlug(slug: string): PostWithContent {
  const fullPath = path.join(postsDir, `${slug}.mdx`)
  const raw = fs.readFileSync(fullPath, 'utf8')
  const { data, content } = matter(raw)
  const rt = readingTime(content)
  return {
    slug,
    title: data.title ?? '',
    date: data.date ?? '',
    tags: data.tags ?? [],
    author: data.author ?? '',
    authorTitle: data.authorTitle,
    excerpt: data.excerpt ?? '',
    coverImage: data.coverImage,
    draft: data.draft ?? false,
    readingTime: rt.text,
    content,
  }
}

export function getAllPosts(): PostMeta[] {
  return getPostSlugs()
    .map((slug) => {
      const { content: _content, ...meta } = getPostBySlug(slug)
      return meta
    })
    .filter((p) => !p.draft)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

export function extractHeadings(content: string): Heading[] {
  const slugger = new GithubSlugger()
  const headingRegex = /^(#{2,3})\s+(.+)$/gm
  const headings: Heading[] = []
  let match

  while ((match = headingRegex.exec(content)) !== null) {
    const level = match[1].length
    const text = match[2].trim().replace(/\[(.+?)\]\(.+?\)/g, '$1')
    const id = slugger.slug(text)
    headings.push({ id, text, level })
  }

  return headings
}

export function getAllTags(): string[] {
  const tagSet = new Set<string>()
  getAllPosts().forEach((post) => post.tags?.forEach((tag) => tagSet.add(tag)))
  return Array.from(tagSet).sort()
}
