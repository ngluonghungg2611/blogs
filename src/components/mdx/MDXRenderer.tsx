import { MDXRemote } from 'next-mdx-remote/rsc'
import { mdxComponents } from './MDXComponents'
import type { MDXRemoteProps } from 'next-mdx-remote/rsc'

interface MDXRendererProps {
  source: MDXRemoteProps['source']
  options?: MDXRemoteProps['options']
}

export function MDXRenderer({ source, options }: MDXRendererProps) {
  return (
    <MDXRemote
      source={source}
      components={mdxComponents}
      options={options}
    />
  )
}
