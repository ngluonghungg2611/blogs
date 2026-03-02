export interface PostFrontmatter {
  title: string
  date: string
  tags: string[]
  author: string
  authorTitle?: string
  authorAvatar?: string
  excerpt: string
  coverImage?: string
  draft?: boolean
}

export interface PostMeta extends PostFrontmatter {
  slug: string
  readingTime: string
}

export interface PostWithContent extends PostMeta {
  content: string
}

export interface Heading {
  id: string
  text: string
  level: number
}
