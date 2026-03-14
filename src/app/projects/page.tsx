import { generateSeoMetadata } from '@/lib/metadata'
import type { Metadata } from 'next'
import { ProjectsGrid } from './ProjectsGrid'

export const metadata: Metadata = generateSeoMetadata({
  title: 'Projects',
  description: 'A showcase of AI and full-stack projects built by Isben — chatbots, data visualization, and more.',
})

export default function ProjectsPage() {
  return (
    <div>
      {/* Hero header */}
      <div className="bg-neutral-900 dark:bg-neutral-950 px-4 sm:px-6 lg:px-8 pt-16 pb-14">
        <div className="mx-auto max-w-6xl">
          <p className="text-xs font-semibold uppercase tracking-widest text-blue-400 mb-3 flex items-center gap-2">
            <span className="inline-block w-4 h-px bg-blue-400" />
            Portfolio
          </p>
          <h1 className="text-5xl sm:text-6xl font-bold tracking-tight text-white mb-4">
            Projects
          </h1>
          <p className="text-neutral-400 text-base max-w-xl leading-relaxed">
            A collection of AI-powered tools and full-stack applications I&apos;ve built — from conversational data exploration to intelligent automation systems.
          </p>
        </div>
      </div>

      {/* Grid */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-14">
        <ProjectsGrid />
      </div>
    </div>
  )
}
