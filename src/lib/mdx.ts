import { compileMDX } from 'next-mdx-remote/rsc'
import remarkGfm from 'remark-gfm'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeHighlight from 'rehype-highlight'
import type { MDXComponents as MDXComponentsType } from 'mdx/types'

export async function compileMDXContent(
  source: string,
  components?: MDXComponentsType
) {
  const [{ default: remarkMath }, { default: rehypeKatex }] = await Promise.all([
    import('remark-math'),
    import('rehype-katex'),
  ])

  const result = await compileMDX({
    source,
    components,
    options: {
      parseFrontmatter: false,
      mdxOptions: {
        remarkPlugins: [remarkGfm, remarkMath],
        rehypePlugins: [
          rehypeKatex,
          rehypeSlug,
          [
            rehypeAutolinkHeadings,
            {
              behavior: 'prepend',
              properties: {
                ariaHidden: 'true',
                tabIndex: -1,
                className: ['anchor'],
              },
            },
          ],
          [rehypeHighlight, { ignoreMissing: true }],
        ],
      },
    },
  })

  return result
}
