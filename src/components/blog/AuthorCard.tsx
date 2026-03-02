import Image from 'next/image'
import type { PostMeta } from '@/types/post'

interface AuthorCardProps {
  author: PostMeta['author']
  authorTitle?: PostMeta['authorTitle']
  authorAvatar?: PostMeta['authorAvatar']
}

export function AuthorCard({ author, authorTitle, authorAvatar }: AuthorCardProps) {
  return (
    <div className="flex items-start gap-4 p-5 rounded-xl border border-border bg-neutral-50 dark:bg-neutral-900/50 mt-12">
      {/* Avatar */}
      <div className="relative w-12 h-12 rounded-full overflow-hidden bg-gradient-to-br from-blue-400 to-blue-600 shrink-0 flex items-center justify-center">
        {authorAvatar ? (
          <Image
            src={authorAvatar}
            alt={author}
            fill
            className="object-cover"
          />
        ) : (
          <span className="text-white font-semibold text-lg">
            {author.charAt(0)}
          </span>
        )}
      </div>

      {/* Info */}
      <div>
        <p className="font-semibold text-foreground text-sm mb-0.5">{author}</p>
        {authorTitle && (
          <p className="text-sm text-muted-foreground">{authorTitle}</p>
        )}
        <p className="text-sm text-muted-foreground mt-2">
          Writing about software engineering, distributed systems, and the craft of building great products.
        </p>
      </div>
    </div>
  )
}
