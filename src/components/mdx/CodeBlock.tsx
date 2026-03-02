'use client'

import { useState } from 'react'
import { cn } from '@/lib/utils'

interface CodeBlockProps {
  children: React.ReactNode
  className?: string
  'data-language'?: string
}

export function CodeBlock({ children, className, ...props }: CodeBlockProps) {
  const [copied, setCopied] = useState(false)

  const language = props['data-language'] ??
    (typeof className === 'string'
      ? className.replace(/^language-/, '')
      : undefined)

  const handleCopy = async () => {
    const codeText = extractText(children)
    if (!codeText) return
    try {
      await navigator.clipboard.writeText(codeText)
      setCopied(true)
      setTimeout(() => setCopied(false), 2000)
    } catch {
      // clipboard not available
    }
  }

  return (
    <div className="group relative my-6 rounded-xl overflow-hidden border border-border bg-neutral-50 dark:bg-neutral-900">
      {/* Header bar */}
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-border bg-neutral-100/50 dark:bg-neutral-800/50">
        <span className="text-xs font-mono text-muted-foreground">
          {language ?? 'code'}
        </span>
        <button
          onClick={handleCopy}
          className={cn(
            'flex items-center gap-1.5 text-xs px-2 py-1 rounded-md transition-all',
            'text-muted-foreground hover:text-foreground',
            'hover:bg-neutral-200 dark:hover:bg-neutral-700',
            copied && 'text-green-600 dark:text-green-400'
          )}
          aria-label="Copy code"
        >
          {copied ? (
            <>
              <CheckIcon />
              Copied!
            </>
          ) : (
            <>
              <CopyIcon />
              Copy
            </>
          )}
        </button>
      </div>

      {/* Code content */}
      <div className="overflow-x-auto">
        <pre className="p-4 m-0 text-sm leading-relaxed font-mono bg-transparent">
          {children}
        </pre>
      </div>
    </div>
  )
}

function extractText(node: React.ReactNode): string {
  if (typeof node === 'string') return node
  if (typeof node === 'number') return String(node)
  if (!node) return ''
  if (Array.isArray(node)) return node.map(extractText).join('')
  if (typeof node === 'object' && 'props' in (node as object)) {
    const el = node as React.ReactElement
    return extractText(el.props?.children)
  }
  return ''
}

function CopyIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect width="14" height="14" x="8" y="8" rx="2" ry="2" />
      <path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2" />
    </svg>
  )
}

function CheckIcon() {
  return (
    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="20 6 9 17 4 12" />
    </svg>
  )
}
