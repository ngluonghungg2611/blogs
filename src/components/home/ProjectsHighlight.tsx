import Link from 'next/link'
import { projects } from '@/lib/projects'

export function ProjectsHighlight() {
  const featured = projects.filter((p) => p.status !== 'Archived').slice(0, 3)

  return (
    <div className="bg-neutral-50 dark:bg-neutral-900/50 py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-xs font-semibold uppercase tracking-widest text-blue-500 dark:text-blue-400 mb-3 flex items-center gap-2">
          <span className="inline-block w-4 h-px bg-blue-500 dark:bg-blue-400" />
          Portfolio
        </p>
        <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-8">
          Featured Projects
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mb-8">
          {featured.map((project) => (
            <Link
              key={project.id}
              href="/projects"
              className="group flex flex-col rounded-2xl border border-border bg-background p-5 hover:shadow-md transition-shadow"
            >
              <h3 className="text-sm font-semibold text-foreground mb-1.5 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-sm text-muted-foreground leading-relaxed mb-4 flex-1">
                {project.tagline}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.tech.slice(0, 3).map((t) => (
                  <span key={t.label} className={`text-xs px-2 py-0.5 rounded ${t.color}`}>
                    {t.label}
                  </span>
                ))}
              </div>
            </Link>
          ))}
        </div>
        <Link href="/projects" className="text-sm font-semibold text-blue-500 hover:underline">
          Xem thêm →
        </Link>
      </div>
    </div>
  )
}
