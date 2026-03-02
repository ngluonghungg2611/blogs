import Image from 'next/image'
import Link from 'next/link'
import { CodeBlock } from './CodeBlock'
import type { MDXComponents } from 'mdx/types'

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^\w\s-]/g, '')
    .replace(/\s+/g, '-')
    .replace(/-+/g, '-')
    .trim()
}

function HeadingAnchor({ id }: { id: string }) {
  return (
    <a
      href={`#${id}`}
      className="anchor mr-2 opacity-0 group-hover:opacity-100 transition-opacity text-muted-foreground hover:text-blue-500"
      aria-hidden="true"
      tabIndex={-1}
    >
      #
    </a>
  )
}

export const mdxComponents: MDXComponents = {
  h1: ({ children, ...props }) => {
    const id = props.id ?? slugify(String(children))
    return (
      <h1 id={id} className="group flex items-center scroll-mt-20" {...props}>
        <HeadingAnchor id={id} />
        {children}
      </h1>
    )
  },
  h2: ({ children, ...props }) => {
    const id = props.id ?? slugify(String(children))
    return (
      <h2 id={id} className="group flex items-center scroll-mt-20" {...props}>
        <HeadingAnchor id={id} />
        {children}
      </h2>
    )
  },
  h3: ({ children, ...props }) => {
    const id = props.id ?? slugify(String(children))
    return (
      <h3 id={id} className="group flex items-center scroll-mt-20" {...props}>
        <HeadingAnchor id={id} />
        {children}
      </h3>
    )
  },
  h4: ({ children, ...props }) => {
    const id = props.id ?? slugify(String(children))
    return (
      <h4 id={id} className="group flex items-center scroll-mt-20" {...props}>
        <HeadingAnchor id={id} />
        {children}
      </h4>
    )
  },
  // Code blocks — pre wraps code
  pre: ({ children, ...props }) => {
    // Extract language from child code element's className
    const child = children as React.ReactElement
    const codeClass = child?.props?.className ?? ''
    const language = codeClass.replace('language-', '')
    return (
      <CodeBlock data-language={language} className={codeClass}>
        {children}
      </CodeBlock>
    )
  },
  // Inline code
  code: ({ children, className, ...props }) => {
    // If inside a pre, let CodeBlock handle it
    if (className?.startsWith('language-')) {
      return <code className={className} {...props}>{children}</code>
    }
    return (
      <code
        className="font-mono text-sm px-1.5 py-0.5 rounded bg-neutral-100 dark:bg-neutral-800 text-neutral-800 dark:text-neutral-200"
        {...props}
      >
        {children}
      </code>
    )
  },
  // Blockquote
  blockquote: ({ children, ...props }) => (
    <blockquote
      className="border-l-4 border-blue-500 bg-blue-50 dark:bg-blue-950/30 pl-6 pr-4 py-3 my-6 rounded-r-lg not-italic"
      {...props}
    >
      {children}
    </blockquote>
  ),
  // Images
  img: ({ src, alt, ...props }) => {
    if (!src) return null
    return (
      <span className="block my-8">
        <Image
          src={src}
          alt={alt ?? ''}
          width={1200}
          height={630}
          className="rounded-xl shadow-sm w-full h-auto"
          {...(props as object)}
        />
        {alt && (
          <span className="block text-center text-sm text-muted-foreground mt-2">
            {alt}
          </span>
        )}
      </span>
    )
  },
  // Links
  a: ({ href, children, ...props }) => {
    if (!href) return <a {...props}>{children}</a>
    const isExternal = href.startsWith('http') || href.startsWith('//')
    if (isExternal) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-600 dark:text-blue-400 underline underline-offset-2 hover:no-underline transition-all"
          {...props}
        >
          {children}
        </a>
      )
    }
    return (
      <Link
        href={href}
        className="text-blue-600 dark:text-blue-400 underline underline-offset-2 hover:no-underline transition-all"
        {...props}
      >
        {children}
      </Link>
    )
  },
  // Horizontal rule
  hr: () => <hr className="border-border my-8" />,
}
